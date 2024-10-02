import React from "react";
import style from "./tab.module.scss";
import { TabCards } from "../../data/data";
import { TabCards2 } from "../../data/data";
import { TabCards3 } from "../../data/data";
import imga from "../../img/imga.svg"
import star from "../../img/star.svg"
export const TabCard = () => {
  const [tab, setTab] = React.useState(1);
  return (
    <>
      <div className={style.pic}>
        <button onClick={() => setTab(1)} className={style.btn}>
          Хиты
        </button>
        <button onClick={() => setTab(2)} className={style.btn}>
        Скидки
        </button>
        <button onClick={() => setTab(3)} className={style.btn}>
        Новинки
        </button>
      </div>
      {tab == 1 && (
        <div>
          <div className="container">
          <div className={style.desc}>
            {TabCards.map((item) => (
              <div className={style.block}>
                <img src={item.img} alt="#" />
                <img className={style.img} src={imga} alt="" />
                <img className={style.imges} src={star} alt="" />
                <h1 className={style.text}>{item.title}</h1>
                <p className={style.tx}>{item.description}</p>
                <p className={style.item}>{item.prais}</p>
                <ul className={style.head}>
                  <li>
                  <p className={style.wrap}>660 ₽</p>
                  </li>
                  <li className={style.ls}>
                    <p className={style.link}>-15%</p>
                    <p className={style.list}>Экономия 160 ₽</p>
                  </li>
                </ul>
                <div className={style.title}>
                    <button className={style.hero_btn}>Купить</button>
                    <button className={style.hero_button}>В 1 клик</button>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      )}

      {tab == 2 && (
        <div>
          <div className="container">
            <div className={style.desc}>
            {TabCards2.map((item) => (
              <div className={style.block}>
              <img src={item.img} alt="#" />
              <img className={style.img} src={imga} alt="" />
              <img className={style.imges} src={star} alt="" />
              <h1 className={style.text}>{item.title}</h1>
              <p className={style.tx}>{item.description}</p>
              <p className={style.item}>{item.prais}</p>
              <ul className={style.head}>
                <li>
                <p className={style.wrap}>660 ₽</p>
                </li>
                <li className={style.ls}>
                  <p className={style.link}>-15%</p>
                  <p className={style.list}>Экономия 160 ₽</p>
                </li>
              </ul>
              <div className={style.title}>
                  <button className={style.hero_btn}>Купить</button>
                  <button className={style.hero_button}>В 1 клик</button>
              </div>
            </div>
            ))}

            </div>
          </div>
        </div>
      )}
      {tab == 3 && (
        <div>
          <div className="container">
            <div className={style.desc}>

            {TabCards3.map((item) => (
              <div className={style.block}>
              <img src={item.img} alt="#" />
              <img className={style.img} src={imga} alt="" />
              <img className={style.imges} src={star} alt="" />
              <h1 className={style.text}>{item.title}</h1>
              <p className={style.tx}>{item.description}</p>
              <p className={style.item}>{item.prais}</p>
              <ul className={style.head}>
                <li>
                <p className={style.wrap}>660 ₽</p>
                </li>
                <li className={style.ls}>
                  <p className={style.link}>-15%</p>
                  <p className={style.list}>Экономия 160 ₽</p>
                </li>
              </ul>
              <div className={style.title}>
                  <button className={style.hero_btn}>Купить</button>
                  <button className={style.hero_button}>В 1 клик</button>
              </div>
            </div>
            ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
