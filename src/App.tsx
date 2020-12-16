import React from 'react';

// Components
import Dashboard from './components/dashboard';

// Context
import {GraphProvider} from './contexts/graphContext';

const App: React.FC = () => {
  return <GraphProvider><Dashboard /></GraphProvider>

}

export default App;
