import React from "react";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <Route path="/dialogs" 
             render={ () => <DialogsContainer /> } />
      <Route path="/profile/:userId?" 
             render={ () => <ProfileContainer /> } />
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

export default App;
