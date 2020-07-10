import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../home/Header';
import Footer from '../home/Footer';

const Music = () => {

    useEffect(() => {
        getTopCharts()
    }, []);

    const [topCharts, setTopCharts] = useState([]);
    const getTopCharts = () => {
        axios.get('/api/music/top-charts')
        .then(res => setTopCharts(res.data))
        .catch(err => console.log(err))
    };
    const mappedTopCharts = topCharts.map((e, i) => (
        <div key={i}>
            {e.track}
            <img src={e.album_img} alt={e.track} className='top-charts-album-img' />
        </div>
    ));

    return (
        <main className='music-main'>

            <Header />

            <section className='top-charts-section'>

            </section>

            <section className='rap-section'>

            </section>

            <section className='pop-section'>

            </section>

            <section className='country-section'>

            </section>

            <section className='alternative-randb-section'>

            </section>

            <section className='rock-metal-section'>

            </section>

            <section className='electronic-section'>

            </section>

            <Footer />

        </main>
    )
}

export default Music;

// top 50 chart
// by genre sections - each section will then display top 10 artists with each artists top cover img AND genre playlist of compiled top artists tracks - onclick will display that artists top ten tracks and top 3 albums