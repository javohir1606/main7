import style from "./banner.module.scss";
export const Banner = () => {
  return (
    <>
      <div className={style.hero}>
        <div className="container">
          <div className={style.block}>
            <h1 className={style.text}>Истина в качестве</h1>
            <p className={style.tx}>
              КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
              КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ, ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
            </p>
            <button className={style.btn}>Купить</button>
          </div>
        </div>
      </div>
    </>
  );
};

