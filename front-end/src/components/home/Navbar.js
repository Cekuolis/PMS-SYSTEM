import React from 'react'
import Logout from "../login/Logout"
import Username from "../login/UserName"
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <div className="row">
                    <div className="col p-2">
                <a className="navbar-brand">Navbar</a>
                
                </div></div>
                <div className="row">
                    <div className="col">
                <form className="form-inline">
                <input type="email" className="form-control m-2" placeholder="Enter email" />
                    <button className="btn btn-outline-success my-2 my-sm-0 text-center" type="submit">Search<i class="material-icons">search</i></button>
                    <Username/>
                    <Logout />
                </form>
                </div>
                </div>
            </nav>
        </div>
    )
}
