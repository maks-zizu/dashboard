import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProjectsList from '../features/projects/ProjectsList';
import ProjectPage from '../features/projects/ProjectPage';

function App(): JSX.Element {
  return (
    <>
      <div className="App" />
      <h1>Здесь будет самое лучшее приложение-планировщик</h1>
      <Routes>
        <Route path="/" element={<ProjectsList />} />
        <Route path="/:projectId" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
