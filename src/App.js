import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Campaign from './components/campaign';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Router>
        <Routes>
          <Route path="/campaign" element={<Campaign/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
