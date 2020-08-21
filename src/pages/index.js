import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchAllProducts } from '../lib/api';
import Sidebar from '../components/Sidebar';
import ProductPreview from '../components/ProductPreview';

export default function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchProducts() {
      const newProducts = await fetchAllProducts();
      setProducts(newProducts);
    }

    fetchProducts();
  }, []);

  if (!products) {
    return (
      <div className="container mx-auto mt-32 text-center">Loading...</div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="container mx-auto mt-32 text-center">
        No hay productos disponibles.
      </div>
    );
  }

  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      {/* Content */}
      <div className="col-span-9 mb-32">
        <ul className="grid grid-cols-3 gap-8 gap-x-16 mt-32">
          {products.map((product) => (
            <ProductPreview
              key={product.id}
              {...product.fields}
              imgUrl={product.fields.media[0].thumbnails.large.url}
            />
          ))}
        </ul>
      </div>

      <Sidebar />
    </div>
  );
}
