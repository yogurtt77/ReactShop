import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullitem from "./components/ShowFullitem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул",
          img: "https://avatars.mds.yandex.net/i?id=abfc3cba555672af0ff22a29d779e7c2_l-4578697-images-thumbs&n=13",
          desc: "Сделан из высококачественного дерева с мягкой тканевой обивкой.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Кресло",
          img: "https://avatars.mds.yandex.net/i?id=823ef4ddde114d4fb88bfcbfcaea8598_l-5888323-images-thumbs&n=13 ",
          desc: "Мягкое кресло с широкой спинкой, обитое приятной на ощупь тканью. Сделано из прочного дерева и выдерживает до 150 кг. Идеально подходит для гостиной или спальни.",
          category: "armchairs",
          price: "120.99",
        },
        {
          id: 3,
          title: "Диван",
          img: "https://ladya.ru/upload/forstati/187(1).jpg",
          desc: "Уютный диван с удобными подлокотниками и съёмными подушками. Обивка выполнена из высококачественной микрофибры, устойчива к загрязнениям. Размеры: 210x90x80 см.",
          category: "sofas",
          price: "290.99",
        },
        {
          id: 4,
          title: "Обеденный стол",
          img: "https://myxmebel.ru/i/s_cat/original/Stol-obedennyiy-Portofino---SM-TD--105-01-11-1-_Osnovnoe_20220325165159_849.jpeg",
          desc: "Круглый обеденный стол диаметром 120 см. Выполнен из влагостойкого МДФ и металла. ",
          category: "tables",
          price: "199.00",
        },
        {
          id: 5,
          title: "Комод",
          img: "https://hoff.ru/upload/hoff_resize/hoff-images/291/123/0/b4cd854bc37846c69f4155d837c79d87.jpg/1500x1000_85.jpeg",
          desc: "Просторный комод с четырьмя выдвижными ящиками. Изготовлен из натурального дуба с матовым покрытием. Отлично подойдёт для хранения вещей в спальне.",
          category: "storage",
          price: "249.99",
        },
        {
          id: 6,
          title: "Ковёр",
          img: "https://avatars.mds.yandex.net/i?id=1399a27c682a42e97d54d01cf1c6f782_l-5238363-images-thumbs&n=13 ",
          desc: "Мягкий ковёр из гипоаллергенного материала. Приятная текстура, которая подойдёт для любой комнаты. ",
          category: "rugs",
          price: "89.99",
        },
      ],
      ShowFullitem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.ShowFullitem && (
          <ShowFullitem
            item={this.state.fullItem}
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ ShowFullitem: !this.state.ShowFullitem });
  }

  addToOrder(item) {
    this.setState((prevState) => {
      const existingItem = prevState.orders.find(
        (order) => order.id === item.id
      );

      // Если товар уже в корзине, увеличиваем его количество
      if (existingItem) {
        return {
          orders: prevState.orders.map((order) =>
            order.id === item.id
              ? { ...order, quantity: order.quantity + 1 } // увеличиваем количество
              : order
          ),
        };
      }

      // Если товара нет в корзине, добавляем его с количеством 1
      return {
        orders: [...prevState.orders, { ...item, quantity: 1 }],
      };
    });
  }
}

export default App;
