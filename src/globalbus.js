import React from 'react'
import global from './assets/world.png'
import { IoChevronForwardCircleOutline } from "react-icons/io5";

export default function Global() {
  return (
    <div class="container" style={{paddingTop:'80px',paddingBottom:'80px'}}>
        <div class='row' style={{textAlign:'center'}}>
        <h2>As a <span style={{color:'orange'}}>global business</span>, we encourage you to contact us no matter where you are located in the world.
</h2>
<br/>
<p style={{marginTop:'20px'}}>Browse our job opportunities across the globe.</p>
<br></br>
<br></br>
<br></br>
<h4 style={{color:'orange', marginBottom:'50px'}}>OPEN ROLES <IoChevronForwardCircleOutline /></h4>
</div>
<div class='row'>
    <img src={global} class='img-responsive' />
</div>
    </div>
  )
}
