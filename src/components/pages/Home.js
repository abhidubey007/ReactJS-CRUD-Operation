import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:5000/users");
        setUsers(result.data.reverse()) // reverse() for showing from top
    }
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:5000/users/${id}`)
        loadUsers()
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={user.id}>
                                        <th scope="row" >{index + 1} </th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link to={`/users/${user.id}`} className="btn btn-primary">View</Link>
                                            <Link to={`/users/edit/${user.id}`} className="btn btn-outline-primary">Edit</Link>
                                            <Link to="#" className="btn btn-outline-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                        </td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home