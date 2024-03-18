import React from 'react';
import logo from './logo.svg';
import './App.css';
import Code from "./code1/Code";
import Code199 from "./code199/Code199";
import Code206 from "./Code206/Code206";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Global from "./Global/Global";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <RecoilRoot >
      <div className="App">
        <Global>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Code />} />
              <Route path="/199" element={<Code199 />} />
              <Route path="/206" element={<Code206 />} />
            </Routes>
          </BrowserRouter>
        </Global>
      </div>
    </RecoilRoot>
  );
}

export default App;
