import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Deals = () => {

    useEffect(() => {
        getDealsOne()
        getDealsTwo()
        getDealsThree()
        getDealsFour()
        getDealsFive()
        getDealsSix()
        getDealsSeven()
    }, []);

    // Getting each deals card data
    const [dealsOne, setDealsOne] = useState([]);
    const getDealsOne = () => {
        axios.get('/api/deals-one')
        .then(res => setDealsOne(res.data))
        .catch(err => console.log(err))
    };
    const mappedDealsOne = 
    dealsOne.map((e, i) => (
        <div key={i} className='flex-deals-map'>
            <div className='deals-name'>{e.product_name}</div>
            <img src={e.product_img} alt='product' className='deals-img-one' />
            <div className='deals-discount'>20% off</div>
        </div>
    ));

    const [dealsTwo, setDealsTwo] = useState([]);
    const getDealsTwo = () => {
        axios.get('/api/deals-two')
        .then(res => setDealsTwo(res.data))
        .catch(err => console.log(err))
    };
    const mappedDealsTwo = 
    dealsTwo.map((e, i) => (
        <div key={i} className='flex-deals-movies-map'>
            <div className='deals-name-movies'>{e.product_name}</div>
            <img src={e.product_img} alt='product' className='deals-img-two' />
        </div>
    ));

    const [dealsThree, setDealsThree] = useState([]);
    const getDealsThree = () => {
        axios.get('/api/deals-three')
        .then(res => setDealsThree(res.data))
        .catch(err => console.log(err))
    };
    const mappedDealsThree = 
    dealsThree.map((e, i) => (
        <div key={i} className='flex-deals-map'>
            <div className='deals-name'>{e.product_name}</div>
            <img src={e.product_img} alt='product' className='deals-img-three' />
            <div className='deals-discount'>50% off</div>
        </div>
    ));

    const [dealsFour, setDealsFour] = useState([]);
    const getDealsFour = () => {
        axios.get('/api/deals-four')
        .then(res => setDealsFour(res.data))
        .catch(err => console.log(err))
    };
    const mappedDealsFour = 
    dealsFour.map((e, i) => (
        <div key={i} className='flex-deals-map'>
            <div className='deals-name'>{e.product_name}</div>
            <img src={e.product_img} alt='product' className='deals-img-four' />
            <div className='deals-discount'>15% off</div>
        </div>
    ));

    const [dealsFive, setDealsFive] = useState([]);
    const getDealsFive = () => {
        axios.get('/api/deals-five')
        .then(res => setDealsFive(res.data))
        .catch(err => console.log(err))
    };
    const mappedDealsFive = 
    dealsFive.map((e, i) => (
        <div key={i} className='flex-deals-map'>
            <div className='deals-name'>Mens shirts</div>
            <img src={e.product_img} alt='product' className='deals-img-five' />
            <div className='deals-discount'>50% off all</div>
        </div>
    ));

    const [dealsSix, setDealsSix] = useState([]);
    const getDealsSix = () => {
        axios.get('/api/deals-six')
        .then(res => setDealsSix(res.data))
        .catch(err => console.log(err))
    };
    const mappedDealsSix = 
    dealsSix.map((e, i) => (
        <div key={i} className='flex-deals-map'>
            <div className='deals-name'>{e.product_name}</div>
            <img src={e.product_img} alt='product' className='deals-img-six' />
            <div className='deals-discount'>10% off</div>
        </div>
    ));

    const [dealsSeven, setDealsSeven] = useState([]);
    const getDealsSeven = () => {
        axios.get('/api/deals-seven')
        .then(res => setDealsSeven(res.data))
        .catch(err => console.log(err))
    };
    const mappedDealsSeven = 
    dealsSeven.map((e, i) => (
        <div key={i} className='flex-deals-map'>
            <div className='deals-name'>{e.product_name}</div>
            <img src={e.product_img} alt='product' className='deals-img-seven' />
            <div className='deals-discount'>10% off</div>
        </div>
    ));

    return (
        <main className='deals-main'>
            <section className='deals'>
                <div className='deals-one'>
                    <div className='flex-deals-one'>
                        <div className='text-deals'>DEALS</div>
                        <div className='deals-card-one'>{mappedDealsOne}</div>
                    </div>
                    <div className='deals-card-two'>
                        <div className='flex-deals-movies'>{mappedDealsTwo}</div>
                        <div className='deals-discount'>Stream free</div>
                    </div>
                </div>
                <div className='deals-two'>
                    <div className='deals-card-three'>{mappedDealsThree}</div>
                    <div className='deals-card-four'>{mappedDealsFour}</div>
                    <div className='deals-card-five'>{mappedDealsFive}</div>
                    <div className='deals-card-six'>{mappedDealsSix}</div>
                    <div className='deals-card-seven'>{mappedDealsSeven}</div>
                </div>
            </section>
        </main>
    )
}

export default Deals;