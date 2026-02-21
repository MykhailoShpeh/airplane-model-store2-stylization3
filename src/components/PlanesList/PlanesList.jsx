import PropTypes from 'prop-types';

import { Planes } from '@/components/Planes/Planes.jsx'; 

import { getBgColor } from '@/utils/getBackgroundColor.js';


//! Для визначення кольору фону картки в залежності від значення "year"

export function PlanesList({ items }) {
    return (
        <ul
            className='list'>
            {items.map(item =>
                <li
                    className={getBgColor(item.info.year)}
                    key={item.id} >
                    <Planes
                        urlMain={item.url.main}
                        urlPromotional={item.url.promotional}
                        urlActual={item.url.actual}
                        nameBrief={item.name.brief}
                        nameFull={item.name.full}
                        nickname={item.name.nickname}
                        year={item.info.year}
                        country={item.info.country}
                        type={item.info.type}
                        price={item.info.price}
                        description={item.info.description}
                    />
                </li>
            )}
        </ul>
    );
};

PlanesList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};
