import { BrowserRouter,Route,Switch } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Cadastro from "./views/Cadastro";
import Filmes from "./views/Filmes";

const  Routes = () => ( 
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/filmes" component={Filmes} />
      <Route path="/home" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
