import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <img src='/src/assets/images/logo.png' className='logo' alt='logo' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <button type="button" className="btn btn-primary text-white btn-sm ms-2 header__btn ">Get a demo</button>
                            <button type="button" className="btn btn-outline-primary btn-sm ms-2 header__btn">Get started free</button>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header