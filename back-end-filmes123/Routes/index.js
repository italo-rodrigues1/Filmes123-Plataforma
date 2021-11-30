const Router = require('express'); 
const usuarioController = require('../Controllers/userControllers');

const routes = Router(); 

routes.get('/', (req, res) => {
    res.send('API Filmes123!')
})
routes.get('/usuario/:id', usuarioController.oneUser);
routes.get('/usuario', usuarioController.allUser);

routes.post('/usuario',usuarioController.createUser);

routes.put('/usuario/:id', usuarioController.update);

routes.delete('/usuario/:id', usuarioController.delete);

module.exports = routes;
