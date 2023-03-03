import '../styles/info.css'
import security from '../assets/info/security.svg'
import vca from '../assets/info/vca.svg'
import dlt from '../assets/info/delete.svg'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';



export const Info = () => {

    const [workers, setWorkers] = useState('');
    const [depts, setDepts] = useState('');
    const [functions, setFuncts] = useState('');
    const [category, setCategory] = useState('1');
    const [topic, setTopic] = useState('1')
    const [validFor, setValidFor] = useState('1')

    const handleChange = (event: SelectChangeEvent) => {
        setWorkers(event.target.value as string);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setDepts(event.target.value as string);
    };
    const handleChange3 = (event: SelectChangeEvent) => {
        setFuncts(event.target.value as string);
    };
    const handleChange4 = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };
    const handleChange5 = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };
    const handleChange6 = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };
    return (
        <div className='info'>

            <div className='cnt'>
                <div>
                    <div className='title'>
                        <label>Category</label>
                        <button className='btn btnOutline'>Add new+</button>
                    </div>
                    <FormControl className='select' sx={{ m: 1, minWidth: 120 }} size={'small'}>
                        <Select
                            defaultValue='1'
                            value={category}
                            onChange={handleChange4}
                        >
                            <MenuItem value={1}><div className='selected'><img src={security} /> <span>Safety</span></div></MenuItem>
                            <MenuItem value={2}><div className='selected'><img src={security} /> <span>Safety</span></div></MenuItem>
                            <MenuItem value={3}><div className='selected'><img src={security} /> <span>Safety</span></div></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <div className='title'>
                        <label>Topic</label>
                        <button className='btn btnOutline'>Add new+</button>
                    </div>
                    <FormControl className='select' sx={{ m: 1, minWidth: 120 }} size={'small'}>
                        <Select
                            defaultValue='1'
                            value={topic}
                            onChange={handleChange5}
                        >
                            <MenuItem value={1}><div className='selected'><img src={vca} /> <span>Safety</span></div></MenuItem>
                            <MenuItem value={2}><div className='selected'><img src={vca} /> <span>Safety</span></div></MenuItem>
                            <MenuItem value={3}><div className='selected'><img src={vca} /> <span>Safety</span></div></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <div className='title'>
                        <label>Valid for</label>
                    </div>
                    <FormControl className='select' sx={{ m: 1, minWidth: 120 }} size={'small'}>
                        <Select
                            defaultValue='1'
                            value={validFor}
                            onChange={handleChange6}
                        >
                            <MenuItem value={1}>1 year</MenuItem>
                            <MenuItem value={2}>2 years</MenuItem>
                            <MenuItem value={3}>5 years</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className='cnt'>
                <div>
                    <div className='title'>
                        <label>Training</label>
                    </div>
                    <div className='inpt'>
                        <input value={'working at height'} />
                        <img src={vca} />
                        <img src={dlt} />
                    </div>
                </div>
                <div>
                    <div className='title'>
                        <label>Assign To</label>
                    </div>
                    <FormControl className='select' sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel>Internal workers</InputLabel>
                        <Select
                            value={workers}
                            label="Internal workers"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>choice1</MenuItem>
                            <MenuItem value={2}>choice2</MenuItem>
                            <MenuItem value={3}>choice3</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className='lowerInfo'>
                {/* <div> */}
                <div>
                    <div className='title'>
                        <label>Departments</label>
                        <span>Optional</span>
                    </div>
                    <FormControl className='select' sx={{ m: 1, minWidth: 120 }} size={'small'}>
                        <InputLabel>Select Departments</InputLabel>
                        <Select
                            value={depts}
                            label="Select Departments"
                            onChange={handleChange2}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>dept1</MenuItem>
                            <MenuItem value={2}>dept2</MenuItem>
                            <MenuItem value={3}>dept2</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <div className='title'>
                        <label>Functions</label>
                        <span>Optional</span>
                    </div>
                    <FormControl className='select' sx={{ m: 1, minWidth: 120 }} size={'small'}>
                        <InputLabel>Select Functions</InputLabel>
                        <Select
                            value={functions}
                            label="Select Functions"
                            onChange={handleChange3}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Funct1</MenuItem>
                            <MenuItem value={2}>Funct2</MenuItem>
                            <MenuItem value={3}>Funct2</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div>
                    <div className='title'>
                        <label>Description</label>
                    </div>
                    <textarea placeholder='Type here..' rows={7} cols={80} />
                </div>
            </div>
        </div>
    )
}
