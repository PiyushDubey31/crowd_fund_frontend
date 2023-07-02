import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Campaign from './components/campaign';
import { Provider } from 'react-redux';
import store from './context/store';

function App() {
  return (
    <div className="App">
       <Provider store={store}>
      {/* <ResponsiveAppBar /> */}
      <Router>
        <Routes>
        <Route path="/" element={<ResponsiveAppBar/>} />
          <Route path="/campaign" element={<Campaign/>} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
