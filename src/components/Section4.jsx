import React from 'react'
import './Section4.css'
import wwf from '../assets/image/wwf.png'
import trello from '../assets/image/trello.png'
import reddit from '../assets/image/reddit.png'
import soundcloud from '../assets/image/soundcloud.png'
import ww from '../assets/image/ww.png'
import momentive from '../assets/image/momentive.png'
import doordash from '../assets/image/doordash.png'
import eventbrite from '/src/assets/image/eventbrite.png'
import womanhead from '/src/assets/image/womanhead.png'

function Section4() {
    return (
        <div className='container-fluid section4'>
            <div className='row'>
                <div className='col col-md-5'>
                    <h3 className='sec4h3'>150,000+</h3>
                    <p className='sec4p'>customers in over 120 countries growing
                        their businesses with HubSpot</p>
                </div>
                <div className='col col-md-7 sec4-company'>
                    <div className='d-flex logo__row row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3 '>
                        <div>
                            <img src={wwf} alt=' wwf' />
                        </div>
                        <div>
                            <img src={trello} alt=' trello' />
                        </div>
                        <div>
                            <img src={reddit} alt=' reddit' />
                        </div>
                        <div>
                            <img src={ww} alt='ww ' />
                        </div>
                    </div>

                    <div className='d-flex logo__row row row-cols-1 row-cols-sm-1 row-cols-md-2  row-cols-lg-4  g-3'>
                        <div >
                            <img src={soundcloud} alt='soundcloud ' />
                        </div>
                        <div>
                            <img src={momentive} alt=' ' />
                        </div>
                        <div>
                            <img src={doordash} alt=' ' />
                        </div>
                        <div>
                            <img src={eventbrite} alt=' ' />
                        </div>
                    </div>
                </div>
            </div>
            {/* sec4 part2 */}
            <div className='row part2 '>
                <div className='col col-md-6'>
                    <h4 className='part2__h4 mb-3'>Start Growing With HubSpot Today</h4>
                    <p className='part2__p'>With tools to make every part of your proces more human and a uppot team
                        excited to help you, getting started with inbound has never been easier.
                    </p>

                    <div className='part2__btn'>
                        <button type="button" className="btn btn-primary text-white btn-md ms-2 mb-3">Get a demo</button>
                        <button type="button" className="btn btn-outline-primary btn-md ms-2 mb-3">Get started free</button>
                    </div>
                </div>
                <div className='col col-md-6'>
                    <img src={womanhead} className='sec4__humanimage mt-5' />
                </div>
            </div>
        </div>
    )
}

export default Section4