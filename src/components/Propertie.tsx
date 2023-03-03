import React, { useState } from 'react'
import infoo from '../assets/bottom/info.svg'
import mines from '../assets/bottom/mines.svg'
import plus from '../assets/bottom/plus.svg'
import { Switch } from './Switch'
import { Ipropertie } from '../interfaces/Ipropertie'
export const Propertie = ({ img, info, title, type }: Ipropertie) => {
    const [value, setValue] = useState(type == 'minutes' ? 30 : (type == 'secends' ? 45 : (type == 'percent' ? 80 : (title == 'Attemps' ? 3 : 10))))
    const [showInfo,setShowInfo] = useState(false)
    const onAdd = () => {
        if (type == 'number') {
            setValue((v) => v + 1)
        }
        else if (type == 'minutes' || type == 'secends') {
            setValue((v) => v + 5)
        }
        else if (type == 'percent' && value < 100) {
            setValue((v) => v + 5)
        }
    }

    const onMinus = () => {
        if (title == 'Random questions' && value > 0) {
            setValue((v) => v - 1)
        }
        else if (type == 'number' && value > 1) {
            setValue((v) => v - 1)
        }
        else if ((type == 'minutes' || type == 'secends') && value > 5) {
            setValue((v) => v - 5)
        }
        else if (type == 'percent' && value > 5) {
            setValue((v) => v - 5)
        }
    }

    return (
        <div className='propertie'>

            <img onMouseEnter={()=>setShowInfo(true)} onMouseLeave={()=>setShowInfo(false)} src={infoo} />
            <img src={img} />
            <label>{title}</label>
            {type === 'switch' ?
                <Switch />
                :
                <div>
                    <img src={mines} onClick={onMinus} />
                    <input value={`${value}${type === 'minutes' ? 'min' : (type == 'secends' ? 's' : (type == 'percent' ? '%' : ''))}`} readOnly />
                    <img src={plus} onClick={onAdd} />
                </div>}

            {
            showInfo&&<section className='infoo'>
                <label>{info}</label>
            </section>
            }
        </div>
    )
}
