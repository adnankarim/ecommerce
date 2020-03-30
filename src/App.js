import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx'
import {auth} from './firebase/firebase.utils';
// We want to access current user in most of the component thus importing auth into app.js


class App extends React.Component {
  constructor (){
    super();
    this.state ={
      currentUser:null
    }
  }
  //setting the property on class
  unsubscribeFromAuth = null;
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  componentDidMount(){
    // we someone signout we want to be aware firebase does this job
    // without us manually fetching
    // firebase provides persistance of session out of box
    // persistance can be changed manually
   //whenever any changes occur this methods calls automatically
  //  we have to close subscription when unmount to avoid memory leaks

     
    auth.onAuthStateChanged(user=>
      {
        this.setState({
          currentUser:user
        });
        console.log(user);

      }
      )
  }
  
  render() {
    
    
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch >
        <Route  exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/> 
        <Route path='/signin' component={SignInSignUp}/> 
        </Switch>
       
      </div>
    );
  }
}


// firebase knows user is still signed in thus 
// keeps it signed in until user signs out


export default App;
