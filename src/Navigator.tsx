import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Layout from './Layout/Layout';
import Error from './Screens/Error/Error';
import Documentação from './Screens/Documentação/Documentação';
import DocumentaçãoLinguagem from './Screens/DocumentaçãoLinguagem/DocumentaçãoLinguagem';
import Config from './Screens/Config/Config';
import { store } from '.';

export default function Navigator(){
  const { background } = store.getState();
  return(
  <Router>
    <Layout>
        <style>
          {`
            body{
              background: ${background.value};
            }            
          `}
        </style>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/documentação' element={<Documentação />}/>
        <Route path='/documentação/:linguagem' element={<DocumentaçãoLinguagem />}/>
        <Route path='/config' element={<Config />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Layout>
  </Router>
  )
};
