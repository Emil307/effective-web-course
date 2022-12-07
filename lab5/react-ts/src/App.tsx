import React from 'react';
import {Route, Routes} from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import ComicsPage from './pages/ComicsPage';
import SeriesPage from './pages/SeriesPage';
import CharactesItem from './pages/CharactesItem';
import ComicsItem from './pages/ComicsItem';
import SeriesItem from './pages/SeriesItem';
import GlobalStyles from './styles/global';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={ <CharactersPage/> } />
        <Route path='/comics' element={ <ComicsPage/> } />
        <Route path='/series' element={ <SeriesPage/> } />
        <Route path={'/charactes' + '/:id'} element={ <CharactesItem/> }/>
        <Route path={'/comics' + '/:id'} element={ <ComicsItem/> }/>
        <Route path={'/series' + '/:id'} element={ <SeriesItem/> }/>
      </Routes>

      <GlobalStyles />
    </>
  )
}

export default App;
