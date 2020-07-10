import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Menu = props => {
    const [books, setBooks] = useState(false);
    const [clothingApparel, setClothingApparel] = useState(false);
    const [electronics, setElectronics] = useState(false);
    const [homeAppliances, setHomeAppliances] = useState(false);
    const [movies, setMovies] = useState(false);
    const [music, setMusic] = useState(false);
    const [sportsOutdoors, setSportsOutdoors] = useState(false);

    const toggleMenuOptions = section => {
        setBooks(false)
        setClothingApparel(false)
        setElectronics(false)
        setHomeAppliances(false)
        setMovies(false)
        setMusic(false)
        setSportsOutdoors(false)
        if(section === 'books') {
            setBooks(true)
        } else if(section === 'clothingApparel') {
            setClothingApparel(true)
        } else if(section === 'electronics') {
            setElectronics(true)
        } else if(section === 'homeAppliances'){
            setHomeAppliances(true)
        } else if(section === 'movies'){
            setMovies(true)
        } else if(section === 'music'){
            setMusic(true)
        } else if(section === 'sportsOutdoors') {
            setSportsOutdoors(true)
        } 
    }

    return (
        <main className='menu'>
            <section className='menu-categories'>
                <div className='category' id='category-books' onClick={() => toggleMenuOptions('books')}>
                    <p className='category-text'>Books</p>
                    {
                        books
                        ?
                        <FontAwesomeIcon icon={faChevronRight} size='2x' color='burlywood' />
                        :
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    }
                </div>
                <div className='category' id='category-clothing-apparel' onClick={() => toggleMenuOptions('clothingApparel')}>
                    <p className='category-text'>Clothing/ Apparel</p>
                    {
                        clothingApparel
                        ?
                        <FontAwesomeIcon icon={faChevronRight} size='2x' color='burlywood' />
                        :
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    }
                </div>
                <div className='category' id='category-electronics' onClick={() => toggleMenuOptions('electronics')}>
                    <p className='category-text'>Electronics</p>
                    {
                        electronics
                        ?
                        <FontAwesomeIcon icon={faChevronRight} size='2x' color='burlywood' />
                        :
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    }
                </div>
                <div className='category' id='category-home-appliances' onClick={() => toggleMenuOptions('homeAppliances')}>
                    <p className='category-text'>Home/ Appliances</p>
                    {
                        homeAppliances
                        ?
                        <FontAwesomeIcon icon={faChevronRight} size='2x' color='burlywood' />
                        :
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    }
                </div>
                <div className='category' id='category-movies' onClick={() => toggleMenuOptions('movies')}>
                    <p className='category-text'>Movies</p>
                    {
                        movies
                        ?
                        <FontAwesomeIcon icon={faChevronRight} size='2x' color='burlywood' />
                        :
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    }
                </div>
                <div className='category' id='category-music' onClick={() => toggleMenuOptions('music')}>
                    <p className='category-text'>Music</p>
                    {
                        music
                        ?
                        <FontAwesomeIcon icon={faChevronRight} size='2x' color='burlywood' />
                        :
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    }
                </div>
                <div className='category' id='category-sports-outdoors' onClick={() => toggleMenuOptions('sportsOutdoors')}>
                    <p className='category-text'>Sports/ Outdoors</p>
                    {
                        sportsOutdoors
                        ?
                        <FontAwesomeIcon icon={faChevronRight} size='2x' color='burlywood' />
                        :
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    }
                </div>
            </section>

            <section>
            {
                books
                ?
                <section className='books-section'>
                    <div className='category' id='books-adventure'>
                        <p className='category-text'>Adventure</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                    <div className='category' id='books-business'>
                        <p className='category-text'>Business</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                    <div className='category' id='books-cooking'>
                        <p className='category-text'>Cooking</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                    <div className='category' id='books-history'>
                        <p className='category-text'>History</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                    <div className='category' id='books-kids'>
                        <p className='category-text'>Kids</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                    <div className='category' id='books-scifi-fantasy'>
                        <p className='category-text'>Sci-fi/ Fantasy</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                    <div className='category' id='books-students'>
                        <p className='category-text'>Students</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                </section>
                :
                <div></div>
            }
            </section>

            <section>
            {
                clothingApparel
                ?
                <section className='clothing-apparel-section'>
                    <div className='category' id='clothing-apparel-mens'>
                        <p className='category-text'>Mens</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                    <div className='category' id='clothing-apparel-womens'>
                        <p className='category-text'>Womens</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                    <div className='category' id='clothing-apparel-kids'>
                        <p className='category-text'>Kids</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                </section>
                :
                <div></div>
            }
            </section>

            <section>
            {
                electronics
                ?
                <section className='electronics-section'>
                    <div className='category' id='electronics-computers'>
                        <p className='category-text'>Computers</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                    <div className='category' id='electronics-phones'>
                        <p className='category-text'>Phones</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                    <div className='category' id='electronics-tvs'>
                        <p className='category-text'>TVs</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                    <div className='category' id='electronics-videogames'>
                        <p className='category-text'>Video Games</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                </section>
                :
                <div></div>
            }
            </section>

            <section>
            {
                sportsOutdoors
                ?
                <section className='sports-outdoors-section'>
                    <div className='category' id='sports-outdoors-camping-hiking'>
                        <p className='category-text'>Camping/ Hiking</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                    <div className='category' id='sports-outdoors-summer-sports'>
                        <p className='category-text'>Summer Sports</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                    <div className='category' id='sports-outdoors-winter-sports'>
                        <p className='category-text'>Winter Sports</p>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                </section>
                :
                <div></div>
            }
            </section>
        </main>
    )
}

export default Menu;