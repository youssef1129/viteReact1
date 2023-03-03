import { Upload } from './Upload'
import '../styles/training.css'
import cancel from '../assets/cancel.svg'
import { useState } from 'react'

export const Training = () => {
    const [uploadedFile, setUploadedFile] = useState<any>(null)
    return (
        <div className='training'>
            <label>Training File</label>
            <Upload setUploadedFile={setUploadedFile} accepts='.doc, .docx, .ppt, .pptx, .pdf' />
            {
                uploadedFile &&
                <div className='completed'>
                    <span>Completed</span>
                    <span>{uploadedFile.name}</span>
                    <img src={cancel} onClick={() => setUploadedFile(null)} />
                </div>
            }
            <span>*Only Video, PDF and SlideShow files are allowed.</span>
            <div className='or'>
                <hr />
                <span>OR</span>
                <hr />
            </div>
            <label>Media URL</label>
            <input placeholder='https://youtu.be/1g4hoZx8-o4' />
        </div>
    )
}
