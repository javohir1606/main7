import style from './footer.module.scss'
import footer from '../../img/footer.svg'
import { FooterNav } from '../footerNav/footerNav'
export const Footer = () => {
  return <>
  <div className={style.footer}>
    <div className="container">
      <ul className={style.block}>
        <li>
          <h2 className={style.text}>Есть вопросы?</h2>
          <p className={style.tx}>Оставьте свои данные и наш менеджер свяжется с вами в ближайшее время.</p>
        </li>
        <li>
          <img src={footer} alt="" />
        </li>
        <li>
          <div className={style.row}>
            <div className="">
            <input className={style.input} type="text" placeholder='Ваше имя'/>
            <input className={style.input} type="tel" placeholder='Телефон/E-mail'/>
            </div>
            <div className="">
            <input className={style.inputt} type="text" placeholder='Комментарий'/>

            </div>
          </div>
          <div className="">
            <p className={style.pic}>Даю согласие на рассылку рекламных материалов, акций и скидок</p>
            <p className={style.pic}>Даю согласие на обработку моих персональных данных</p>
            <button className={style.btn}>Отправить</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div className="container">
    <FooterNav />
  </div>
  </>
}