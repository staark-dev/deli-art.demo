import React from 'react';

// Import All components
import Header from 'components/header/Header';
import Nav from 'components/nav/Nav';
import About from 'components/about/About';
import Contact from 'components/contact/Contact';
import Footer from 'components/footer/Footer';
import Products from 'components/products/Products';

const App = () => {
    return (<>
        <Header />
        <Nav />
        <About />
        <Products />
        <Contact />
        <Footer />
    </>)
}

export default App;