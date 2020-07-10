module.exports = {
    getMainFeatured: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_main_featured()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getFeaturedOne: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_featured_one()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getFeaturedTwo: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_featured_two()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getFeaturedThree: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_featured_three()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getDealsOne: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_deals_one()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getDealsTwo: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_deals_two()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getDealsThree: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_deals_three()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getDealsFour: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_deals_four()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getDealsFive: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_deals_five()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getDealsSix: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_deals_six()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getDealsSeven: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_deals_seven()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getNewOne: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_new_one()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getNewTwo: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_new_two()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getNewThree: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_new_three()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getNewFour: (req, res) => {
        const db = req.app.get('db');
        db.home_marketing.get_new_four()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    }
}