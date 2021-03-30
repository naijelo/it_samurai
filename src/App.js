import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Route path="/dialogs" 
             render={ () => <DialogsContainer /> } />
      <Route path="/profile" 
             render={ () => <Profile /> } />
      <Route path="/users" 
             render={ () => <UsersContainer /> } />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
    </div>
    </BrowserRouter>
  )
}

export default App;
