import React, { Component } from "react";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import {initialiseApp} from "./redux/app-reducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends Component {
       componentDidMount() {
              this.props.initialiseApp();
       }

render() {
       if (!this.props.initialised){
              return <Preloader/>
       }

       return (
              <BrowserRouter>
                     <div className="app-wrapper">
              <HeaderContainer />
              <Navbar />
              <Route path="/dialogs" 
                     render={ withSuspense(DialogsContainer)} />

              <Route path="/profile/:userId?" 
                     render={ () => {
                            return <React.Suspense fallback={<div>Loading</div>}>
                     <ProfileContainer />
                     </React.Suspense> 
                     }} />

              <Route path="/users" 
                     render={ () => <UsersContainer /> } />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/login" 
                     render={ () => <LoginPage /> } />
              </div>
              </BrowserRouter>
              )
       }
}

const mapStateToProps = (state) => ({
       initialised: state.app.initialised
})

export default compose(
       withRouter,
       connect(mapStateToProps, {initialiseApp}))(App);
