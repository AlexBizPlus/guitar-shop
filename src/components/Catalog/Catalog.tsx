import { BreabcumbsCatalog, GuitarTypes, Strings } from '../../const';
import cl from 'clsx';
import ArrowSvg from '../../img/arrow.svg';
import { ReactComponent as TriangleSvg } from '../../img/triangle.svg';
import s from './Catalog.module.scss';
import Cards from '../Cards/Cards';

const Catalog = () => (
  <section className={s.wrap}>
    <div className={s.catalog}>
      <h1 className={s.header}>Каталог гитар</h1>
      <div className={s.breadcrumbs}>
        {BreabcumbsCatalog.map((item, i) => (
          <>
            {i !== 0 && <img src={ArrowSvg} className={s.arrow} width={12} height={7} alt="arrow" />}
            <span key={item}>{item}</span>
          </>
        ))}
      </div>
      <form className={s.filter}>
        <div className={s.legend}>
          <h2 className={s.title}>Фильтр</h2>
          <span className={cl(s.caption, s.line)}>
            Цена, <span className={s.currency}>₽</span>
          </span>
          <div className={cl(s.prices, s.bottomLine)}>
            <input type="number" placeholder="1 000" step="1" min="0" />
            <input type="number" placeholder="30 000" step="1" min="0" />
          </div>
          <span className={cl(s.caption, s.line)}>Тип гитар</span>
          <div className={s.type}>
            {GuitarTypes.map(({ name, type }) => (
              <>
                <input className={s.checkboxInput} type="checkbox" id={`type${type}`} />
                <label htmlFor={`type${type}`} className={s.checkbox}>
                  {name}
                </label>
              </>
            ))}
          </div>
          <span className={cl(s.caption, s.line)}>Количество струн</span>
          <div className={s.strings}>
            {Strings.map((item) => (
              <>
                <input className={s.checkboxInput} type="checkbox" id={`strings${item}`} />
                <label htmlFor={`strings${item}`} className={s.checkbox}>
                  {item}
                </label>
              </>
            ))}
          </div>
          <button type="submit" className={s.submit}>
            Показать
          </button>
        </div>
        <div className={s.sortSection}>
          <div className={s.sortWrap}>
            <span>Сортировать:</span>
            <div className={s.sortInputsList}>
              <input className={s.sortInput} type="radio" name="sort" id="sortByPrice" value="sortByPrice" />
              <label htmlFor="sortByPrice" className={s.sort}>
                по цене
              </label>
              <input className={s.sortInput} type="radio" name="sort" id="sortByPopular" value="sortByPopular" />
              <label htmlFor="sortByPopular" className={s.sort}>
                по популярности
              </label>
            </div>
            <div className={s.orderInputsList}>
              <input className={s.orderInput} type="radio" name="order" id="fromTheLeast" value="fromTheLeast" />
              <label htmlFor="fromTheLeast">
                <TriangleSvg />
              </label>
              <input className={s.orderInput} type="radio" name="order" id="fromTheMost" value="fromTheLeast" />
              <label htmlFor="fromTheMost">
                <TriangleSvg className={s.rotate} />
              </label>
            </div>
          </div>
          <Cards />
        </div>
      </form>
    </div>
  </section>
);

export default Catalog;
