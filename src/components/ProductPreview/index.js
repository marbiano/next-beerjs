import Link from 'next/link';

export default function ProductPreview({ slug, title, price, imgUrl }) {
  return (
    <li>
      <Link href={`/products/${slug}`}>
        <a>
          <div className="box">
            <img className="box-image" src={imgUrl} />
          </div>
          <div className="mt-4 text-gray-700">{title}</div>
          <div>${price}</div>
        </a>
      </Link>
    </li>
  );
}
