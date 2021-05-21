const datMapper = require('../dataMapper');
const router = require('../router');


const mainController = {
    homePage: ((request, response) => {
response.render('index');
    })


};






module.exports = mainController;