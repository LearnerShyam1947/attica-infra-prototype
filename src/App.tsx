import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import BuilderSelection from './pages/BuilderSelection';
import ConstructionForm from './pages/ConstructionForm';
import Home from './pages/Home';
import QuoteSelection from './pages/QuoteSelection';
import CommingSoon from './components/CommingSoon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quote" element={<QuoteSelection />} />
          <Route path="single-quote" element={<CommingSoon />} />
          <Route path="builders" element={<BuilderSelection />} />
          <Route path="construction-form" element={<ConstructionForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;