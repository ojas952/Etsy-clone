import './App.css';
import {Route,Switch} from 'react-router-dom'
import Index from './Components/Index';
import NewProduct from './Components/NewProduct';
import Search from './Components/Search';
import ShowProduct from './Components/ShowProduct';
import EditProduct from './Components/EditProduct';
import Allsearch from './Components/Allsearch';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import CartList from './Components/CartList';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/products/new" component={NewProduct} />
        <Route exact path="/search/:query" component={Search} />
        <Route exact path="/search/" component={Allsearch} />
        <Route exact path="/products/:id" component={ShowProduct} />
        <Route exact path="/products/:id/edit" component={EditProduct} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user/cart" component={CartList} />
      </Switch> 
    </div>
  );
}

export default App;
