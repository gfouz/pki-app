import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from './components/Card';
const Homepage = lazy(() => import("./routes/homepage/index"));
const Contact = lazy(() => import("./routes/contact/index"));
const Consultas = lazy(() => import("./routes/consultas/index"));
const Services = lazy(() => import("./routes/services/index"));
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <>
        <HashRouter>
          <Suspense fallback={<Card />}>
            <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/contactos" element={<Contact />} />
              <Route path="/consultas" element={<Consultas />} />
              <Route path="/servicios" element={<Services />} />
            </Routes>
          </Suspense>
        </HashRouter>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
