import React from 'react';
import './App.css';
import ProjectCard from '../features/projects/ProjectCard';

function App(): JSX.Element {
  return (
    <>
      <div className="App" />
      <h1>Здесь будет самое лучшее приложение-планировщик</h1>
      <ProjectCard />
    </>
  );
}

export default App;
