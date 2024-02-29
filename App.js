import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
    return ( <
        BrowserRouter >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        />  <
        Route path = "/About"
        element = { < About / > }
        />  <
        Route path = "/Contact"
        element = { < Contact / > }
        />  < /
        Routes >
        <
        footer / >
        <
        /BrowserRouter >);
    };
    export default App;