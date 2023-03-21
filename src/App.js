import React from 'react'
import PostsContextProvider from './contexts/postsContext';
import MainRoutes from './MainRoutes';
// pages

function App() {
  return (
    <div className="App">
      <PostsContextProvider>
        <MainRoutes/>
      </PostsContextProvider>
    </div>
  );
}

export default App;
