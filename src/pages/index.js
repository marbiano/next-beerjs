import Link from 'next/link';
import { fetchAllProducts } from '../lib/api';
import Sidebar from '../components/Sidebar';
import ProductPreview from '../components/ProductPreview';

export default function Home({ products }) {
  if (products.length === 0) {
    return (
      <div className="container mx-auto mt-32 text-center">
        No hay productos disponibles.
      </div>
    );
  }

  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      <div className="col-span-9 mb-32">
        <ul className="grid grid-cols-3 gap-8 gap-x-16 mt-32">
          {products.map((product) => (
            <ProductPreview
              key={product.id}
              {...product.fields}
              imgUrl={product.fields.media[0].url}
            />
          ))}
        </ul>
      </div>
      <Sidebar />
    </div>
  );
}

export const getStaticProps = async () => {
  const products = await fetchAllProducts();
  return {
    props: {
      products,
    },
    revalidate: true,
  };
};
