interface INikkeCard {
  id: string;
  name: string;
  rarity: string;
  burst: string;
  code: string;
  weapon: string;
  image: string;
}

const NikkeCard = ({
  id,
  name,
  rarity,
  burst,
  code,
  weapon,
  image,
}: INikkeCard) => {
  return (
    <div
      key={id}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
    >
      <div className="aspect-w-3 aspect-h-4 bg-gray-100 group-hover:opacity-75 sm:aspect-none sm:h-96">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </a>
        </h3>
        <p className="text-sm text-gray-500">{rarity}</p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{burst}</p>
          <p className="text-base font-medium text-gray-900">{code}</p>
          <p className="text-base font-medium text-gray-900">{weapon}</p>
        </div>
      </div>
    </div>
  );
};

export { NikkeCard };
