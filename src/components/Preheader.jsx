import React from 'react'
import './Preheader.css'
// import LanguageIcon from '@mui/icons-material/Language';

function Preheader() {
    return (
        <div className='preheader'>
            <div className="cont-fluid">
                <div className='prehead'>
                    <div className='prehead__left'>
                        {/* <LanguageIcon/> */}
                        <a href='/jjj'>
                            <p className='dropdownitem m-3 fw-bold'>
                                <i class="bi bi-globe m-1"></i>
                                Englsh
                                <i class="bi bi-chevron-down m-1"></i>
                            </p>
                        </a>

                        <a href=' /ss'>
                            <p className='dropdownitem m-3 fw-bold'>
                                <i class="bi bi-person-fill m-1"></i>
                                contact sales
                                <i class="bi bi-chevron-down m-1"></i>
                            </p>
                        </a>

                    </div>

                    <div className='prehead__right' >
                        <a href='/s'>
                            <p className='dropdownitem m-3 fw-bold'>
                                <i class="bi bi-search m-1"></i>
                                Log in
                            </p>
                        </a>

                        <a href='/ss'>
                            <p className='dropdownitem m-3 fw-bold'>Customer support</p>
                        </a>
                        <a href='/ss'>
                            <p className='dropdownitem m-3 fw-bold'>About
                                <i class="bi bi-chevron-down m-1"></i>
                            </p>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Preheader