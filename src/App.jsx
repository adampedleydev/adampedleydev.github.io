import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import ActionPoint from './Pages/ActionPoint';
import InteriorQuiz from './Pages/InteriorQuiz';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
      <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ActionPoint" element={<ActionPoint />} />
            <Route path="/InteriorQuiz" element={<InteriorQuiz />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
  )
}

export default App;