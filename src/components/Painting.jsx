import defaultImage from "./default.png" //! Дефолтне зображення


export default function Painting({
    url = defaultImage, //! Дефолтне зображення
    title,
    author = "не відомо",
    profileUrl,
    price,
    quantity
}) {
    // const { url, title, author, profileUrl, price } = props;
    return <div>
        <img src={url} alt={title} width="480" />
        <h2>{title}</h2>
        <p>Автор: <a href={profileUrl}>{author}</a></p>
        <p>Цена: {price} кредитов</p>
        {/* <p>Доступность: заканчивается или есть в наличии {quantity}</p> */}
        <p>Доступність: {quantity < 10 ? "закінчується" : "є у наявності"}</p>
        <button type="button">Додати до кошику</button>
    </div>
};
