import React from "react";
import assets from "../assets/feeduplogo.png";
import firstImage from "../assets/firstImage.png";
import secondImage from "../assets/secondImage.png";
import thirdImage from "../assets/thirdImage.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <div className="logo">
        <img src={assets} alt="" />
      </div>
      <div id="carouselExample" className="carousel slide mb-4">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={firstImage} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={secondImage} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={thirdImage} className="d-block w-100" alt="" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="search">
        <form>
          <i
            className=" searchicon fa-solid fa-magnifying-glass"
            style={{ color: "#ffae00" }}
          ></i>
          <input
            type="search"
            className="searchinput shadow-lg p-3 mb-1 bg-body-tertiary rounded ps-5"
            placeholder="Поиск продуктов..."
          />
        </form>
      </div>
      <ul className="flex scrolforul">
        <Link to={"/lavash"}>Лаваш</Link>
        <li>Бургеры</li>
        <li>Комбо</li>
        <li>Сэндвич</li>
        <li>Пицца</li>
        <li>Напитки</li>
        <li>Лонгеры</li>
        <li>Снэки</li>
        <li>Соусы</li>
        <li>Вафли</li>
      </ul>
    </div>
  );
};

export default Home;
