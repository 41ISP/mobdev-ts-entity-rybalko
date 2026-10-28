import { useState } from "react"
import type { GameGenre, TGameInput } from "../types"

const initialForm: TGameInput = {
title: '',
// description: '',
rating: 7,
price: 0,
genre: 'rpg',
platforms: ['pc'],
releaseDate: new Date().toISOString().slice(0, 10),
}

export function GameForm() {
    const onChange = <K extends keyof TGameInput>(key: K, value: TGameInput[K]) => {
setForm(o => ({...o, [key]: value}))
    }
    const [form, setForm] = useState<TGameInput>(initialForm)

    return (
        <form className="form">
            <h2>Добавить игру</h2>

            <label className="field">
                Название
    <input onChange={(e) => onChange('title', e.target.value)} type="text" name="title" value={form.title} required />
            </label>

            <label className="field">
                Описание
                <textarea rows={3} />
            </label>

            <div className="row">
                <label className="field">
                    Жанр
                    <select onChange={(e) => onChange('genre', e.target.value as GameGenre)} name="genre" value = {form.genre}>
                        <option>РПГ</option>
                    </select>
                </label>
                <label className="field">
                    Дата выхода
                    <input onChange={(e) => onChange('releaseDate', e.target.value)} type="date" name="releaseDate" value={form.releaseDate} required />
                </label>
            </div>

            <div className="row">
                <label className="field">
                    Рейтинг: {form.rating}
                    <input onChange={(e) => onChange('rating', Number(e.target.value))} type="range" name='rating' value ={form.rating} min={0} max={10} step={0.5} />
                </label>
                <label className="field">
                    Цена, €
                    <input onChange={(e) => onChange('price', Number(e.target.value))}  type="number" name="price" value={form.price} min={0} step={0.01} />
                </label>
            </div>

            <fieldset>
                <legend>Платформы</legend>
                <label className="check">
                    <input checked={form.platforms.includes('pc')} name='pc' type="checkbox" />
                    ПК
                </label>
                     
                <label className="check">
                    <input checked={form.platforms.includes('xbox')} name="xbox" type="checkbox" />
                    XBOX
                </label>
                    
                <label className="check">
                    <input checked={form.platforms.includes('ps')}  name="ps" type="checkbox" />
                    PS
                </label>
            </fieldset>

            <button className="btn">Сохраняем… Добавить игру</button>
        </form>
    )
}
