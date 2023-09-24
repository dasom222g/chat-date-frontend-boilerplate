import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import UserInfo from './pages/UserInfo';
// import Chat from './pages/Chat';
function App() {
  // logic

  // view
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/user-info" element={<UserInfo />} /> */}
      {/* <Route path="/partner-info" element={<PartnerInfo />} /> */}
      {/* <Route path="/chat" element={<Chat />} /> */}
    </Routes>
  );
}

export default App;
