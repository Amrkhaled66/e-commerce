import ProductCard from "src/components/ui/ProductCard";

const ProductList = ({ products }) => {
  return (
    <div key={products} className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
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
        />
      ))}
    </div>
  );
};

export default ProductList;
