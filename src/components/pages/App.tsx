import { Routes, Route, HashRouter } from 'react-router-dom'; // Remplace BrowserRouter par HashRouter

import Services from './Services';
import Contact from '../Contact';
import Projects from '../pages/Projects';
import Page from '../Page';
import Shop from './Shops';
import Home from './Home';
import OrderForm from '../order/OrderForm';

function App() {
  return (
    <HashRouter> {/* Remplace BrowserRouter par HashRouter */}
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projets" element={<Projects />} />
          <Route path="shop" element={<Shop />} />
          <Route path="formulaire" element={<OrderForm />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
