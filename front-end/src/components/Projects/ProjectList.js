import React from 'react'
import DeleteProject from "./DeleteProjects"



export default function ProjectList({ id, name, description }) {
    return (
        <div>
            <ul class="list-group">

                <li class="list-group-item">{id},{name}, {description}
                <button className="btn btn-outline-success my-2 my-sm-0 m-2" type="submit">Create</button>
                <button className="btn btn-outline-dark my-2 my-sm-0 m-2" type="submit">Update</button>
                <button onClick={() => DeleteProject({id})} className="btn btn-outline-danger my-2 my-sm-0 m-2" type="submit">Delete</button></li>
                
            </ul>
        </div>
    )
}
