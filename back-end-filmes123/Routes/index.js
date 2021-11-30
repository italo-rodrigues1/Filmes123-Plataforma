const Router = require('express'); 
const usuarioController = require('../Controllers/userControllers');

const routes = Router(); 

routes.get('/', (req, res) => {
    res.send('API Filmes123!')
})
routes.get('/usuario/:id', usuarioController.getUsuario);
routes.get('/usuario', usuarioController.getUsuario);

routes.post('/usuario',usuarioController.createUsuario);

routes.put('/usuario/:id', usuarioController.update);

routes.delete('/usuario/:id', usuarioController.delete);

module.exports = routes;
