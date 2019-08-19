import React from 'react';
import './App.css';

import Layout from './components/Layout/Layout'
import CoctailBuilder from './containers/CoctailBuilder/CoctailBuilder';

function App() {
  return (
    <div>
      <Layout>
        <CoctailBuilder>
          
        </CoctailBuilder>
      </Layout>
    </div>
  );
}

export default App;
