import PropTypes from 'prop-types';

import Painting from './Painting';


function PaintingsList({ items }) {
    return (
        <ul>
            {items.map(item =>
                <li key={item.id}>
                    <Painting
                        url={item.url}
                        title={item.title}
                        author={item.author.tag}
                        profileUrl={item.author.url}
                        price={item.price}
                        quantity={item.quantity}
                    />
                </li>
            )}
        </ul>
    );
};


PaintingsList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};


export default PaintingsList;