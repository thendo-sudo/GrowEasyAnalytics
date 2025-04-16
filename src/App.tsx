import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './landing';
import TechStackForm from './tech-stack-form';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<TechStackForm />} />
      </Routes>
    </Router>
  );
}