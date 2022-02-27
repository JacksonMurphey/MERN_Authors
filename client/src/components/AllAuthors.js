import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router'
import axios from 'axios'

const AllAuthors = (props) => {

    const [authorList, setAuthorList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data)
                setAuthorList(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = id => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data)
                setAuthorList(authorList.filter((author) => author._id !== id))
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <header>
                <h1>Favorite Authors</h1>
                <Link to='/new'>Add your Favorite Author</Link>
            </header>
            <table style={{ border: "2px solid black", margin: "20px auto" }}>
                <thead style={{ backgroundColor: "red", color: "white" }}>
                    <tr >
                        <th >Author Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        authorList &&
                        authorList.map((author, index) => (
                            <tr key={index}>
                                <td >{author.name}</td>
                                <td>
                                    <button onClick={() => { navigate(`/edit/${author._id}`) }}>Edit</button>
                                    <button onClick={(e) => deleteHandler(author._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}
export default AllAuthors