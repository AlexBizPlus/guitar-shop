import { Link, NavLink } from 'react-router-dom';
import { HeaderIconsMenu, HeaderMenu, STRINGS, Routes } from '../../const';
import LogoSvg from '../../img/logo.svg';
import GuitarImg from '../../img/image_header.png';
import s from './Header.module.scss';

const Header = () => (
  <header className={s.headerWrap}>
    <div className={s.headerBackground}>
      <div className={s.header}>
        <Link to={Routes.HOME}>
          <img src={LogoSvg} width={67} height={70} alt="logo" />
        </Link>
        <nav className={s.nav}>
          {HeaderMenu.map(({ title, path }) => (
            <NavLink exact to={path} activeClassName={s.selected} key={title}>
              {title}
            </NavLink>
          ))}
        </nav>
        <ul className={s.iconsList}>
          {HeaderIconsMenu.map(({ icon, alt, path }) => (
            <Link to={path} className={s.icon} key={alt}>
              <img src={icon} alt={alt} />
              {path === Routes.CART && <span></span>}
            </Link>
          ))}
        </ul>
        <div className={s.guitarImg}>
          <img src={GuitarImg} alt="guitar" />
        </div>
      </div>
    </div>
    <div className={s.stringsList}>
      {new Array(STRINGS).fill('').map((_item, i) => (
        <div className={s.string} key={i} />
      ))}
    </div>
  </header>
);

export default Header;
