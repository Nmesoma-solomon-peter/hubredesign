import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='container-fluid footer'>
            <div className='row '>
                <div className='col col-md-6 firstcol'>
                    {/* <div className='d-flex'> */}
                    <div>
                        <h4 className='footer__h4 first__h4 '>Popular Features</h4>
                        <div className='d-flex footer1lft'>
                            <div>
                                <p className='ft__p'>All Products and Features</p>
                                <p className='ft__p'>Free Meeting Schedular App</p>
                                <p className='ft__p'>Social Media Tools</p>
                                <p className='ft__p'>Email Tracking Software</p>
                                <p className='ft__p'>Sales Email Automation</p>
                                <p className='ft__p'>Ads Software</p>
                                <p className='ft__p'>Email Marketing Software</p>
                                <p className='ft__p'>Lead Management Software</p>
                                <p className='ft__p'>Pipeline Management Tools</p>
                            </div>
                            <div>
                                <p className='ft__p' >Free Website Builder</p>
                                <p className='ft__p' >Sales Email Templates</p>
                                <p className='ft__p' >Help Desk software</p>
                                <p className='ft__p' >Free Online From Builder</p>
                                <p className='ft__p' >Free Chatbot Builder</p>
                                <p className='ft__p' >Free Live Chat Software</p>
                                <p className='ft__p' >Marketing Analytics</p>
                                <p className='ft__p' >Free Landing Page Builder</p>
                                <p className='ft__p' >Free Web Hosting</p>
                            </div>
                        </div>

                    </div>
                    <div>

                    </div>
                    {/* </div> */}

                </div>
                <div className='col col-md-6'>
                    <div className='d-flex footer1lft'>
                        <div className='grup'>
                            <h4 className='footer__h4'>Free Tools</h4>
                            <div>
                                <p className='ft__p'>Website Grader</p>
                                <p className='ft__p'>Make My Persona</p>
                                <p className='ft__p'>Email Signature Generator</p>
                                <p className='ft__p'>Blog Ideas Generator</p>
                                <p className='ft__p'>Invoice Template Generator</p>
                                <p className='ft__p'>Marketing Plan Generator</p>
                                <p className='ft__p'>Free Business Templates</p>
                                <p className='ft__p'>Industry Benchmark Data</p>
                                <p className='ft__p'>Software Comparisons</p>
                                <p className='ft__p'>Library</p>
                                <p className='ft__p'>Website Themes & Templates</p>
                            </div>
                        </div>

                        <div>
                            <h4 className='footer__h4'>Company</h4>
                            <div>
                                <p className='ft__p'>About Us</p>
                                <p className='ft__p'>Careers</p>
                                <p className='ft__p'>Management Team</p>
                                <p className='ft__p'>Board of Directors</p>
                                <p className='ft__p'>Investors Relations</p>
                                <p className='ft__p'>Blog</p>
                                <p className='ft__p'>Contact Us</p>
                            </div>
                        </div>

                        <div>
                            <h4 className='footer__h4'>Customers</h4>
                            <div>
                                <p className='ft__p'>Customer Support</p>
                                <p className='ft__p'>Join a Local User Group</p>
                                <div>

                                    <h4 className='footer__h4 partners'>Partners</h4>
                                    <p className='ft__p'>All Partner</p>
                                    <p className='ft__p'>Solutions Partner Program</p>
                                    <p className='ft__p'>App Partner Program</p>
                                    <p className='ft__p'>HubSport for Startups</p>
                                    <p className='ft__p'>Affiliate Program</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* social icon sections */}

            <div className='d-flex mt-4 icongroup'>
                <div className='iconlf_line'></div>
                <div>
                    <img src='src/assets/images/fb.png' className='fticon' />
                    <img src='/src/assets/images/instagram.png' className='fticon' />
                    <img src='/src/assets/images/bi_youtube.png' className='fticon' />
                    <img src='/src/assets/images/twiter.png' className='fticon' />
                    <img src='/src/assets/images/linkedin.png' className='fticon' />
                    <img src='/src/assets/images/m.png' className='fticon' />
                    <img src='/src/assets/images/ic_baseline-tiktok (1).png' className='fticon' />
                </div>
                <div></div>
            </div>
            <div className=' mt-5 copysection'>
                <img src='/src/assets/images/hublog.png' />

                <p>No Copyright
                    2022 cloned redesigned HubSpot website, Inc</p>
            <div className='d-flex terms mt-5'>
                <p className='rightb pe-2 ps-2'> Legal Stuff</p>
                <p className='rightb pe-2 ps-2'> Privacy Policy</p>
                <p className='ps-2'> Security</p>
            </div>
            </div>
        </div>
    )
}

export default Footer