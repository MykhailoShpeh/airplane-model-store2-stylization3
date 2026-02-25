import PropTypes from 'prop-types';
import defaultImage from "@/components/default.png"; //! Дефолтне зображення
import css from './Planes.module.css';

export function Planes({
    urlMain = defaultImage, //! Дефолтне зображення
    urlPromotional,
    urlActual,
    nameBrief,
    nameFull,
    nickname = "не відомо",
    year,
    country,
    type,
    price,
    description
}) {
    function printlActualimages(urlActual) {
        urlActual.map
    }
    return (
        <>
            <h3
                className={css.planeTitle}>
                {nameBrief}
            </h3>
            <img src={urlMain} alt={nameBrief} />
            <p className={css.textField}>Повна назва: <span className={css.textFieldValue}>{nameFull}</span></p>
            <p className={css.textField}>Тип: <span className={css.textFieldValue}>{type}</span></p>
            <p className={css.textField}>Прізвисько: <span className={css.textFieldValue}>{nickname}</span></p>
            <p className={css.textField}>Країна виробник: <span className={css.textFieldValue}>{country}</span></p>
            <p className={css.textField}>Рік випуску: <span className={css.textFieldValue}>{year}</span></p>
            <p className={css.textField}>Ціна: <span className={css.textFieldValue}>{price}</span></p>
            <p className={css.textField}>Опис: <span className={css.textFieldValue}>{description}</span></p>
            <h4 className={css.imageTitles}>Рекламна модель:</h4>
            <img src={urlPromotional} alt={nameBrief} />
            <h4 className={css.imageTitles}>Реальна модель:</h4>
            <div
                className={css.imgBox}>
                {urlActual.map(item =>
                    <img
                        // key={item} //! поки що не унікальний
                        src={item}
                        alt={nameBrief}
                        className={css.img}
                    />
                )}
            </div>
            <button
                className={css.but}
                type="button">
                Додати до кошику
            </button>
        </>
    );
};

//! Контроль типу змінних - propTypes
Planes.propTypes = {
    urlMain: PropTypes.string.isRequired,
    urlPromotional: PropTypes.string.isRequired,
    urlActual: PropTypes.string.isRequired,
    nameBrief: PropTypes.string.isRequired,
    nameFull: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    // price: PropTypes.number.isRequired,  //! контроль propTypes
    description: PropTypes.string.isRequired
};
