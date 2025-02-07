import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

import '../src/App.css'
import ImageSlider from './components/ImageSlider';
import Content from './components/Content';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <WhatsAppButton/>
      <main className="container-fluid p-0">
        {/* Responsive Background Image */}
        {/* <div className="bg-container mb-4 mt-4">
          <img src={starbg} alt="Cooling Solution" className="img-fluid w-100 bg-image" />
        </div> */}
        <ImageSlider/>
        <div className="container py-4">
        <ProductList />
        </div>
      </main>
      <Content/>
      <Footer />
    </div>
  );
}

export default App;