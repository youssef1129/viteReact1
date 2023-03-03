import { useState } from 'react'
import '../styles/image.css'
import { Upload } from './Upload'
import cancel from '../assets/cancel.svg'

export const Imagee = () => {
  const [uploadedFile, setUploadedFile] = useState<any>(null)

  return (
    <div className='image'>
      <label>Image</label>
      <Upload setUploadedFile={setUploadedFile} accepts='image/png, image/jpeg' />
      {
        (uploadedFile && uploadedFile.size > 2000000) ? 
        <h6 className='tooLarge'>file too large</h6> :
        (uploadedFile && uploadedFile.size < 2000000?
          <div className='completed'>
            <span>Completed</span>
            <span>{uploadedFile.name}</span>
            <img src={cancel} onClick={() => setUploadedFile(null)} />
          </div>:''
        )
      }
      <span>*Only JPG, PNG files are allowed. Image must be less than 2 MB</span>
    </div>
  )
}
