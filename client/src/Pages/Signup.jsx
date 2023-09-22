import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(repeatPassword !== setRepeatPassword){
            setError("Passwords do not match");
            return;
        } 

        const response = await fetch("http://localhost:8181/api/v1/user/signup", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password, password
            })
        })
        const json = await response.json();

        if(!response.ok){
            setError(json);
            return;
        }

        navigate("/login");
    }


    return (
        <div className='flex justify-center h-[80vh]'>
            <div className='flex justify-center rounded-xl bg-[#3b518b] w-1/4 my-10'>
                <form className='flex flex-col gap-8 justify-center items-center' onSubmit={handleSubmit}>
                    <h1 className='text-[#d6ba72] text-2xl font-bold'>Onboarding</h1>
                    <input type='text' placeholder='username...' className='rounded-lg p-2 focus:outline-none focus:bg-gray-200' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type='email' placeholder='email...' className='rounded-lg p-2 focus:outline-none focus:bg-gray-300' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='password...' className='rounded-lg p-2 focus:outline-none focus:bg-gray-300' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type='password' placeholder='repeat password...' className='rounded-lg p-2 focus:outline-none focus:bg-gray-300' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                    <button type='submit' className='bg-[#d6ba72] py-1 px-3 rounded-xl'>Sign Up</button>
                    <span className='text-white'>Have An Account? <Link className='hover:text-[#d6ba72]' to={"/login"}>Log In</Link></span>
                    {error && <span className='text-red-500 font-bold'>{error}</span>}
                </form>
            </div>
        </div>
    )
}

export default Signup
