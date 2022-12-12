import React from 'react'
import './Section3.css'
import Group from '../assets/image/Group.png'
import hubspotacademy from '../assets/image/hubspotacademy.png'
import hubspotblogs from '../assets/image/hubspotblogs.png'
import inbound from '../assets/image/inbound.png'
import globe from '../assets/image/globe.png'
import chat from '../assets/image/chat.png'

function Section3() {
    return (
        <div className='section3 container-fluid'>
            <div className='mt-4 sec3headbox'>
                <h3 className='sec3h3'>Learn and grow with award-winning support and a thriving community behind you.</h3>
            </div>

            <div className='paragraphbox' >
                <p>You don’t have to go it alone. Master the inbound methodology and get the most out of your tools with HubSpot’s legendary customer support team and a community of thousands of marketing and sales pros just like you.</p>
            </div>

            <div className='sec3table row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3'>
                <div className='tablechild ps-4 pe-4 pt-3 pb-3 toptab'>
                    <img src={Group}/>
                    <h2 className='pt-3 tch2' >150<sup>+</sup></h2>
                    <p>HubSport user groups</p>
                </div>

                <div className='tablechild  ps-4 pe-4 pt-3 pb-3 toptab'>
                    <img src={hubspotblogs} className='tbimg' />
                    <h2 className='pt-3 tch2'>7M<sup>+</sup></h2>
                    <p>monthly visits</p>
                </div>

                <div className='tablechild  ps-4 pe-4 pt-3 pb-3 toptab'>
                    <img src={hubspotacademy} className='tbimg' />
                    <h2 className='pt-3 tch2'>453K<sup>+</sup></h2>
                    <p>certified professionals</p>
                </div>

                <div className='tablechild  ps-4 pe-4 pt-3 pb-3 btmborder'>
                    <img src={inbound} className='tbimg' />
                    <h2 className='pt-3 tch2'>70K<sup>+</sup></h2>
                    <p>registered attendes</p>
                </div>
            </div>

            <div className='sec3table row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3'>
                <div className='tablechild  ps-4 pe-4 pt-3 pb-3 downtab'>
                    <img src={hubspotblogs} className='tbimg' />
                    <h2 className='pt-3 tch2'>1,160<sup>+</sup></h2>
                    <p>integrations</p>
                </div>

                <div className='tablechild  ps-4 pe-4 pt-3 pb-3 downtab'>
                    <img src={globe}/>
                    <h2 className='pt-3 tch2'>6<sup>+</sup></h2>
                    <p>languages</p>
                </div>

                <div className='tablechild ps-4 pe-4 pt-3 pb-3 downtab'>
                    <img src={chat}/>
                    <h2 className='pt-3 tch2'>3.1M<sup>+</sup></h2>
                    <p>social followers</p>
                </div>

                <div className='tablechild  ps-4 pe-4 pt-3 pb-3 '>
                    <img src={globe} />
                    <h2 className='pt-3 tch2'>150,000<sup>+</sup></h2>
                    <p>customers</p>
                </div>

            </div>

        </div>
    )
}

export default Section3