import React from 'react';
import ex from './assets/expertise1.png';
import ex2 from './assets/expertise2.png';
import ex3 from './assets/expertise3.png';

export default function Expertise2() {
    return (
        <div className="container-fluid expertise">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6" style={{padding:'30px'}}>
                            <h1 style={{ fontWeight: '300', textAlign:'center' }}>Employee <span style={{ color: 'orange' }}>Appreciation Program</span></h1>
                            <p style={{ fontSize: '18px' }}>Our Employee Appreciation Program is tailored to honor the ongoing commitment and efforts of our long-serving team members. Our 5 Year Club and 10 Year Club are special milestones within this program, celebrating employees who have dedicated half a decade or a full decade to our company mission. Each year, members of these clubs are invited to annual events held at select, memorable locations, reflecting our gratitude and recognition of their unwavering dedication. It's our way of saying thank you and ensuring that every significant chapter in our collective journey is celebrated with the grandeur it deserves.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={ex} alt="Example 1" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row lower-pics" style={{ marginTop: '20px' }}>
                        <div className="col-md-8">
                            <img src={ex2} alt="Example 2" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <img src={ex3} alt="Example 3" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
