import React from 'react';
import {Route, Routes} from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import ComicsPage from './pages/ComicsPage';
import SeriesPage from './pages/SeriesPage';
import GlobalStyles from './styles/global';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <CharactersPage/> } />
        <Route path='/comics' element={ <ComicsPage/> } />
        <Route path='/series' element={ <SeriesPage/> } />
      </Routes>
      <GlobalStyles />
    </>
  )
}

export default App;
