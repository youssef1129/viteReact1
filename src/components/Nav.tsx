import '../styles/nav.css'
import logo from '../assets/nav/logo.svg'
import search from '../assets/nav/searchIcon.svg'
import arrow from '../assets/nav/bottomArrow.svg'
import notif from '../assets/nav/notif.svg'
import profile from '../assets/nav/profile.svg'
import english from '../assets/nav/english.svg'
import frensh from '../assets/nav/france.svg'
import german from '../assets/nav/germany.svg'
import spanish from '../assets/nav/spain.svg'
import dutch from '../assets/nav/nederlands.svg'
import settings from '../assets/nav/seetingsIcon.svg'
import policies from '../assets/nav/policies.svg'
import logoutIcon from '../assets/nav/logoutIcon.svg'
import { useState } from 'react'

const Nav = () => {
    return (
        <nav>
            <LeftNav />
            <CenterNav />
            <RightNav />
        </nav>
    )
}

export default Nav


const LeftNav = () => {
    return (
        <div className='leftNav'>
            <img src={logo} />
            <div className='search'>
                <img src={search} />
                <input placeholder='Quick search ...' />
            </div>
        </div>
    )
}

const CenterNav = () => {
    return (
        <div className='centreNav'>
            <a>Dashboard</a>
            <a>Trainings</a>
            <a>Users</a>
            <span>
                <a>More</a>
                <img src={arrow} />
            </span>
        </div>
    )
}

const RightNav = () => {
    return (
        <div className='rightNav'>
            <img src={notif} />
            <Languages />
            <Avatar />
        </div>
    )
}
const Languages = () => {
    const languages = [{ src: english, name: 'english (EN)' },
    { src: frensh, name: 'Français (FR)' },
    { src: dutch, name: 'Nederlands (NL)' },
    { src: spanish, name: 'Español (ES)' },
    { src: german, name: 'Deutsch (DE)' }];

    const [toggle, setToggle] = useState(false)
    const [current, setCurrent] = useState(languages[0])

    const Toggle = (l: { src: string, name: string }) => {
        setCurrent(l)
        setToggle(!toggle)
    }

    return (
        <div className='language' >
            <img src={current.src} onClick={() => setToggle(!toggle)} />
            <div className='languages' style={{ transform: `translateY(${toggle ? '0' : '-200%'})` }}>
                {
                    languages.map((l,k) => {
                        return <div key={k} onClick={() => Toggle(l)}>
                            <img src={l.src} />
                            <label style={{ color: `${current.name === l.name ? '#313131' : ''}` }}>{l.name}</label>
                        </div>
                    })
                }
            </div>
        </div>
    )
}


const Avatar = () => {
    const [toggle, setToggle] = useState(false)
    const Toggle = () => {
        setToggle(!toggle)
    }
    return (
        <div style={{ position: 'relative' }} onClick={Toggle} >
            <div className='avatar'>
                <img src={profile} />
                <label>blaise defloo</label>
                <label>administrator</label>
            </div>
            <ProfileSettings toggle={toggle} />
        </div>
    )
}

const ProfileSettings = ({ toggle }: { toggle: boolean }) => {
    return (
        <div className='profileSettings' style={{ transform: `translateX(${toggle ? '0' : '200%'})` }}>
            <div>
                <h4>BESIX Group</h4>
                <span>Besix.group@besix.be</span>
            </div>
            <div>
                <div>
                    <img src={settings} />
                    <label>Profile Settings</label>
                </div>
                <div>
                    <img src={policies} />
                    <label>Our policies</label>
                </div>
            </div>
            <div>
                <div>
                    <img src={logoutIcon} />
                    <label>log out</label>
                </div>
            </div>
        </div>
    )
}