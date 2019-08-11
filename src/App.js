import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Header from './header/header.js'
import Reacteventsource from './reacteventsource/reacteventsource.js'
import Npmpackage from './npmpackage/npmpackage.js'
import Microfrontend from './microfrontend/microfrontend.js'

function App() {
  return (
    // You cannot use a BrowserRouter with a file:// path.
    // It's a security thing. Either set up a small web server or use HashRouter.
    <BrowserRouter>
      <div>
        <Route path="/" component={Header} />
        <Route path="/reacteventsource" component={Reacteventsource} />
        <Route path="/npmpackage" component={Npmpackage} />
        <Route path="/microfrontend" component={Microfrontend} />
      </div>
    </BrowserRouter>
  );
}

export default App;
