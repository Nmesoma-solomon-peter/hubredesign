import React from 'react'
import './Kardrow.css'
import './Kard.css'
import CheckIcon from '@mui/icons-material/Check';
import marketingHub_Icon from '../assets/images/marketingHub_Icon.png'
import SalesHub_Icon from '../assets/images/SalesHub_Icon.png'
import ServiceHub_Icon from '../assets/images/ServiceHub_Icon.png'
import cms_Icon from '../assets/images/cms_Icon.png'
import OperationsHub_Icon from '../assets/images/OperationsHub_Icon.png'
import contents from './Kardcontent.js'

function Kardrow() {
    return (
        <div className='container-fluid cardrow'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 cardrowpad ">
                <div className='kard me-5 mt-5'>
                    <div>
                        <h3 className='mt-3 ms-3 me-3 introh3'><img src={marketingHub_Icon} alt={contents[0].title} />{contents[0].title}<sup>{contents[0].sup}</sup></h3>
                        <p className='mt-3 ms-3 me-3 pb-3'>{contents[0].para}</p>
                    </div>
                    <div className='cardb mt-3 ms-3 me-3 mb-3'>
                        <h4 className='cardbh4 pt-3 pb-4'>Popular features</h4>
                        <p> <CheckIcon className='vector' />{contents[0].l1}</p>
                        <p><CheckIcon className='vector' /> {contents[0].l2}</p>
                        <p><CheckIcon className='vector' /> {contents[0].l3}</p>
                    </div>
                </div>


                {/* second kard */}
                <div className='kard me-5 mt-5'>
                    <div>
                        <h3 className='mt-3 ms-3 me-3 introh3'><img src={SalesHub_Icon} alt={contents[1].title} />{contents[1].title}<sup>{contents[1].sup}</sup></h3>
                        <p className='mt-3 ms-3 me-3 pb-3'>{contents[1].para}</p>
                    </div>
                    <div className='cardb mt-3 ms-3 me-3 mb-3'>
                        <h4 className='cardbh4 pt-3 pb-4'>Popular features</h4>
                        <p> <CheckIcon className='vector' />{contents[1].l1}</p>
                        <p><CheckIcon className='vector' /> {contents[1].l2}</p>
                        <p><CheckIcon className='vector' /> {contents[1].l3}</p>
                    </div>
                </div>
                {/* 3rd kard */}
                <div className='kard me-5 mt-5'>
                    <div>
                        <h3 className='mt-3 ms-3 me-3 introh3'><img src={ServiceHub_Icon} alt={contents[2].title} />{contents[2].title}<sup>{contents[2].sup}</sup></h3>
                        <p className='mt-3 ms-3 me-3 pb-3'>{contents[2].para}</p>
                    </div>
                    <div className='cardb mt-3 ms-3 me-3 mb-3'>
                        <h4 className='cardbh4 pt-3 pb-4'>Popular features</h4>
                        <p> <CheckIcon className='vector' />{contents[2].l1}</p>
                        <p><CheckIcon className='vector' /> {contents[2].l2}</p>
                        <p><CheckIcon className='vector' /> {contents[2].l3}</p>
                    </div>
                </div>
                {/* 4th kard */}
                <div className='kard me-5 mt-5'>
                    <div>
                        <h3 className='mt-3 ms-3 me-3 introh3'><img src={cms_Icon} alt={contents[3].title} />{contents[3].title}<sup>{contents[3].sup}</sup></h3>
                        <p className='mt-3 ms-3 me-3 pb-3'>{contents[3].para}</p>
                    </div>
                    <div className='cardb mt-3 ms-3 me-3 mb-3'>
                        <h4 className='cardbh4 pt-3 pb-4'>Popular features</h4>
                        <p> <CheckIcon className='vector' />{contents[3].l1}</p>
                        <p><CheckIcon className='vector' /> {contents[3].l2}</p>
                        <p><CheckIcon className='vector' /> {contents[3].l3}</p>
                    </div>
                </div>

                <div className='kard me-5 mt-5'>
                    <div>
                        <h3 className='mt-3 ms-3 me-3 introh3'><img src={OperationsHub_Icon} alt={contents[4].title} />{contents[4].title}<sup>{contents[4].sup}</sup></h3>
                        <p className='mt-3 ms-3 me-3 pb-3'>{contents[4].para}</p>
                    </div>
                    <div className='cardb mt-3 ms-3 me-3 mb-3'>
                        <h4 className='cardbh4 pt-3 pb-4'>Popular features</h4>
                        <p> <CheckIcon className='vector' />{contents[4].l1}</p>
                        <p><CheckIcon className='vector' /> {contents[4].l2}</p>
                        <p><CheckIcon className='vector' /> {contents[4].l3}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Kardrow