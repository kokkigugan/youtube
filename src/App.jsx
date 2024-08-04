import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';


const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar show={showSidebar} toggleSidebar={toggleSidebar} />
        <div className="flex-1">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
