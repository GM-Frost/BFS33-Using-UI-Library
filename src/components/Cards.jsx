const Cards = () => {
  const products = [
    {
      id: 1,
      name: "Hippo Tee",
      href: "#",
      imageSrc:
        "https://www.boredpanda.com/blog/wp-content/uploads/2016/09/animals-dressed-like-humans-zoo-porraits-yago-partal-100-57d65dad6f9d8__880.jpg",
      imageAlt: "Front of Hippos's Yellow Tee",
      price: "$35",
      color: "Yellow",
    },
    {
      id: 2,
      name: "Panda Coat",
      href: "#",
      imageSrc:
        "https://www.toxel.com/wp-content/uploads/2013/03/zooportraits06.jpg",
      imageAlt: "Front of Panda Gentelmen ",
      price: "$35",
      color: "Grey",
    },
    {
      id: 3,
      name: "Mr. Monkey",
      href: "#",
      imageSrc:
        "https://img.huffingtonpost.com/asset/5bb1372a240000500096b418.jpeg?ops=scalefit_960_noupscale",
      imageAlt: "Front of Monkey Gentlemen Style ",
      price: "$11",
      color: "Grey",
    },
    {
      id: 4,
      name: "Mr. Foxy",
      href: "#",
      imageSrc:
        "https://as1.ftcdn.net/v2/jpg/05/77/14/26/1000_F_577142681_UBVyzVlr6vyo3a4tlNlBZn3Q6Wl0UYzR.jpg",
      imageAlt: "Front of Foxy Gentlemen Style ",
      price: "$22",
      color: "Black",
    },
    {
      id: 5,
      name: "Mrs. Bambi",
      href: "#",
      imageSrc:
        "https://www.toxel.com/wp-content/uploads/2013/03/zooportraits16.jpg",
      imageAlt: "Pristine Bambi Clothing",
      price: "$88",
      color: "Red",
    },
    {
      id: 6,
      name: "Mr. King",
      href: "#",
      imageSrc:
        "https://www.boredpanda.com/blog/wp-content/uploads/2016/09/animals-dressed-like-humans-zoo-porraits-yago-partal-146-57d65e0f2875d__880.jpg",
      imageAlt: "His Highness King",
      price: "$105",
      color: "Red",
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
