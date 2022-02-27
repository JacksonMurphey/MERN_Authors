import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const EditAuthor = (props) => {

    const { id } = props
    const [errors, setErrors] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data)
                setName(res.data.name)
            })
            .catch(err => {
                console.log(err)
                // navigate('/error') This where I would navigate if the id was invalid/doesnt exist
            })
    }, [])

    const submitHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, { name })
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => {
                console.log(err.response)
                setErrors(err.response.data.error.errors)
            })
    }

    //NOTE: probably shouldnt display the name of the author you are editing since it updates as you change it. I could just store the initial name, and display that to prevent this. 

    return (
        <div>
            <header style={{ marginBottom: "10px" }}>
                <h1>Favorite Authors</h1>
                <Link to='/'>Home</Link>
            </header>
            <form onSubmit={submitHandler}>
                <h3>Update Author: {name}</h3>
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
export default EditAuthor