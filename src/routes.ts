import Cart from './components/Cart/Cart';
import Catalog from './components/Catalog/Catalog';
import Error404 from './components/Error404/Error404';
import { Routes } from './const';

export const publicRoutes = [
  {
    path: Routes.HOME,
    Component: Catalog,
  },
  {
    path: Routes.CART,
    Component: Cart,
  },
  {
    path: Routes.LOCATIONS,
    Component: Error404,
  },
  {
    path: Routes.ABOUT,
    Component: Error404,
  },
  {
    path: Routes.SERVICE,
    Component: Error404,
  },
  {
    path: Routes.MAP,
    Component: Error404,
  },
  {
    path: Routes.SEARCH,
    Component: Error404,
  },
  {
    path: Routes.ERROR404,
    Component: Error404,
  },
  {
    path: Routes.BLOG,
    Component: Error404,
  },
  {
    path: Routes.FAQ,
    Component: Error404,
  },
  {
    path: Routes.REFUND,
    Component: Error404,
  },
];
