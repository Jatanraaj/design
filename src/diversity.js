import React from 'react';
import table from './assets/divercitytable.png'

export default function Diversity() {
  return (
    <div class='container-fluid diversity'>
        <div class='row'>

            <div class='col-md-6' style={{padding:'50px'}}>
                <h1 style={{color:'white'}}>We believe in <span style={{color:'orange'}}>diversity &<br></br> inclusion</span></h1>
            </div>



            <div class='col-md-6' style={{padding:'50px'}}>
                <p style={{color:'white'}}>At CaSE we do not just accept difference — we celebrate it, we support it, and we thrive on it for the benefit of our employees, our services, our industry and our community. We are proud to be an equal opportunity
employer. Guided by our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them. <br></br> <br></br>

Our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them Our Commitment to reinventing the standard. With more than 20 nationalities represented in our global workforce, we firmly believe that our ability to deliver high-quality results is fueled by our active efforts to embed diversity and inclusion. We recognise, respect, and strive to create an environment where employees can excel and feel a true sense of belonging. 
<br></br>
<br></br>
<b>Some of our strategic initiatives include:</b></p>
            </div>
        </div>
        <div class="row">
            <img src={table} class='img-responsive'></img>
        </div>
    </div>
  )
}
