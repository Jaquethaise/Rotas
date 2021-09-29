import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router'

import Header from "../Header/Header.js";
import Inicio from "../Inicio/Inicio.js";
import Harley from "../Harley/Harley.js";
import Lambreta from "../Lambreta/Lambreta.js";
import Suzuki from '../Suzuki/Suzuki.js';
import Yamaha from "../Yamaha/Yamaha.js";
import Honda from "../Honda/Honda.js";
import CGTitan from "../Honda/CGTitan/CGTitan.js";
import City from "../Honda/City/City.js";
import Scooter from "../Honda/Scooter/Scooter.js";
import Sport from "../Honda/Sport/Sport.js";
import Trail from "../Honda/Trail/Trail.js";
import Carenagem from "../Honda/CGTitan/Info/Carenagem.js"
import Freios from "../Honda/CGTitan/Info/Freios.js"
import Painel from "../Honda/CGTitan/Info/Painel.js"
import Rodas from "../Honda/CGTitan/Info/Rodas.js"
import Tanque from "../Honda/CGTitan/Info/Tanque.js"

function App() {
  return (
    <div>
      
      <Header />

      <main>
        <Switch>
          <Route exact path = "/" render = {(props) => <Inicio/>}></Route>
          <Route exact path = "/harley" render = {(props) => <Harley/>}></Route>
          <Route exact path = "/lambreta" render = {(props) => <Lambreta/>}></Route>
          <Route exact path = "/suzuki" render = {(props) => <Suzuki/>}></Route>
          <Route exact path = "/yamaha" render = {(props) => <Yamaha/>}></Route>
          <Route exact path = "/honda" render = {(props) => <Honda/>}></Route>
          <Route exact path = "/honda/city" render = {(props) => <City/>}></Route>
          <Route exact path = "/honda/scooter" render = {(props) => <Scooter/>}></Route>
          <Route exact path = "/honda/sport" render = {(props) => <Sport/>}></Route>
          <Route exact path = "/honda/trail" render = {(props) => <Trail/>}></Route>
          <Route exact path = "/honda/city/cgtitan" render = {(props) => <CGTitan/>}></Route>
          <Route exact path = "/honda/city/cgtitan/carenagem" render = {(props) => <Carenagem/>}></Route>
          <Route exact path = "/honda/city/cgtitan/freios" render = {(props) => <Freios/>}></Route>
          <Route exact path = "/honda/city/cgtitan/painel" render = {(props) => <Painel/>}></Route>
          <Route exact path = "/honda/city/cgtitan/rodas" render = {(props) => <Rodas/>}></Route>
          <Route exact path = "/honda/city/cgtitan/tanque" render = {(props) => <Tanque/>}></Route>
         
        </Switch>
      </main>

    </div>
  );
}

export default App;
