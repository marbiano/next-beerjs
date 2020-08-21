import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';
import { fetchProductBySlug, fetchAllProducts } from '../../lib/api';
import ProductView from '../../components/ProductView';
import Sidebar from '../../components/Sidebar';

export default function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="container mx-auto mt-32 text-center">Loading...</div>
    );
  }

  if (!product) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      <ProductView {...product.fields} imgUrl={product.fields.media[0].url} />
      <Sidebar />
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const product = await fetchProductBySlug(
    Array.isArray(slug) ? slug[0] : slug,
  );
  return {
    props: {
      product,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const products = await fetchAllProducts();
  return {
    paths: products.map((product) => ({
      params: { slug: product.fields.slug },
    })),
    fallback: true,
  };
};
