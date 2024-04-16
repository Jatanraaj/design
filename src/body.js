import React from 'react';
import group12 from './assets/group12.png';
import Diversity from './diversity';
import Expertise from './expertise';
import Testimonial from './testimonial';
import Global from './globalbus';
import Connected from './stayconnected';
import Slider from './slider';


export default function Body() {
  return (
    <div class="container-fluid">
    <Slider/>
    <Connected/>
            <Diversity/>
       <Expertise/>
       <Testimonial/>
       <Global/>
    </div>
  );
}
