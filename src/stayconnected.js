import React from 'react'
import connect from './assets/connect.png'
import con1 from './assets/con1.png'
import con2 from './assets/con2.png'
import con3 from './assets/con3.png'
import { IoChevronForwardCircleOutline } from "react-icons/io5";
export default function Connected() {
  return (
    <div class="container-fluid ">
        <div class='row contt'>
            <div class='col-md-4 conttin'>
            <p class="contcol">01</p>

                <p>We stay connected <IoChevronForwardCircleOutline></IoChevronForwardCircleOutline></p>
            </div>
            <div class='col-md-4 conttin'>
            <p class="contcol">02</p>

                <p>We believe in diversity & inclusion <IoChevronForwardCircleOutline></IoChevronForwardCircleOutline></p>
            </div>
            <div class='col-md-4 conttin'>
                <p class="contcol">03</p>

                <p>We celebrate success <IoChevronForwardCircleOutline></IoChevronForwardCircleOutline></p>
            </div>
        </div>
        <div class='row connectmain'>
            <div class='col-md-6 connect'>
                <h2>We <span style={{color:'orange'}}>Stay Connected</span></h2>
<h5><img src={con1}></img>Quarterly Business Updates</h5>
                <p>We strive to stay connected as a team through communication and collaboration. This materialises every quarter through our Quarterly Business Update events. These gatherings are immersive sessions where every team
member, regardless of rank or tenure, comes together to contribute to our overarching business strategy, and stay connected. They are opportunities to learn from our seasoned leaders and to also share personal insights and achievements that can steer our collective future. In an ever-evolving engineering landscape, staying connected isn’t just a benefit—it’s essential.</p>
<h5><img src={con2}></img>Industry Events & Networking</h5>
<h5><img src={con3}></img>Associations Memberships</h5>
            </div>
            <div class='col-md-6'> 
            <img src={connect} class="img-responsive"/>
            </div>
        </div>
    </div>
  )
}
