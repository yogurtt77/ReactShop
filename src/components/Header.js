import React, { useState, useRef, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

export default function Header(props) {
  let [setOpen, setFunctionOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setFunctionOpen(false); // Закрыть корзину при клике вне области
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div ref={ref}>
        <span className="Logo">House Staff</span>
        <div>
          <ul className="Menu">
            <li>Про нас</li>
            <li>Контакты</li>
            <li>Кабинет</li>
          </ul>
        </div>
        <FaShoppingCart
          onClick={() => setFunctionOpen(!setOpen)}
          className={`shop-cart-button ${setOpen && "active"}`}
        />
        {setOpen && (
          <div className="testClass">
            {props.orders.length === 0 ? (
              <p className="mess">Товара в корзине нет</p>
            ) : (
              props.orders.map((el) => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
              ))
            )}
          </div>
        )}
      </div>
      <div className="Presentation"> </div>
    </header>
  );
}
