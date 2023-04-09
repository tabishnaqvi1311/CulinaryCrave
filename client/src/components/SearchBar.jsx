import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    // const [results, setResults] = useState('');
    const history = useNavigate()

    const handleSubmit = (e) => {
        // await fetch(`http://localhost:8181/api/v1/recipes/search/q=${searchTerm}`)
        //     .then((response) => response.json())
        //     .then((data) => setResults(data))
        //     .then((data) => console.log(data))
        //     .catch((error) => console.log(error))
        e.preventDefault();

        if (searchTerm) {
            history(`/search/${searchTerm}`)
        }
        setSearchTerm('');
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='search' className=' bg-slate-200 p-2 rounded-xl text-center focus:outline-none focus:pr-20' placeholder={`🔍Search Recipes`} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </form>
        </div>
    )
}

export default SearchBar