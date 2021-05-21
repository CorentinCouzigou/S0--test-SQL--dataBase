const client = require('./dataBase');


const dataMapper = {
    
    getJamesBond: (logging, password, callback) => {
        console.log('bien arrivé dans le dataMapper');

        client.query('SELECT * FROM logging JOIN password ON logging.id = password.logging_id WHERE user_name=$1 AND password.motdepasse=$2', [logging, password], (error, result) =>{
            if (error)
            {
                callback(error);
            } else 
            {
                console.log('dans le else')
                const login = result.rows;
                console.log(login);
                callback(null, login);
            }
        })
    }
};




module.exports = dataMapper;

// 'SELECT * FROM logging JOIN password ON logging.id = password.logging_id WHERE user_name='bon james' AND password.motdepasse='casinoroyale'