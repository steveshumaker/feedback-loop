import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { FeelingsPage } from "../FeelingsPage/FeelingsPage";
import { CommentsPage } from "../CommentsPage/CommentsPage";
import { SupportPage } from "../SupportPage/SupportPage";
import { ReviewPage } from "../ReviewPage/ReviewPage";
import { UnderstandingPage } from "../UnderstandingPage/UnderstandingPage";
import { ThanksPage } from "../ThanksPage/ThanksPage";
import { AdminPage } from "../AdminPage/AdminPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>
      <Route exact path="/">
        <FeelingsPage/>
      </Route>
      <Route exact path="/1">
        <UnderstandingPage/>
      </Route>
      <Route exact path="/2">
        <SupportPage/>
      </Route>
      <Route exact path="/3">
        <CommentsPage/>
      </Route>
      <Route exact path="/4">
        <ReviewPage/>
      </Route>
      <Route exact path="/5">
        <ThanksPage/>
      </Route>
      <Route exact path="/admin">
        <AdminPage/>
      </Route>
      
    </Router>
  );
}

export default App;
