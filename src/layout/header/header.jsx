import style from "./header.module.scss";
import logo from "../../img/logo.svg";
import img from "../../img/img.svg";
import img1 from "../../img/img1.svg";
import { Navbar } from "../../components/navbar/navbar";
export const Header = () => {
  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.block}>
        <div className={style.row}>
          <img src={logo} alt="" />
          <p className={style.text}>Колбасы и мясные деликатесы</p>
        </div>
        <div className={style.pic}>
               <img src={img} alt="" />
               <img src={img1} alt="" />
               <p className={style.tx}>Товаров: 3 <br /> <span> 6 540 ₽</span></p>
        </div>
   
        </div>
      </div>
        <Navbar />
    </div>
  );
};
