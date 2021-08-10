import { Link } from 'react-router-dom';
import cl from 'clsx';
import s from './Error404.module.scss';
import { Routes } from '../../const';

const Error404 = () => (
  <div className={cl(s.error404)}>
    <p>Страница не найдена</p>
    <Link className={cl(s.link)} to={Routes.HOME}>
      Перейти на главную страницу
    </Link>
  </div>
);

export default Error404;
