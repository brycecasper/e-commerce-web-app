const bcrypt = require('bcryptjs');

module.exports = {
    login: async(req, res) => {
        const {email, password} = req.body;
        const db = req.app.get('db');
        const {session} = req;

        let user = await db.auth.get_user(email);
        if(!user[0]){
            return res.status(400).send('User not found');
        }

        const authenticated = bcrypt.compareSync(password, user[0].password);
        if(!authenticated){
            return res.status(401).send('Incorrect password');
        }

        delete user[0].password;
        session.user = user[0]
        res.status(202).send(session.user);
    },

    register: async(req, res) => {
        const db = req.app.get('db');
        const {email, password} = req.body;
        const {session} = req;

        let user = await db.auth.get_user(email);
        if(user[0]){
            return res.status(400).send('User already exists');
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        let registeredUser = await db.auth.register_user(email, hash);

        let userCart = await db.order.create_order(registeredUser[0].user_id)
        session.user = {...registeredUser[0], ...userCart[0]};
        res.status(201).send(session.user);
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}