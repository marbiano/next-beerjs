import Sidebar from '../components/Sidebar';
import ProductPreview from '../components/ProductPreview';

export default function Home() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      {/* Content */}
      <div className="col-span-9 mb-32">
        <ul className="grid grid-cols-3 gap-8 gap-x-16 mt-32">
          <ProductPreview
            title="MacBook 12"
            price={200000}
            slug="macbook-12"
            imgUrl="https://dl.airtable.com/.attachmentThumbnails/7e576719b50dcd873635f0b521343f0e/cdd08206"
          />
          <ProductPreview
            title="Monitores Dell P2314H"
            price={60000}
            slug="monitores-dell-p2314h"
            imgUrl="https://dl.airtable.com/.attachmentThumbnails/b18536754492c56bb38a9f19ce493d87/b7689692"
          />
        </ul>
      </div>

      <Sidebar />
    </div>
  );
}
