import React, { useEffect, useState } from 'react'
import { Upload } from './Upload'
import correct from '../assets/correct.svg'
import incorrect from '../assets/incorrect.svg'
import { Iquestion } from '../interfaces/Iquestion'
import close from '../assets/close.svg'
import cancel from '../assets/cancel.svg'

interface props {
    q: Iquestion,
    setQuestions: React.Dispatch<React.SetStateAction<Iquestion[]>>
}
export const Question = ({ q, setQuestions }: props) => {
    const { img, isTrue, question, id } = q
    const [uploadedFile, setUploadedFile] = useState<any>(null)

    const onResultChange = (r: boolean) => {
        setIsCorrect(r)
    }

    const [isCorrect, setIsCorrect] = useState(isTrue)
    useEffect(() => {
        setQuestions((qu) => {
            return qu.map((qst) => {
                if (qst.id === id) {
                    qst.isTrue = isCorrect
                    return qst;
                }
                return qst;
            })
        })
    }, [isCorrect])


    const removeQuestion = () => {
        setQuestions((qs) => qs.filter((qst) => qst.id !== id))
    }

    return (
        <div className='question'>
            <div className='leftQ'>
                <div>
                    <h4>Question 1</h4>
                    <img src={close} onClick={removeQuestion} />
                </div>
                <input type="text" value={question} />
                <div className='choice'>
                    <label>true</label>
                    <img src={isTrue ? correct : incorrect} onClick={() => onResultChange(true)} />
                    <Upload accepts='*' small />
                </div>
                <div className='choice'>
                    <label>false</label>
                    <img src={!isTrue ? correct : incorrect} onClick={() => onResultChange(false)} />
                    <Upload accepts='*' small />
                </div>
            </div>
            <div className='rightQ'>
                <div >
                    <label>Question Image</label>
                    <span>Optional</span>
                </div>
                <Upload setUploadedFile={setUploadedFile} dark accepts='*' />
                {
                    uploadedFile &&
                    <div className='completed'>
                        <span>Completed</span>
                        <span>{uploadedFile.name}</span>
                        <img src={cancel} onClick={() => setUploadedFile(null)} />
                    </div>
                }
            </div>
        </div>
    )
}
