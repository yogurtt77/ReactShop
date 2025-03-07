import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Все",
        },
        {
          key: "chairs",
          name: "Стулья",
        },
        {
          key: "armchairs",
          name: "Кресло",
        },
        {
          key: "sofas",
          name: "Диван",
        },
        {
          key: "tables",
          name: "Столы",
        },
        {
          key: "storage",
          name: "Комод",
        },
        {
          key: "rugs",
          name: "Ковер",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
