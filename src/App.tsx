import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { StartupsPage } from './pages/StartupsPage';
import { InvestorsPage } from './pages/InvestorsPage';
import { IncubatorsPage } from './pages/IncubatorsPage';
import { CoursesPage } from './pages/CoursesPage';
import { StartupProfile } from './pages/StartupProfile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/startups" element={<StartupsPage />} />
          <Route path="/startup/:id" element={<StartupProfile />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/incubators" element={<IncubatorsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
