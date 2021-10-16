import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Content from './components/Content'

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about hooks react',
      isCompleted: false
    },
    {
      text: 'Meet a friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build a home',
      isCompleted: false
    },
    {
      text: 'Text someone',
      isCompleted: false
    }
    
  ])
  return (
    <React.Fragment>
    <div className="App">
      <h1>It is time to master these hooks! Let's go Isaac</h1>
      <Input />
      <Content />
    </div>
    <div>
      <p>Something here</p>
    </div>
    </React.Fragment>
  );
}

export default App;
