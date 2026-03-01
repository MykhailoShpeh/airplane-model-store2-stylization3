import PropTypes from 'prop-types';
// import css from "./Section.module.css"; //! CSS-модулі
// import css from "@/components/Section/Section.module.css";

import { TitleRobotoBold } from './Section.styled.jsx';

export function Section({ title, children }) {
    return (
        <section>
            {/* //! CSS-модулі з композицією класів */}
            {/* {title && <h2 className={`${css.title} ${css.robotoBold}`}>{title}</h2>} */}
            {/* //! CSS-модулі з composes */}
            {/* {title && <h2 className={css.titleRobotoBold}>{title}</h2>} */}
            {/* //! Бібліотека Emotion */}
            {title && <TitleRobotoBold>{title}</TitleRobotoBold>}
            {children}
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};