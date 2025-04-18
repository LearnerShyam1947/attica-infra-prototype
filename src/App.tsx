import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import BuilderSelection from './pages/BuilderSelection';
import ConstructionForm from './pages/ConstructionForm';
import Home from './pages/Home';
import QuoteSelection from './pages/QuoteSelection';
import CommingSoon from './components/CommingSoon';
import SingleQuote from './pages/SingleQuote';
import SellBuy from './pages/SellBuy';
import PropertyDetails from './pages/PropertyDetails';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quote" element={<QuoteSelection />} />
          <Route path="interior-experts" element={<CommingSoon />} />
          <Route path="architecture-design" element={<CommingSoon />} />
          <Route path="builders" element={<BuilderSelection />} />
          <Route path="construction-form" element={<ConstructionForm />} />
          <Route path="single-quote" element={<SingleQuote />} />
          <Route path="sell-buy" element={<SellBuy />} />
          <Route path="property/:type" element={<PropertyDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;