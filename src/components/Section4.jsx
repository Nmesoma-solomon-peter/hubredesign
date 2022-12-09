import React from 'react'
import './Section4.css'

function Section4() {
    return (
        <div className='container-fluid section4'>
            <div className='row'>
                <div className='col col-md-5'>
                    <h3 className='sec4h3'>150,000+</h3>
                    <p className='sec4p'>customers in over 120 countries growing
                        their businesses with HubSpot</p>
                </div>
                <div className='col col-md-7 '>
                    <div className='d-flex logo__row row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3'>
                        <div>
                            <img src='/src/assets/images/Rectangle_1-removebg-preview 1.png' alt=' ' />
                        </div>
                        <div>
                            <img src='/src/assets/images/Rectangle_1__1_-removebg-preview 1.png' alt=' ' />
                        </div>
                        <div>
                            <img src='/src/assets/images/Rectangle_1__2_-removebg-preview 1.png' alt=' ' />
                        </div>
                        <div>
                            <img src='/src/assets/images/Rectangle_1__3_-removebg-preview 1.png' alt=' ' />
                        </div>
                    </div>

                    <div className='d-flex logo__row row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3'>
                        <div >
                            <img src='/src/assets/images/Rectangle_1__4_-removebg-preview 1.png' alt=' ' />
                        </div>
                        <div>
                            <img src='/src/assets/images/Rectangle_1__5_-removebg-preview 1.png' alt=' ' />
                        </div>
                        <div>
                            <img src='/src/assets/images/Rectangle_1__6_-removebg-preview 1.png' alt=' ' />
                        </div>
                        <div>
                            <img src='/src/assets/images/Rectangle_1__7_-removebg-preview 1.png' alt=' ' />
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
                    <img src='/src/assets/images/_cta_contentblock_headshots_headshot_6 1.png' className='sec4__humanimage mt-5' />
                </div>
            </div>
        </div>
    )
}

export default Section4