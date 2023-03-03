import { useEffect, useState } from 'react'
import { Iquestion } from '../interfaces/Iquestion'
import '../styles/quiz.css'
import { Question } from './Question'

export const Quiz = () => {

    const [questions, setQuestions] = useState<Array<Iquestion>>(qsts)


    const addQuestion = () => {
        setQuestions((qs) => [...qs, { id: questions.length + 1, img: '', isTrue: true, question: '' }])
    }

    return (
        <div className='quiz'>
            <header>
                <label>Training quiz</label>
                <span>Here you can manage the questions by clicking on the “Add Question” button and choose from the available types of question. You can add up to 100 questions.</span>
            </header>

            <div className='questions'>
                {
                    questions.map((q) => {
                        return <Question key={q.id} q={q} setQuestions={setQuestions} />
                    })
                }
            </div>

            <button disabled={questions.length==100} onClick={addQuestion} className='btn'>Add Question +</button>
        </div>
    )
}


const qsts: Array<Iquestion> = [
    {
        id: 1,
        img: '',
        isTrue: false,
        question: 'Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.'
    },
    {
        id: 2,
        img: '',
        isTrue: false,
        question: 'Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.'
    }
]