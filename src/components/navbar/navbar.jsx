import style from './navbar.module.scss'
import img2 from '../../img/img2.svg'

export const Navbar = () => {
  return <div>
      <div className={style.row}>
        <div className="container">
          <div className={style.block}>

        <div className={style.pic}>
          <a className={style.link} href="#">О ресноте</a>
          <a className={style.link} href="#">Каталог</a>
          <a className={style.link} href="#">Наши магазины </a>
          <a className={style.link} href="#">Контакты</a>
        </div>
        <div className={style.title}>
          <input className={style.input} type="text" placeholder='Поиск по сайту'/>
          <img className={style.img} src={img2} alt="" />
        </div>
          </div>
        </div>
      </div>
  </div>
}