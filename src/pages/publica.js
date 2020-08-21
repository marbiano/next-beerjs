import Sidebar from '../components/Sidebar';

export default function Publica() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      {/* Content */}
      <div className="col-span-9 mb-32">
        <div className="mt-24">
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/shrC2cljAFfwaAEls?backgroundColor=orange"
            frameBorder="0"
            width="100%"
            height="900"
            style={{ background: 'transparent' }}
          ></iframe>
        </div>
      </div>

      <Sidebar />
    </div>
  );
}
