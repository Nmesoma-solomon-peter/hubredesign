import React from 'react'
import './Cardrow.css'
// import Card from './Card'
import contents from './cardcontent'
import CheckIcon from '@mui/icons-material/Check';
import './Card.css'
import marketingHub_Icon  from '../assets/images/marketingHub_Icon.png';


// const createCard = (content) => {
//     return <Card
//         key={content.id}
//         img={content.img}
//         title={content.title}
//         sup={content.sup}
//         para={content.para}
//         l1={content.l1}
//         l2={content.l2}
//         l3={content.l3}
//     />
// }

function Cardrow() {
    return (
        <div className='container-fluid cardrow' >
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 cardrowpad ">
                {/* {contents.map(createCard)} */}
                {/* <Card img={contents[0].Img} /> 
             <Card />
            <Card />
            <Card />
            <Card />  */}
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
                    <div className="d-grid gap-2 ms-3 me-3 mt-3 mb-3 " >
                        <button className="btn btn-primary text-white" type="button">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardrow