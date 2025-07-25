import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Hero, About, Experience, Tech, Works, Contact, Footer, StarsCanvas } from './components';
import Education from "./components/Education";
import SplineScene from "./components/SplineScene";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/* <SplineScene/> */}
          <Navbar />
          <Hero />
        </div>
        
        <div className='relative z-0'>
          <About />
          <Experience />
          <Education />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
        
        <Footer />
        
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#1a1a2e',
              color: '#fff',
              border: '1px solid #4f46e5',
              padding: '16px',
              borderRadius: '8px',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;