import { lazy, Suspense } from 'react';

// COMPONENTS //
import Loader from './components/global/Loader';
const Header = lazy(() => import('./components/layout/Header'));
const LandingPage = lazy(() => import('./pages/LandingPage'));

// STYLES //
import './App.scss';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <LandingPage />
    </Suspense>
  );
};

export default App;
