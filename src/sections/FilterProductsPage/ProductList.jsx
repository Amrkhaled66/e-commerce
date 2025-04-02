import ProductCard from "src/components/ui/ProductCard";

const ProductList = ({ products }) => {
  return (
    <div
      key={products}
      className=" grid-cols-2 grid  gap-y-4 sm:grid-cols-3 md:gap-6 md:gap-x-6 lg:grid-cols-4"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          img={product.img}
          title={product.title}
          stars={product.starts}
          sellingCount={product.sellingCount}
          price={product.price}
          discountedPrice={product.discountedPrice}
          ProductImages={product.ProductImages}
          isFilterCard={true}
        />
      ))}
    </div>
  );
};

export default ProductList;
