import React, {useState, useEffect} from 'react';
import axios from 'axios';

const New = () => {

    useEffect(() => {
        getNewOne()
        getNewTwo()
        getNewThree()
        getNewFour()
    }, []);

    const [newOne, setNewOne] = useState([]);
    const getNewOne = () => {
        axios.get('/api/new-one')
        .then(res => setNewOne(res.data))
        .catch(err => console.log(err))
    };
    const mappedNewOne = 
    newOne.map((e, i) => (
        <div key={i} className='flex-new-map'>
            <div className='new-name-one'>{e.product_name}</div>
            <img src={e.product_img} alt='product' className='new-img-one' />
            <div className='new-price-one'>${e.price}</div>
        </div>
    ));

    const [newTwo, setNewTwo] = useState([]);
    const getNewTwo = () => {
        axios.get('/api/new-two')
        .then(res => setNewTwo(res.data))
        .catch(err => console.log(err))
    };
    const mappedNewTwo = 
    newTwo.map((e, i) => (
        <div key={i} className='flex-new-music-map'>
            <img src={e.product_img} alt='product' className='new-img-two' />
        </div>
    ));

    const [newThree, setNewThree] = useState([]);
    const getNewThree = () => {
        axios.get('/api/new-three')
        .then(res => setNewThree(res.data))
        .catch(err => console.log(err))
    };
    const mappedNewThree = 
    newThree.map((e, i) => (
        <div key={i} className='flex-new-movies-map'>
            <img src={e.product_img} alt='product' className='new-img-three' />
        </div>
    ));

    const [newFour, setNewFour] = useState([]);
    const getNewFour = () => {
        axios.get('/api/new-four')
        .then(res => setNewFour(res.data))
        .catch(err => console.log(err))
    };
    const mappedNewFour = 
    newFour.map((e, i) => (
        <div key={i} className='flex-new-map'>
            <img src={e.product_img} alt='product' className='new-img-four' />
            <div className='flex-new-four-map'>
                <div className='new-name-four'>{e.product_name}</div>
                <div className='new-price-four'>${e.price}</div>
            </div>
        </div>
    ));

    return (
        <main className='new-main'>
            <section className='new'>
                <div className='new-one'>
                    <div className='text-new'>NEW</div>
                    <div className='new-card-one'>{mappedNewOne}</div>
                </div>
                <div className='new-two'>
                    <div className='new-card-two'>{mappedNewTwo}</div>
                    <div className='new-card-three'>{mappedNewThree}</div>
                    <div className='new-card-four'>{mappedNewFour}</div>
                </div>
            </section>
        </main>
    )
}

export default New;