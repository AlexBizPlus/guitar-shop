import GeoSvg from './img/geo.svg';
import SearchSvg from './img/search.svg';
import BagSvg from './img/bag.svg';

export const STRINGS = 5;

export const Routes = {
  HOME: '/',
  ERROR404: '/404',
  CART: '/cart',
  LOCATIONS: '/locations',
  ABOUT: '/about',
  SERVICE: '/service',
  MAP: '/map',
  SEARCH: '/search',
  BLOG: '/blog',
  FAQ: '/faq',
  REFUND: '/refund',
};

export const HeaderMenu = [
  {
    title: 'Каталог',
    path: Routes.HOME,
  },
  {
    title: 'Где купить?',
    path: Routes.LOCATIONS,
  },
  {
    title: 'О компании',
    path: Routes.ABOUT,
  },
  {
    title: 'Cервис-центры',
    path: Routes.SERVICE,
  },
];

export const HeaderIconsMenu = [
  {
    icon: GeoSvg,
    alt: 'карта',
    path: Routes.MAP,
  },
  {
    icon: SearchSvg,
    alt: 'поиск',
    path: Routes.SEARCH,
  },
  {
    icon: BagSvg,
    alt: 'корзина',
    path: Routes.CART,
  },
];

export const FooterAbout: string[] = [
  'Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.',
  'Все инструменты проверены, отстроены и доведены до идеала! ',
];

export const FooterCatalog = [
  {
    name: 'Акустические гитары',
    link: `${Routes.HOME}?type=acoustic`,
  },
  {
    name: 'Классические гитары',
    link: `${Routes.HOME}?type=classic`,
  },
  {
    name: 'Электрогитары',
    link: `${Routes.HOME}?type=electro`,
  },
  {
    name: 'Бас-гитары',
    link: `${Routes.HOME}?type=bass`,
  },
  {
    name: 'Укулеле',
    link: `${Routes.HOME}?type=ukulele`,
  },
];

export const FooterInfo = [
  {
    name: 'Где купить?',
    link: Routes.LOCATIONS,
  },
  {
    name: 'Блог',
    link: Routes.BLOG,
  },
  {
    name: 'Вопрос - ответ',
    link: Routes.FAQ,
  },
  {
    name: 'Возврат',
    link: Routes.REFUND,
  },
  {
    name: 'Сервис-центры',
    link: Routes.SERVICE,
  },
];

export const BreabcumbsCatalog = ['Главная', 'Каталог'];

export const BreabcumbsCart = ['Главная', 'Каталог', 'Оформляем'];

export const GuitarTypes = [
  {
    name: 'Акустические гитары',
    type: 'acoustic',
    strings: [6, 7, 12],
  },
  {
    name: 'Электрогитары',
    type: 'electro',
    strings: [4, 6, 7],
  },
  {
    name: 'Укулеле',
    type: 'ukulele',
    strings: [4],
  },
];

export const Strings = [4, 6, 7, 12];

export const STARS_COUNT = 5;

export const urlToFile = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSUsF-4b6xMFe4MQE2GR6ekhBMFi78rAhIo9zW8Mb_7lC-NXq8RHvdwBfRDCsO5DkEeTwFPXSEed0RG/pub?output=csv`;
