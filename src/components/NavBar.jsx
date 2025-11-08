import React from 'react'
import {navLinks} from "../constants/index.js";

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="apple_logo" />
                <ul>
                    {
                        navLinks.map(({label}) => (
                            <li key={label}>{label}</li>
                        ))
                    }
                </ul>
            <div className="flex-center gap-3">
                <button>
                    <img src="/search.svg" alt= "Search"/>
                </button>
            </div>
            </nav>
        </header>
    )
}
export default NavBar
