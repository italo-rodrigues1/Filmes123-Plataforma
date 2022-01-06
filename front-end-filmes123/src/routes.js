import { BrowserRouter,Route,Switch } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Filmes from "./views/Filmes";
import { AuthContextProvider } from './context';

const Routes = () => ( 

  <BrowserRouter>
    <AuthContextProvider>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/filmes" exact component={Filmes} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </AuthContextProvider>
  </BrowserRouter>

)

export default Routes;
