import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:8181/api/v1/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username, password: password
            })
        })
        const json = await response.json();
        
        if(!response.ok){
            setError(json);
            return;
        }
        console.log(json);

        navigate("/");

    }

    return (
        <div className='flex justify-center h-[80vh]'>
            <div className='flex justify-center rounded-xl bg-[#3b518b] w-1/4 my-10 '>
                <form className='flex flex-col gap-8 justify-center items-center' onSubmit={handleSubmit}>
                    <h1 className='text-[#d6ba72] text-2xl font-bold'>Login To CulinaryCrave</h1>
                    <input type='text' placeholder='username...' className='rounded-lg p-2 focus:outline-none focus:bg-gray-200' value={username} onChange={(e)=> setUsername(e.target.value)}/>
                    <input type='password' placeholder='password...' className='rounded-lg p-2 focus:outline-none focus:bg-gray-300' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type='submit' className='bg-[#d6ba72] py-1 px-3 rounded-xl'>Login</button>
                    <span className='text-white'>Don't Have An Account? <Link className='hover:text-[#d6ba72]' to={"/signup"}>Sign Up</Link></span>
                    {error && <span className='text-red-500 font-bold'>{error}</span>}
                </form>
            </div>
        </div>
    )
}

export default Login
