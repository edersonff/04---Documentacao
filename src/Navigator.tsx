import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Layout from './Layout/Layout';
import Error from './Screens/Error/Error';

export default function Navigator(){
  return(
  <Router>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Layout>
  </Router>
  )
};
