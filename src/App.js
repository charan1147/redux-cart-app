import ProductList from './components/ProdutList';
import Cart from './cart/Cart';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Shopping Site</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
