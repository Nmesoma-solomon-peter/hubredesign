import React from 'react'
import './Cardrow.css'
import Card from './Card'
import contents from './cardcontent'

const createCard = (content)=>{
    return <Card 
    img={content.Img}
    title={content.title}
    sup={content.sup}
    para={content.para}
    l1={content.l1}
    l2={content.l2}
    l3={content.l3}
     />
}

function Cardrow() {
    return (
        <div className='container-fluid cardrow' >
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ps-5 ">
            {contents.map(createCard)}
            {/* <Card img={contents[0].Img} /> */}
            {/* <Card />
            <Card />
            <Card />
            <Card /> */}
            </div>
        </div>
    )
}

export default Cardrow