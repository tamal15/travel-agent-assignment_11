
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Addnewservice from './Component/Addnewservice/Addnewservice';
// import AuthProvider from './AuthProvider/AuthProvider';
// import AuthProvider from './AuthProvider/AuthProvider';
import Adduser from './Component/Adduser/Adduser';
import Banner from './Component/Home/Banner/Banner';
import Header from './Component/Home/Header';
import Home from './Component/Home/Home/Home';
import ServiceDetails from './Component/Home/Home/ServiceDetails';
import Services from './Component/Home/Home/Services';
// import ServiceDetails from './Component/Home/Home/ServiceDetails';
// import AuthProvider from '../src/AuthProvider/AuthProvider'
import Login from './Component/Login/Login';
import ManageOrder from './Component/ManageOrder/ManageOrder';
import Myorders from './Component/Myorders/Myorders';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute';
import Register from './Component/Register/Register';
import AuthProvider from './Context/AuthProvider';



function App() {
  return (
    <div className="App">
     
    <AuthProvider>
    <BrowserRouter>
      <Header></Header>
     
      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        
        <PrivetRoute path="/serviceDetails/:id">
            <ServiceDetails></ServiceDetails>
         
        </PrivetRoute>
        <Route path="/addservice">
            <Adduser></Adduser>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <Route path="/register">
            <Register></Register>
        </Route>
        <Route path="/myOrders">
            <Myorders></Myorders>
        </Route>
        <Route path="/newService">
            <Addnewservice></Addnewservice>
        </Route>
        <Route path="/manage">
            <ManageOrder></ManageOrder>
        </Route>
      </Switch>
      </BrowserRouter>

    </AuthProvider>
    </div>
  );
}

export default App;
