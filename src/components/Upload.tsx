import React, { ChangeEvent, Dispatch, useState } from 'react'
import border from '../assets/border.svg'
import upload from '../assets/import.svg'
import borderDark from '../assets/bodrerDark.svg'
interface props {
    accepts: string;
    setUploadedFile?: Dispatch<React.SetStateAction<any>>
    small?: boolean;
    dark?: boolean;
}
export const Upload = ({ accepts, setUploadedFile, small = false, dark = false }: props) => {
    const [g,setg] = useState('')
   
    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0]
        setUploadedFile && setUploadedFile(file)
        
        if (e.target.files && e.target.files[0]) {   
            var FR = new FileReader();
            FR.addEventListener("load", function (event: any) {
               const k = event.target.result;
               setg(k)
            });
            FR.readAsDataURL(e.target.files[0]);
        }
    }
    return (
        <div className='upload'>
            {small ? <img src={g ? g : upload} /> : (dark ? <img src={borderDark} /> : <img src={border} />)}
            <input title={small ? 'Upload image' : 'Upload'} type={'file'} accept={accepts} onChange={handleFileInput} />
        </div>
    )
}
