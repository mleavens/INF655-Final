import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header> 
            <div className="container">
                <div className="inner-content">
                    <div className="title">
                        <Link to = '/'>Favorite Movies List</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to ='/'>Favorites List</Link>
                        </li>

                        <li>
                            <Link to ='/popular'>Popular Movies</Link>
                        </li>

                        <li className = 'add-btn'>
                            <Link to ='/add'>search</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

