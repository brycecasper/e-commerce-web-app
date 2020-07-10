module.exports = {
    getDealsOne: (req, res) => {
        const db = req.app.get('db');
        db.deals.get_deals_one()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getDealsTwo: (req, res) => {
        const db = req.app.get('db');
        db.deals.get_deals_two()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getDealsThree: (req, res) => {
        const db = req.app.get('db');
        db.deals.get_deals_three()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getDealsFour: (req, res) => {
        const db = req.app.get('db');
        db.deals.get_deals_four()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getDealsFive: (req, res) => {
        const db = req.app.get('db');
        db.deals.get_deals_five()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getDealsSix: (req, res) => {
        const db = req.app.get('db');
        db.deals.get_deals_six()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    },

    getDealsSeven: (req, res) => {
        const db = req.app.get('db');
        db.deals.get_deals_seven()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    }
}