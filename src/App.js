import { useState } from 'react'
import ProductReturnDetail from './components/ProductReturnDetail'
import ProductReturnList from './components/ProductReturnList'
import './App.css';



function App() {
  const[selectedProductId, setSelectedProductId] = useState() //"61972e0acfa16b00fb4fe506"

  return (
    <div className="App">
    {/* { 
        selectedProductId ? 
        <div>
            <button onClick={() => setSelectedProductId(undefined)}>Go Back</button>
            <ProductReturnDetail productId={selectedProductId}/>
        </div> 
        : 
        <ProductReturnList setSelectedProductId ={setSelectedProductId}/>
    }     */}

    { !selectedProductId && 
      <ProductReturnList setSelectedProductId ={setSelectedProductId}/>
    }
    {
      selectedProductId && <div>
        <button onClick={() => setSelectedProductId(null)}>Go Back</button>
        <ProductReturnDetail productId={selectedProductId}/>
        </div>
    }
    </div>
  );
}

export default App;
