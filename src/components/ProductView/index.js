export default function ProductView({
  title,
  price,
  description,
  user,
  reference,
  imgUrl,
}) {
  return (
    <div className="col-span-9">
      <div className="grid grid-cols-9 gap-8">
        <div className="col-span-2 mt-16">
          <div className="sticky top-0 pt-16">
            <h1>{title}</h1>
            <div className="font-bold mt-2">${price}</div>
            <div className="text-sm text-gray-700 mt-6">{description}</div>
            <div className="text-sm mt-12">
              <span className="text-gray-600">Vende:</span>{' '}
              <a
                href={`https://twitter.com/${user}`}
                target="_blank"
                className="text-gray-700 hover:text-blue-500 hover:underline"
              >
                {user}
              </a>
            </div>
            <div className="mt-4">
              <a href={reference} target="_blank" className="underline">
                Negociar
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-7 mt-32">
          <img src={imgUrl} />
        </div>
      </div>
    </div>
  );
}
