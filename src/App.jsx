import { lazy, Suspense } from 'react';

// COMPONENTS //
import Loader from './components/global/Loader';
import Header from './components/layout/Header';
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Footer = lazy(() => import('./components/layout/Footer'));

// STYLES //
import './App.scss';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <LandingPage />
      <Footer />
    </Suspense>
  );
};

export default App;
