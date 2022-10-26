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
            alert(`Account created`)
        }
        catch(error) {
            alert(error.message)
        }
        navigate('/home')
    }

    async function login(email, password) {
        try{
            const {data, error} = await supabase.auth.signInWithPassword({email, password})
            if (error) throw error
            alert(`Logged in`)
        }
        catch(error) {
            alert(error.message)
        }
        navigate('/home')
    }

    return (
        <div>
            <input placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={(e)=>{e.preventDefault(); signUp(email, password)}}>Sign Up</button>
            <button onClick={(e)=>{e.preventDefault(); login(email, password)}}>Login</button>
        </div>
    )
}