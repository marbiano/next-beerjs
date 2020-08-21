import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';
import { fetchProductBySlug } from '../../lib/api';
import ProductView from '../../components/ProductView';
import Sidebar from '../../components/Sidebar';

export default function Product() {
  const [product, setProduct] = useState();
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    async function fetchProduct() {
      const newProduct = await fetchProductBySlug(
        Array.isArray(slug) ? slug[0] : slug,
      );
      setProduct(newProduct);
    }

    if (slug) fetchProduct();
  }, [slug]);

  // Product is loading
  if (!product) {
    return (
      <div className="container mx-auto mt-32 text-center">Loading...</div>
    );
  }

  // Product doesn't exist
  if (product.error === 404) {
    return <DefaultErrorPage statusCode={product.error} />;
  }

  console.log(product);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      <ProductView {...product.fields} imgUrl={product.fields.media[0].url} />
      <Sidebar />
    </div>
  );
}
