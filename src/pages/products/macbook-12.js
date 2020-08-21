import Sidebar from '../../components/Sidebar';
import ProductView from '../../components/ProductView';

const productData = {
  title: 'MacBook 12',
  price: 200000,
  description: `Macbook de 12'' con funda y cargador. Es de 256GB SSD y 8G de
                disco con Retina Display. Anda perfecto. La reemplacé por una
                Macbook Pro. Es perfecta para uso "de oficina", para programar
                web no es muy útil porque el CPU que tiene te deja un poco a
                pata. Definitivamente no sirve para diseñar.`,
  user: '@aseba',
  reference: 'https://twitter.com/aseba/status/1295441243665829889',
  imgUrl:
    'https://dl.airtable.com/.attachmentThumbnails/7e576719b50dcd873635f0b521343f0e/cdd08206',
};

export default function Product() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      <ProductView {...productData} />
      <Sidebar />
    </div>
  );
}
