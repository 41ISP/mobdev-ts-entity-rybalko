import { API_URL } from "../api";
import type { IGame } from "../types";

interface IGameCard extends IGame {

}

export function GameCard({cover, title, description, rating, price }: IGameCard) {
    return (
        <article className="card">
            <div className="card__cover">
               {cover && <img src={API_URL + cover.url} alt={cover.alternativeText} />}
                <span>Название</span>
                {rating && <b className="card__rating">{rating}</b>}
            </div>

            <div className="card__body">
                <h3>{title}</h3>
                 <p className="card__meta">Жанр, год</p>
               {description && (< p className="card__desc">{description[0].children[0].text}</p>)}
                <p className="card__platforms">Платформы</p>
            </div>

            <footer className="card__footer">
                {price && <strong className={`${price === 0 ? 'free' : ''}`}>{price === 0 ? 'Free' : price} </strong>}
                <button className="link-btn">Удалить</button>
            </footer>
        </article>
    )
}
