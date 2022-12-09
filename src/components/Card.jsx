import React from 'react'
import './Card.css'
import CheckIcon from '@mui/icons-material/Check';

function Card(props) {
  return (
    <div className='kard me-5 mt-5'>
      <div>
        <h3 className='mt-3 ms-3 me-3 introh3'><img src={props.img}/>{props.title}<sup>{props.sup}</sup></h3>
        <p className='mt-3 ms-3 me-3 pb-3'>{props.para}</p>
      </div>
      <div className='cardb mt-3 ms-3 me-3 mb-3'>
        <h4 className='cardbh4 pt-3 pb-4'>Popular features</h4>
        <p> <CheckIcon className='vector' />{props.l1}</p>
        <p><CheckIcon className='vector' /> {props.l2}</p>
        <p><CheckIcon className='vector' /> {props.l3}</p>
      </div>
      <div class="d-grid gap-2 ms-3 me-3 mt-3 mb-3 " >
        <button class="btn btn-primary text-white" type="button">Get Started</button>
      </div>
    </div>

  )
}
export default Card