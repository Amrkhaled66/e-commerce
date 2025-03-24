import CartCard from "src/components/CartPage/CartInfo/CartCard";


const CartInfo = ({ cart }) => {
  return (
    <div className="border-stroke flex flex-col gap-y-7 rounded-2xl lg:border lg:bg-white lg:p-5">
      {cart?.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartInfo;
