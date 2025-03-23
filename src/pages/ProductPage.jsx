import ProductPreview from "src/sections/ProductPage/productPreview";
import ProductDetails from "src/sections/ProductPage/productDetails";
import ProductReviews from "src/sections/ProductPage/ProductReviews";

import imag1 from "src/assets/productPage/1.jpeg";
import imag2 from "src/assets/productPage/2.jpeg";

import gotoPageTop from "src/utils/gotoPageTop.js";

const product = {
  images: [imag1, imag1, imag2, imag2, imag2],
  seller: "أبل",
  title: "آيفون 15 بسعة 128 جيجابايت، أزرق، 5G مع تطبيق FaceTime - إصدار عالمي",

  stars: 4,
  starsCount: [
    { value: 1, count: 6 },
    { value: 2, count: 1 },
    { value: 3, count: 3 },
    { value: 4, count: 8 },
    { value: 5, count: 81 },
  ],
  reviews: [
    {
      customerName: "Ayman",
      head: "الفون لا يدعم الشريحتين",
      date: " 1 يناير 2025",
      content:
        "الفون لا يدعم شريحتين نهائيا كما مكتوب من وصف البائع الغير امين فالمكسب القائم علي عدم الأمانة والمصداقية سقوط تجاري ومهني",
    },
    {
      customerName: "Ayman",
      head: "الفون لا يدعم الشريحتين",
      date: " 1 يناير 2025",
      content:
        "الفون لا يدعم شريحتين نهائيا كما مكتوب من وصف البائع الغير امين فالمكسب القائم علي عدم الأمانة والمصداقية سقوط تجاري ومهني",
    },
    {
      customerName: "Ayman",
      head: "الفون لا يدعم الشريحتين",
      date: " 1 يناير 2025",
      content:
        "الفون لا يدعم شريحتين نهائيا كما مكتوب من وصف البائع الغير امين فالمكسب القائم علي عدم الأمانة والمصداقية سقوط تجاري ومهني",
    },
  ],
  price: 10000,
  modelName: ["ايفون 15 بلس", "ايفون 15"],
  storage: [128, 256, 512],
  version: ["نسخه عالمية", "نسخه الشرق الاوسط", "اصدار شريحة ثنائية"],
  mainPros: [
    "شريحة A16 Bionic مع وحدة معالجة رسومية خماسية النواة.",
    "شاشة Super Retina XDR مقاس 6.1 بوصة.",
    "كاميرا رئيسية جديدة كليًا بدقة 48 ميجابكسل مع نظام كاميرا مزدوجة متطور.",
  ],
  details: [
    {
      type: "نوع الشحن",
      title: "النوع ج",
    },
    {
      type: "نوع الشحن",
      title: "النوع ج",
    },
    {
      type: "نوع الشحن",
      title: "النوع ج",
    },
    {
      type: "نوع الشحن",
      title: "النوع ج",
    },
    {
      type: "نوع الشحن",
      title: "النوع ج",
    },
    {
      type: "نوع الشحن",
      title: "النوع ج",
    },
    {
      type: "نوع الشحن",
      title: "النوع ج",
    },
    {
      type: "نوع الشحن",
      title: "النوع ج",
    },
    {
      type: "نوع الشحن",
      title: "النوع ج",
    },
  ],
  overView:
    "يتميز هاتف iPhone 15 بشاشة بزوايا مستديرة تُكمل تصميمه المنحني الرائع، وتتألق الجزيرة الديناميكية بجمالها الأخّاذ. تدعم الكاميرا الرئيسية الجديدة كليًا بدقة 48 ميجابكسل صورًا فائقة الدقة وتقريبًا مضاعفًا.",
};

export default function ProductPage() {
  gotoPageTop();
  return (
    <div>
      <div className="font-cairo mx-auto !pt-(--navbar-height-mobile) lg:!pt-(--navbar-height)">
        <ProductPreview product={product} />
        <ProductDetails
          mainPros={product.mainPros}
          details={product.details}
          overView={product.overView}
        />
        <ProductReviews reviews={product.reviews} stars={product.stars} starsCount={product.starsCount} />
      </div>
    </div>
  );
}
