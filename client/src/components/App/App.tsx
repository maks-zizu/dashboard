import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProjectsList from '../features/projects/ProjectsList';
import ProjectPage from '../features/projects/ProjectPage';
import Registration from '../features/auth/Registration';
import Authorization from '../features/auth/Authorization';
import Navigation from '../features/navigation/Navigation';

function App(): JSX.Element {
  return (
    <>
      <div className="App" />
      <h1>Dashbord</h1>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<ProjectsList />} />
          <Route path="/api/tasks/:projectId" element={<ProjectPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authorization />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
