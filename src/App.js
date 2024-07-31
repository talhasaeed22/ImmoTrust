import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import HomePage from './pages/home';
import HomeState from './context/HomeState';
const App = () => {
  return (
    <HomeState>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </HomeState>
  )
}

export default App
