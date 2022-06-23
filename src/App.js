import './App.css';
import Home from './components/Home';
import Forms from './components/Forms';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UpdateDetails from './components/updateDetails';
import NoMatch from './components/404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Forms />} />
          <Route path="/edit/:id" element={<UpdateDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;