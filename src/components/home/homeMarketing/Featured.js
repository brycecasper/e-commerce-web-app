import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Featured = () => {

    useEffect(() => {
        getMainFeatured()
        getFeaturedOne()
        getFeaturedTwo()
        getFeaturedThree()
    }, []);

    // Getting each featured card data
    const [mainFeatured, setMainFeatured] = useState([]);
    const getMainFeatured = () => {
        axios.get('/api/main-featured')
        .then(res => setMainFeatured(res.data))
        .catch(err => console.log(err))
    };
    const mappedMainFeatured = 
    mainFeatured.map((e, i) => (
        <div key={i} className='flex-featured-map'>
            <div className='main-featured-name'>{e.product_name}</div>
            <img src={e.product_img} alt='product' className='featured-main-img' />
            <div className='main-featured-desc'>{e.product_desc}</div>
        </div>
    ));

    const [featuredOne, setFeaturedOne] = useState([]);
    const getFeaturedOne = () => {
        axios.get('/api/featured-one')
        .then(res => setFeaturedOne(res.data))
        .catch(err => console.log(err))
    };
    const mappedFeaturedOne = 
    featuredOne.map((e, i) => (
        <div key={i} className='flex-featured-map'>
            <div className='featured-name-one'>{e.product_name}</div>
            <img src={e.product_img} alt='product' className='featured-img-one' />
            <div className='featured-desc-one'>{e.product_desc}</div>
        </div>
    ));

    const [featuredTwo, setFeaturedTwo] = useState([]);
    const getFeaturedTwo = () => {
        axios.get('/api/featured-two')
        .then(res => setFeaturedTwo(res.data))
        .catch(err => console.log(err))
    };
    const mappedFeaturedTwo = 
    featuredTwo.map((e, i) => (
        <div key={i} className='flex-featured-map'>
            <div className='featured-name'>{e.product_name}</div>
            <img src={e.product_img} alt='product' className='featured-img-two' />
        </div>
    ));

    const [featuredThree, setFeaturedThree] = useState([]);
    const getFeaturedThree = () => {
        axios.get('/api/featured-three')
        .then(res => setFeaturedThree(res.data))
        .catch(err => console.log(err))
    };
    const mappedFeaturedThree = 
    featuredThree.map((e, i) => (
        <div key={i} className='flex-featured-map'>
            <div className='featured-name'>{e.product_name}</div>
            <img src={e.product_img} alt='product' className='featured-img-three' />
        </div>
    ));

    return (
        <main className='featured-main'>
            <section className='featured'>
                <div className='featured-one'>
                    <div className='text-featured'>FEATURED</div>
                    <div className='featured-card-main'>{mappedMainFeatured}</div>
                </div>
                <div className='featured-two'>
                    <div className='featured-card-one'>{mappedFeaturedOne}</div>
                    <div className='flex-small-featured'>
                        <div className='featured-card-two'>{mappedFeaturedTwo}</div>
                        <div className='featured-card-three'>{mappedFeaturedThree}</div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Featured;