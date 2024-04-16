import React from 'react';
import ex from './assets/ex3.png';
import ex2 from './assets/ex4.png';
import ex3 from './assets/ex5.png';

export default function Expertise1() {
    return (
        <div className="container-fluid expertise" >
            <div className="row">
                <div className="col-md-12">
                    <div className="row" style={{overflow:'hidden'}}>
                        
                        <div className="col-md-6">
                            <img src={ex} alt="Example 1" className="img-fluid" />
                        </div>
                        <div className="col-md-5" style={{padding:'20px'}}>
                            <h1 style={{ fontWeight: '300', textAlign:'center' }}>We celebrate <span style={{ color: 'orange' }}>success</span></h1>
                            <p style={{ fontSize: '16px' }}>At CaSE we understand that every achievement, big or small, is a result of the hard work and dedication of our team members. We take pride in
celebrating these moments because they underscore the commitment and effort put into each project.
</p>
<p style={{ fontSize: '16px' }}>Some of our favourite events on the calendar include our coveted Melbourne Cup event and our always amazing Christmas Party. In-between, our
team celebrate together during team cycling events, regular team dinners and social morning teas to celebrate milestones and special days. Taking the time to celebrate wins is our way of showing gratitude and ensuring everyone knows their efforts make a difference.</p>
                        </div>
                    </div>
                    <div className="row lower-pics" style={{ marginTop: '20px' }}>
                        <div className="col-md-8" style={{paddingRight:'20px'}}>
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
