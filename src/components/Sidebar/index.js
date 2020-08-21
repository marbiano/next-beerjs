import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="col-start-11 col-span-2 mt-16">
      <div className="sticky top-0 pt-16">
        <h1 className="text-2xl">
          <Link href="/">
            <a>La Tienda</a>
          </Link>
        </h1>
        <p className="text-l text-gray-600">Marketplace en vivo.</p>
        <div className="mt-16">
          <Link href="/publica">
            <a className="underline text-orange-600">Publicá</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
