const db = require('../models/database.js')

function home (req, res) {
    /*
        let [rows, fields] = db.query('SELECT * FROM tablename')
    */
    
    res.render('home.ejs')
}
function randomAgent (req , res){
    res.render('agentAleatoire.ejs')
}

function randomTeam (req, res){
    res.render('randomTeam.ejs')
}
module.exports.home = home
module.exports.randomAgent = randomAgent
module.exports.randomTeam = randomTeam