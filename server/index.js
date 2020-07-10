require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();
const cors = require('cors');
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
const port = SERVER_PORT;
const authCtrl = require('./controllers/authCtrl');
const homeMarketingCtrl = require('./controllers/homeMarketingCtrl');
const musicCtrl = require('./controllers/musicCtrl');

app.use(express.json());
app.use(cors());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 60}
}));

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
      rejectUnauthorized: false
  }
})
.then(db => {
  app.set('db', db);
  console.log('database connected');
  app.listen(port, () => {
      console.log(`Server running on ${port}`);
  })
})
.catch(err => console.log(err));

//ENDPOINTS

//AUTH
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.post('/auth/logout', authCtrl.logout);

//HOME MARKETING - FEATURED, DEALS, NEW
app.get('/api/main-featured', homeMarketingCtrl.getMainFeatured);
app.get('/api/featured-one', homeMarketingCtrl.getFeaturedOne);
app.get('/api/featured-two', homeMarketingCtrl.getFeaturedTwo);
app.get('/api/featured-three', homeMarketingCtrl.getFeaturedThree);
app.get('/api/deals-one', homeMarketingCtrl.getDealsOne);
app.get('/api/deals-two', homeMarketingCtrl.getDealsTwo);
app.get('/api/deals-three', homeMarketingCtrl.getDealsThree);
app.get('/api/deals-four', homeMarketingCtrl.getDealsFour);
app.get('/api/deals-five', homeMarketingCtrl.getDealsFive);
app.get('/api/deals-six', homeMarketingCtrl.getDealsSix);
app.get('/api/deals-seven', homeMarketingCtrl.getDealsSeven);
app.get('/api/new-one', homeMarketingCtrl.getNewOne);
app.get('/api/new-two', homeMarketingCtrl.getNewTwo);
app.get('/api/new-three', homeMarketingCtrl.getNewThree);
app.get('/api/new-four', homeMarketingCtrl.getNewFour);

//MUSIC
app.get('/api/music/top-charts', musicCtrl.getTopCharts);