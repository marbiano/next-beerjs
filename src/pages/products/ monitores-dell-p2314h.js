import Sidebar from '../../components/Sidebar';
import ProductView from '../../components/ProductView';

const productData = {
  title: 'Monitores Dell P2314H',
  price: 60000,
  description: `Tengo a la venta dos monitores Dell P2314H, van
  especificaciones: full HD, 24", soportes Dell, cables
  DisplayPort to USB-C.`,
  user: '@4t4sh',
  reference: 'https://twitter.com/4t4sh/status/1295445262132019202',
  imgUrl:
    'https://dl.airtable.com/.attachmentThumbnails/b18536754492c56bb38a9f19ce493d87/b7689692',
};

export default function Product() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      <ProductView {...productData} />
      <Sidebar />
    </div>
  );
}
