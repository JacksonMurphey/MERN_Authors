import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const CreateAuthor = (props) => {

    const [errors, setErrors] = useState('')
    const [name, setName] = useState('')


    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors', { name })
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => {
                console.log(err.response.data)
                setErrors(err.response.data.error.errors)
            })
    }

    return (
        <div>
            <header style={{ marginBottom: "10px" }}>
                <h1>Favorite Authors</h1>
                <Link to='/'>Home</Link>
            </header>
            <form onSubmit={submitHandler}>
                {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
                <div>
                    <label htmlFor="">Name: </label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div style={{ margin: "5px" }}>
                    <button type='submit'>Submit</button>
                    <button style={{ marginLeft: "5px" }} onClick={e => navigate('/')}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default CreateAuthor