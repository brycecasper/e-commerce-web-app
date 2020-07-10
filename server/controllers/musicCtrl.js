module.exports = {
    getTopCharts: (req, res) => {
        const db = req.app.get('db');
        db.music.get_top_charts()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    }
}