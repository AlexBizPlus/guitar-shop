import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { parseDoc } from '../../utils';
import { urlToFile } from '../../const';
import { IGuitar, IItemsInitialState } from '../../types';
import Card from '../Card/Card';
import { setProducts } from '../../store/actions/products-actions';
import s from './Cards.module.scss';

const Cards = () => {
  const dispatch = useDispatch();
  const [cards, setCards] = useState<IGuitar[]>([]);
  const products = useSelector((state: { PRODUCTS: IItemsInitialState }) => state.PRODUCTS.items);

  const getCards = async () => {
    await axios.get(urlToFile).then((res) => {
      dispatch(setProducts(parseDoc(res.data)));
    });
  };

  useEffect(() => {
    getCards();
  });

  useEffect(() => {
    setCards(products);
  }, [products]);

  if (cards.length === 0) return <div>loading....</div>;

  return (
    <div className={s.wrap}>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};

export default Cards;
