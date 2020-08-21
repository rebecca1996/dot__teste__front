import React from 'react';
import './styles.css';
import ImageAbout from '../../Images/about-image.png';

const About = () => 

<div id="bg-about"> 

    <div id="content-img">
    <img  src={ImageAbout}  alt="Imagem About"/>
    </div>

    <div id="content-text">
    <h1> LOREM IPSUM </h1>
<p>Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor  
    incididunt ut labore et dolore magna aliqua.
    Quis ipsum suspendisse ultrices gravida. Risus 
    commodo viverra maecenas accumsan lacus vel facilisis. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Quis ipsum suspendisse ultrices gravida. 
    Risus commodo viverra maecenas accumsan lacus vel facilisis.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore 
    magna aliqua. Quis ipsum suspendisse ultrices gravida.
    Risus commodo viverra maecenas accumsan lacus vel facilisis.
    orem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo 
    viverra maecenas accumsan lacus vel facilisis. </p>
    </div>

</div>

export default About;