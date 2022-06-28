import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Modalpage from "./pages/Modal";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import Quiz from "./pages/Quiz";
import QuizSummary from "./pages/QuizSummary";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



const App = () => {

  return (
    <div >
      <Router>
        <div>
          <Navbar />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/counter" element={<Counter />}>
            </Route>
            <Route path="/modalpage" element={<Modalpage />}>
            </Route>
            <Route path="/form" element={<Form />}>
            </Route>
            <Route path="/quiz" element={<Quiz />}>
            </Route>
            <Route path="/quizsummary" element={<QuizSummary />}>
            </Route>
          </Routes>
        </div>
      </Router >

    </div >
  )
}

export default App


