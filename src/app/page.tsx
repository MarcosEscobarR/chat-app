// pages/index.tsx
import React from 'react';
import AppBar from './components/Appbar';
import Sidebar from './components/Sidebar';
import ChatBox from './components/ChatBox';

const Home: React.FC = () => {
  return (
    <div>
      {/* <AppBar /> */}
      <div className="flex">
        <Sidebar />
        {/* <ChatBox chatId="1" /> */}
      </div>
    </div>
  );
};

export default Home;
