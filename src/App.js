import { createContext, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import background from  './images/background.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Book from './components/Book/Book';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="app" style={{backgroundImage: `url(${background})`}}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/ride/:ridetype">
              <Book></Book>
            </PrivateRoute>
            <PrivateRoute path="/destination">
              <Destination></Destination>
            </PrivateRoute>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>

  );
}

export default App;
