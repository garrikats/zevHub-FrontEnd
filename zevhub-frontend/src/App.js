import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import CategoriesBar from './Components/CategoriesBar';
import ResultsView from './Components/ResultsView';
import ProductPage from './Components/ProductPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <CategoriesBar />
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/products' element={<ResultsView />}></Route>
          <Route path='/products/:id' element={<ProductPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
