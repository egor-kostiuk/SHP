import { FC, useEffect, useState } from 'react';
import { ProductService } from '../../../services/product.service';

import styles from './Home.module.scss';

export const Home: FC = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);


  // Promise 
  /*
  useEffect(() => {
    ProductService.getProducts()
    .then(data => setProducts(data.products))
    .catch(error => setError(error))
    .finally(() => setLoading(false));
  }, []);
  */

  useEffect (() => {
    const fetch = async () => {
      try {
        const { products } = await ProductService.getProducts();
        setProducts(products);
      }
      catch (error:any){
        setError(error);
      }
      finally {
        setLoading(false);
      }
    }

    fetch();
  }, []);

  return (
    <div className={styles.bg}>
      {error && <div className='text-red-500'>{error}</div> }
      { isLoading 
      ? <div>Loading...</div> 
      : products.length ? products.map(product => ( 
        <div key={products.id}>
          {/* @ts-ignore */}
          {product.title}
        </div>
      )) : <div>Products not found!</div> }
    </div>
  )
}