import { Link } from 'react-router-dom';
import { FooterAbout, FooterCatalog, FooterInfo, Routes } from '../../const';
import LogoSvg from '../../img/logo.svg';
import GuitarImg from '../../img/image_header.png';
import s from './Footer.module.scss';

const Footer = () => (
  <footer className={s.footerWrap}>
    <div className={s.string} />
    <div className={s.footerBackground}>
      <div className={s.footer}>
        <Link to={Routes.HOME} className={s.logo}>
          <img src={LogoSvg} width={67} height={70} alt="logo" />
        </Link>
        <div className={s.column}>
          <div className={s.caption}>О нас</div>
          {FooterAbout.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <div className={s.column}>
          <div className={s.caption}>Каталог</div>
          {FooterCatalog.map(({ name, link }, i) => (
            <Link key={i} to={link}>
              {name}
            </Link>
          ))}
        </div>
        <div className={s.column}>
          <div className={s.caption}>Информация</div>
          {FooterInfo.map(({ name, link }, i) => (
            <Link key={i} to={link}>
              {name}
            </Link>
          ))}
        </div>
        <div className={s.column}>
          <div className={s.caption}>Контакты</div>
          <div>
            <span>г. Санкт-Петербург,</span>
            <span>м. Невский проспект,</span>
            <span>ул. Казанская 6.</span>
            <a href="tel: +78125005050">8-812-500-50-50</a>
          </div>
          <div>
            <span>Режим работы:</span>
            <span>с 11:00 до 20:00, без выходных.</span>
          </div>
        </div>

        <div className={s.guitarImg}>
          <img src={GuitarImg} alt="guitar" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
