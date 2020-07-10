import React, {useState, useEffect} from 'react';
import Header from './Header';
import Featured from './homeMarketing/Featured';
import Deals from './homeMarketing/Deals';
import New from './homeMarketing/New';
import Footer from './Footer';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    useEffect(() => {

    }, []);

    // A dynamic marketing slideshow algorithm for up to date content //
    // To add a slide simply change the max index within the changeSlide function to 3 instead of 2,
    // or however many more you choose to have.
    // Then add another else if statement under variable display 
    // that if slideIndex is equal to 3 (or whatever the slide index is)
    // set display (which is being rendered in Home return) to the component of the slide.
    const [slideIndex, setSlideIndex] = useState(0);
    let display;
    if(slideIndex === 0) {
        display = <Featured />
    } else if(slideIndex === 1) {
        display = <Deals />
    } else if(slideIndex === 2) {
        display = <New />
    };
    const changeSlide = n => {
        let current = slideIndex + n
        if(current > 2) {
            setSlideIndex(0)
        } else if(current < 0) {
            setSlideIndex(2)
        } else {
            setSlideIndex(slideIndex + n)
        }
    };

    // RENDER
    return (
        <main className='home-main'>

            <Header />

            {/* MARKETING SLIDESHOW */}
            <section className='home-marketing'>
                <FontAwesomeIcon icon={faChevronCircleLeft} size='2x' className='icon-arrow' 
                    onClick={() => changeSlide(-1)}/>
                {display}
                <FontAwesomeIcon icon={faChevronCircleRight} size='2x' className='icon-arrow' 
                    onClick={() => changeSlide(1)}/>
            </section>

            {/* CATEGORIES */}
            <section className='home-category'>
                {/* default showing preview and have a button in here onclick toggle state true which if state is true then invoke a function that gets the data for the full component - you will have to store that function in home and pass it to this component */}
            </section>

            <section className='home-category'>

            </section>

            <section className='home-category'>

            </section>

            <section className='home-category'>

            </section>

            <section className='home-category'>

            </section>

            <section className='home-category'>

            </section>

            <Footer />

            {/* make about and contact toggle view below footer. about defines it and explains how its a dynamic ecommerce site that can easily be built on to be large scale by adding more categories and inventory. make contact linkedin link email and github */}

        </main>
    )
}

export default Home;