import React from 'react';
import './App.css';
import TasksList from '../features/tasks/TasksList';

function App(): JSX.Element {
  return (
    <>
      <div className="App" />
      <h1>Здесь будет самое лучшее приложение-планировщик</h1>
      <TasksList />
    </>
  );
}

export default App;
