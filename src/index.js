import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './components/pages/form';
import MostPointsScored from './components/pages/mostPointsScored';
import App from './App';
import MostPointsInTeam from './components/pages/mostPointsInTeam';
import MostPointsInAllMaches from './components/pages/mostPointsInAllMatches';
import MostPointsByTimePlayed from './components/pages/mostPointsByTimePlayed';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' Component={App} />
        <Route path='/MostPointsScoredInOneMatch' element={<MostPointsScored />} />
        <Route path='/MostPointsInTeam' element={<MostPointsInTeam />} />
        <Route path='/MostPointsInAllMatches' element={<MostPointsInAllMaches />} />
        <Route path='/MostPointsByTimePLayed' element={<MostPointsByTimePlayed />} />
        <Route path='/addPlayers' element={<Form />} />
      </Route>  
    </Routes>
  </BrowserRouter>);
