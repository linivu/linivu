import { lazy, Suspense } from 'react';

// COMPONENTS //
import Loader from './components/global/Loader';
const Header = lazy(() => import('./components/layout/Header'));

// STYLES //
import './App.scss';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
    </Suspense>
  );
};

export default App;
