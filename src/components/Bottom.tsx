import React, { RefObject, useEffect, useRef, useState } from 'react'
import '../styles/bottom.css'
import { Propertie } from './Propertie'
import left from '../assets/bottom/left.svg'
import right from '../assets/bottom/right.svg'
import { Ipropertie } from '../interfaces/Ipropertie'
import dice from '../assets/bottom/dice.svg'
import timePerQuestion from '../assets/bottom/timePerQuestion.svg'
import passingScore from '../assets/bottom/passingScore.svg'
import timeExpected from '../assets/bottom/timeExpected.svg'
import webcam from '../assets/bottom/webcam.svg'
import repets from '../assets/bottom/repets.svg'



export const Bottom = () => {

    const [scrollPosition, setScrollPosition] = useState(0)
    const divRef = useRef<HTMLDivElement>(null);
    const max = divRef.current ? divRef.current.scrollWidth - divRef.current.clientWidth : 90
    useEffect(() => {
        if (divRef.current) {
            divRef.current.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (divRef.current) {
                divRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleScroll = () => {
        if (divRef.current) {
            setScrollPosition(divRef.current.scrollLeft);
        }
    };

    const handleLeftButtonClick = () => {
        if (divRef.current) {
            divRef.current.scrollLeft -= 70;
        }
      };
    
      const handleRightButtonClick = () => {
        if (divRef.current) {
            divRef.current.scrollLeft += 70;
        }
      };

    return (
        <div className='btm'>
            <img src={left} style={{ opacity: `${scrollPosition < 50 ? 0 : 1}` }} onClick={handleLeftButtonClick} />
            <img src={right} style={{ opacity: `${(max - scrollPosition) < 50 ? 0 : 1}` }} onClick={handleRightButtonClick} />
            <div ref={divRef} className='bottom'>
                {
                 properties.map((p)=>{
                     return <Propertie {...p} />
                 })   
                }
            </div>
        </div>
    )
}


const properties:Array<Ipropertie> = [
    {
        img: dice,
        info:'When the countdown is finished, the system will automatically move to the next question.',
        title:'Random questions',
        type:'number'
    },
    {
        img: timePerQuestion,
        info:'When the countdown is finished, the system will automatically move to the next question.',
        title:'Time per question',
        type:'secends'
    },
    {
        img: passingScore,
        info:'When the countdown is finished, the system will automatically move to the next question.',
        title:'Passing score',
        type:'percent'
    },
    {
        img: webcam,
        info:'When the countdown is finished, the system will automatically move to the next question.',
        title:'Webcam validation',
        type:'switch'
    },
    {
        img: timeExpected,
        info:'When the countdown is finished, the system will automatically move to the next question.',
        title:'Time Expected',
        type:'minutes'
    },
    {
        img: repets,
        info:'When the countdown is finished, the system will automatically move to the next question.',
        title:'Attemps',
        type:'number'
    },
]