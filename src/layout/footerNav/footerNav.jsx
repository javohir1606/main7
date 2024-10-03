import style from "./footerNav.module.scss";
import img from '../../img/instagram.svg'
export const FooterNav = () => {
  return (
    <>
      <div className="container">
        <ul className={style.block}>
          <li>
            <h4 className={style.text}>Продукция</h4>
            <p className={style.tx}>
              Колбасные и мясные изделия Молочные продукты
            </p>
          </li>
          <li>
            <p className={style.tx}>Морепродукты Пиво</p>
          </li>
          <li>
            <p className={style.tx}>Замороженные продукты Мед</p>
          </li>
          <li>
            <p className={style.tx}>Свежие овощи Свежие фрукты</p>
          </li>
        </ul>
        <div className={style.desc}>
          <p className={style.link}>О компании</p>
          <p className={style.link}>Наши магазины</p>
          <p className={style.link}>Контакты</p>
        </div>
        <hr className={style.hr} />
        <ul className={style.wrap}>
          <li>
            <p className={style.pow}>2016–2021 © ООО «ПД Реснота»</p>
          </li>
          <li className={style.imges}>
            <img src={img} alt="#" />
            <img src={img} alt="#" />
            <img src={img} alt="#" />
          </li>
          <li>
            <p className={style.wraper}>Разработка и продвижение сайта — SEOabsolut</p>
          </li>
        </ul>
      </div>
    </>
  );
};
