const dataMapper = require('../dataMapper');



const mainController = {
    homePage: (request, response) => {
       response.render('index');
    },

    bucheron: (request, response) => {
        const logging = request.body.logging
        const password = request.body.password
        console.log(logging, password)
        dataMapper.getJamesBond(logging, password,(error, result) => {
            if (error){
                console.log(error)
                response.status(500).send('Notre erreur')
            } 
            else {  
                console.log(result)
                if (result !== undefined) {
                    response.render('bucheron')
              }
            }
        })
    }
};

// req.body => récupérer une methode POST
// req.query =>  récupérer une methode GET
// req.params => récupérer un :id dans le router




module.exports = mainController;