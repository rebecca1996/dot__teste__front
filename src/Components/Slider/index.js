import React from 'react';
import Arrow from '../../Images/arrow.png';
import './styles.css';

const Slider = () =>

<section className="carousel" aria-label="Gallery">

    <div className="div-arrow">
    <a href="#about"> <img src={Arrow} alt="Arrow Down"/> </a>
    </div>

    <ol className="carousel__viewport">
        <li id="carousel__slide1" className="carousel__slide">
            <div className="carousel__snapper">
                <a href="#carousel__slide4" className="carousel__prev">Go to last slide</a>
                <a href="#carousel__slide2" className="carousel__next">Go to next slide</a>
            </div>
        </li>
        <li id="carousel__slide2" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide1" className="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide3" className="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide3" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide2" className="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide4" className="carousel__next">Go to next slide</a>
        </li>
    </ol>
    <aside className="carousel__navigation">
        <ol className="carousel__navigation-list">
            <li className="carousel__navigation-item">
                <a href="#carousel__slide1" className="carousel__navigation-button">Go to slide 1</a>
            </li>
            <li className="carousel__navigation-item">
                <a href="#carousel__slide2" className="carousel__navigation-button">Go to slide 2</a>
            </li>
            <li className="carousel__navigation-item">
                <a href="#carousel__slide3" className="carousel__navigation-button">Go to slide 3</a>
            </li>
        </ol>
    </aside>
</section>


export default Slider;
