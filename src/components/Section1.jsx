import React from 'react'
import './Section1.css'

function Section1() {
    return (
        <div className='container-fluid  bg-primary section1'>
            <div className='row '>
                <div className='col-md-6 sec1colleft'>
                    <p>HUBSPOT CRM PLATFORM</p>
                    <h1>Powerful,</h1>
                    <h1>not overpowerng</h1>
                    <p>Finally, a CRM platform that's both powerful and easy to use. Create delightful customer experience. Have a delightful time doing it.</p>

                    <div className='button__group'>
                        <div className='section1__btnwhite '> Get a demo</div>
                        <div className='section1__btnoutline'> <span className='sec1get'>Get Started free</span></div>
                    </div>
                    <p className='free'>Get started with free tools, or get more with premium software.</p>
                </div>

                <div className='col-md-6 sec1img'>
                    <img src='/src/assets/images/section1img.png' className='sec1image' alt='section1img'/>
                </div>
            </div>
        </div>

    )
}

export default Section1