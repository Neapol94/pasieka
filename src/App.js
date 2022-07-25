import React from 'react'
import './scss/App.css';
import './index.css';
import AddForm from './components/AddForm'
import Main from './components/Main';
import ArticleList from './components/ArticleList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import {Route, Link, Routes} from 'react-router-dom'

function Navbar () {

  return (
    <>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            <img src="images/hexagon-logo.png" alt="hexagon-logo-bee-yard" /><Link to="/"> Polskie pasieki</Link>
          </div>

          {/* Navbar Links */}
          <ul id="menu">
            <li><Link to="/"> Strona główna</Link></li>
            <li><Link to="/all"> Wszystkie pasieki</Link></li>
            <li><Link to="/add"> Dodaj</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

function Footer () {
  return (
    <footer>
      Created with <FontAwesomeIcon icon={faHeart} /> by Bartłomiej Bielawski &copy; 2022
    </footer>
  );
}

function App() {

  return (
    <>
      <Navbar />
      <div id="body-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/all" element={<ArticleList />} />
          <Route path="/add" element={<AddForm />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;