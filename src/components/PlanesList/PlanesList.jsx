import PropTypes from 'prop-types';

// import css from "./PlanesList.module.css";

import { Planes } from '@/components/Planes/Planes.jsx'; 

import { getBgColorCSSModule } from '@/utils/getBackgroundColor.js';

import { List, Item } from './PlanesList.styled.jsx';


//! Для визначення кольору фону картки в залежності від значення "year"

export function PlanesList({ items }) {
    console.log(getBgColorCSSModule(2000))
    return (
        <List>
            {items.map(item =>
                <Item
                    key={item.id} >
                    <Planes
                        urlWiki={item.url.wikipedia}
                        urlMain={item.url.main}
                        urlPromotional={item.url.promotional}
                        urlActual={item.url.actual}
                        nameBrief={item.name.brief}
                        nameFull={item.name.full}
                        nickname={item.name.nickname}
                        year={item.info.year}
                        startTime={item.manufacturing.start}
                        endTime={item.manufacturing.end}
                        country={item.info.country}
                        type={item.info.type}
                        price={item.info.price}
                        description={item.info.description}
                    />
                </Item>
            )}
        </List>
    );
};

PlanesList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};
