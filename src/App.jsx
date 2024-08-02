import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';



const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar show={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <Home />
      </div>
    </div>
  );
};

export default App;
