import useProduct from '../hooks/useProduct'
import ProductCard from '../components/ProductCard'
import SearchBar from './SearchBar'
import { useState,useEffect } from 'react'
import News from './News'


const Shop = () => {
  const {product,isLoading,isError}=useProduct()
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  console.log(product)

  useEffect(() => {
    if (searchQuery) {
      const filtered = product.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(product);
    }
  }, [product, searchQuery]);


  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  if(isLoading){
    return <h2 className="fw-bold text-center fs-3 my-3">Loading...</h2>
  }
  if(isError){
    return <h2 className="fw-bold text-center fs-3 my-3">Error...</h2>
  }
 
  return (
    <>
    <div className="container my-2 mb-5">
      <SearchBar onSearch={handleSearch} />
      <div className="row gy-3">
        {filteredProducts.map((items)=>{
          return <ProductCard key={items.id}data={items}/>

        })}

      </div>
    </div>
    <News/>
    </>
    
    
  )
}

export default Shop
