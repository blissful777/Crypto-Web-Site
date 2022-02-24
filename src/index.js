import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Trade from './components/trade/Trade';
import Earn from './components/earn/Earn';
import Help from './components/help/Help';
import Pay from './components/pay/Pay';
import Nft from './components/nft/Nft';

ReactDOM.render(
  <BrowserRouter>
<Routes>
      <Route path="/" element={<App />} />
      <Route path="/earn" element={<Earn />} />
      <Route path="/help" element={<Help />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/nft" element={<Nft />} />
    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
