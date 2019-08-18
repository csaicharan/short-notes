import './App.css';

import React from 'react';

/**
 * Step 1: Should import the BrowserRouter and wrap it to our component to start using routing
 */
import {BrowserRouter} from 'react-router-dom';
import Layout from './containers/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <div>
         <Layout></Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
