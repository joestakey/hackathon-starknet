import { useState } from 'react';
import Home from './Pages';
import UploadPage from './Pages/upload.js';
import BrowsePage from './Pages/browse.js';
import ErrorPage from './Pages/error.js';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Footer from './Components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/upload' element={<UploadPage />} exact />
          <Route path='/browse' element={<BrowsePage />} exact />
          <Route path='/*' element={<Home />} exact />
        </Routes>
        < Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
