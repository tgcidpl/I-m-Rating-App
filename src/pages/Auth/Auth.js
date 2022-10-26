import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import supabase from '../../config/supabaseClient'

export function Auth() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const navigate = useNavigate()

    async function signUp(email, password) {
        try{
            const {data, error} = await supabase.auth.signUp({email, password})
            if (error) throw error
            alert(`Account created!`)
            navigate('/home')

        }
        catch(error) {
            alert(error.message)
            location.reload()
        }
    }

    async function login(email, password) {
        try{
            const {data, error} = await supabase.auth.signInWithPassword({email, password})
            if (error) throw error
            alert(`User logged in, happy rating!`)
            navigate('/home')

        }
        catch(error) {
            alert(error.message)
            location.reload()
        }
    }

    return (
        <div className="largeTile auth">
            <h1 className="auth-header">Welcome to I'm Rating App!</h1>
            <div className="auth-inputs">
                <input className="auth-inputs__input"
                       placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                <input className="auth-inputs__input"
                       placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="auth-buttons">
                <button className="smallTile auth-buttons__button"
                        onClick={(e)=>{e.preventDefault();
                            signUp(email, password)}}>Sign Up</button>
                <button className="smallTile auth-buttons__button"
                        onClick={(e)=>{e.preventDefault();
                            login(email, password)}}>Login</button>
            </div>
        </div>
    )
}