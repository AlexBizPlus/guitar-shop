import { IGuitar } from '../../types';
import AcousticImg from '../../img/acoustic.png';
import ElectroImg from '../../img/electro.png';
import UkuleleImg from '../../img/ukulele.png';
import StarImg from '../../img/star.svg';
import s from './Card.module.scss';
import { STARS_COUNT } from '../../const';

interface ICard {
  card: IGuitar;
}

const Card = ({ card }: ICard) => {
  const { name, type, popularity, price } = card;
  // const { number, code, name, type, popularity, strings, price } = card;

  const guitarImg = () => {
    let srcImg;

    switch (type) {
      case 'акустическая гитара':
        srcImg = AcousticImg;
        break;
      case 'электрогитара':
        srcImg = ElectroImg;
        break;
      case 'укулеле':
        srcImg = UkuleleImg;
        break;

      default:
        srcImg = AcousticImg;
        break;
    }

    return srcImg;
  };

  const stars = () =>
    new Array(STARS_COUNT).fill('').map(() => {
      return <img src={StarImg} width={10} height={10} alt="star" />;
    });

  return (
    <div className={s.wrap}>
      <img className={s.img} src={guitarImg()} alt="guitar" />
      <div className={s.stars}>
        {stars()}
        <span className={s.popularity}>{popularity}</span>
      </div>
      <div className={s.text}>
        <span>{name}</span>
        <span>{`${price} ₽`}</span>
      </div>
      <div className={s.buttons}>
        <button className={s.detailsButton} type="button">
          Подробнее
        </button>
        <button className={s.buyButton} type="button">
          Купить
        </button>
      </div>
    </div>
  );
};

export default Card;
