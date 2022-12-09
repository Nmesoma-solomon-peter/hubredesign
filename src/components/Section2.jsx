import React from 'react';
import './Section2.css';

function Section2() {
  return (
    <div className='container-fluid section-2'>
      <div className='Intro__heading'>
        <h3 className='introh3'>The CRM Platform Your Whole Business Would Love</h3>
      </div>
      <div className='Intro__heading'>
        <p className='intropara'> Hubspot's CRM Platform has all the tools and intergrations you need for marketing, sales, content management and customer service. Each product in the platform is powerful alone,but the real magic happens when you juse them together.</p>
      </div>
      <div className='intro_button'>
        <button type="button" className="btn sec2__btn btn-primary text-white btn-sm ms-2">Get a demo</button>
        <button type="button" className="btn sec2__btn btn-outline-primary btn-sm ms-2">Get started free</button>
      </div>
    </div>
  )
}

export default Section2