import ProductImg from "src/components/productPage/ProductPreview/ProductImg";
import ProductInfo from "src/components/ProductPage/ProductPreview/ProductInfo";
import CtaSection from "src/components/ProductPage/ProductPreview/CtaSection";
export default function productPreview({ product }) {
  return (
    <div className="lg:bg-mainSectionColor !py-(--section-padding)">
      <div className="container flex flex-col items-start justify-between gap-y-9 lg:flex-row">
        <div className="space-y-2 lg:hidden">
          <p className="font-[600]">{product.seller}</p>
          <p className="text-xl font-[600]">{product.title}</p>
        </div>
        <ProductImg images={product.images} />
        <ProductInfo product={product} />
        <CtaSection product={product} />
      </div>
    </div>
  );
}
