import { useState } from 'react';

import '../styles/PostForm.css';

import userIcon from '../images/user.svg';
import paperPlaneIcon from '../images/paper-plane.svg';

export default function PostForm(props) {
    const [history, setHistory] = useState('');
    const [userName, setUserName] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        props.onSubmit({ history, userName })

        setHistory('');
        setUserName('');
    }

    return (
        <form className='post-form' onSubmit={handleSubmit}>
            <input
                value={history}
                placeholder='Escreva uma nova história...'
                onChange={(event) => setHistory(event.target.value)}
            />
            <div className='input-section'>
                <div className='name-user'>
                    <img src={userIcon} alt="User" />
                    <input
                        value={userName}
                        placeholder='Digite seu nome...'
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </div>
                <button type='submit'>
                    <img src={paperPlaneIcon} alt="Paper Plane" />
                    Publicar
                </button>
            </div>
        </form>
    )
}