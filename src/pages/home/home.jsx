import { Banner } from "../../components/banner";
import { Header } from "../../layout/header/header";
import { data } from "../../data/data";
import style from './home.module.scss'
import { TabCard } from "../../components/tab/tab";
export const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className={style.menu}>
      <div className="container">
        <div className={style.row}>
        {data.map((item) => (
          <div className={style.block}>
           <img src={item.img} alt="" />
            <h1 className={style.text}>{item.title}</h1>
            <p className={style.tx}>{item.description}</p>
          </div>
        ))}

        </div>
      </div>
      </div>
      <TabCard />
    </div>
  );
};
