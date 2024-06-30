import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PostList from './components/PostList';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <Navbar />
      <Header />
      <PostList />
    </div>
  );
}

export default App;
