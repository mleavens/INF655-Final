import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import  { Header }  from './components/Header';
import  { FavoritesList }  from './components/FavoritesList';
import  { PopularMovies }  from './components/PopularMovies';
import  { Add }  from './components/Add';
import './lib/font-awesome/css/all.min.css';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>

    <Router>
      <>
      <Header />

      <Routes>
        <Route path='/' element = {<FavoritesList />}/>

        <Route path='/popular' element = {<PopularMovies />}/>

        <Route path='/add' element = {<Add />}/>

      </Routes>
      </>
    </Router>
    
    </GlobalProvider>
  );
}

export default App;
