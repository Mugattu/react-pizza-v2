import React from "react";

import "./scss/app.scss";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццыsss</h2>
          <div className="content__items">
            <PizzaBlock title="Чизбургер-пицца" price={395} />
            <PizzaBlock title="Мексиканская" price={500} />
            <PizzaBlock title="Сырная" price={450} />
            <PizzaBlock title="Страчетелла" price={480} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
