import { useState } from 'react';
import './App.css';
import Home from './components/pages/home';

function App() {
  const [data, setData] = useState()

  async function getUsersData() {
    await fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(d => setData(d))
  }
  
  async function getPostsData() {
    await fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(d => setData(d))
  }

  async function getCommentsData() {
    await fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(res => res.json())
    .then(d => setData(d))
  }

  return (
    <div className="App">
        <Home />
        <div>
            <button onClick={getUsersData}>Users</button>
            <button onClick={getPostsData}>Posts</button>
            <button onClick={getCommentsData}>Comments</button>
        </div>
        <ul>{data ? data.map(el => 
          <li key={el.id}>{JSON.stringify(el)}</li>
        ) : 'No Data!!'}</ul>
    </div>
  );
}

export default App;
