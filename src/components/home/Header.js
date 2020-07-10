import React, {useState} from 'react';
import Menu from './Menu';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTh} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <main>
            <section className='header'>
                <div className='flex-menu'>
                    {
                        menu
                        ?
                        <FontAwesomeIcon icon={faTh} size='3x' className='icon-menu-true' 
                            onClick={() => setMenu(!menu)} />
                        :
                        <FontAwesomeIcon icon={faTh} size='2x' className='icon-menu-false' 
                            onClick={() => setMenu(!menu)} />
                    }
                </div>
                <div className='flex-search-bar'>
                    <FontAwesomeIcon icon={faSearch} size='1x' className='icon-search' />
                    <input className='search-bar' placeholder='search'
                    />
                </div>
                <FontAwesomeIcon icon={faShoppingCart} size='2x' className='icon-cart' />
            </section>
            <section>
            {
                menu
                ?
                <Menu />
                :
                <div></div>
            }
            </section>
        </main>
    )
}

export default Header;