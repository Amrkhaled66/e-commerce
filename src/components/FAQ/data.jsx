import { IoWalletOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const iconClassName = "w-[24px] h-[20px]";
const AccordionData = [
  {
    id: 1,
    icon: <IoWalletOutline className={iconClassName} />,
    question: "ما هي طريقة الدفع التي تقبلونها؟",
    answer:
      "نقبل بطاقات الائتمان والخصم الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، وباي بال، والدفع عند الاستلام في مواقع مختارة. قد تتوفر خيارات دفع إضافية حسب منطقت",
  },
  {
    id: 2,
    icon: <LiaShippingFastSolid className={iconClassName} />,
    question: "كم من الوقت يستغرق التوصيل؟",
    answer:
      "نقبل بطاقات الائتمان والخصم الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، وباي بال، والدفع عند الاستلام في مواقع مختارة. قد تتوفر خيارات دفع إضافية حسب منطقت",
  },
  {
    id: 3,
    icon: <MdOutlineShoppingCart className={iconClassName} />,
    question: "هل يمكنني ارجاع المنتج اذا لم اكن راضيا؟",
    answer:
      "نقبل بطاقات الائتمان والخصم الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، وباي بال، والدفع عند الاستلام في مواقع مختارة. قد تتوفر خيارات دفع إضافية حسب منطقت",
  },
  {
    id: 4,
    icon: <RiDiscountPercentLine className={iconClassName} />,
    question: "هل تقدمون خصومات علي الطلبات بالجملة؟",
    answer:
      "نقبل بطاقات الائتمان والخصم الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، وباي بال، والدفع عند الاستلام في مواقع مختارة. قد تتوفر خيارات دفع إضافية حسب منطقت",
  },
  {
    id: 5,
    icon: <IoShieldCheckmarkOutline className={iconClassName} />,
    question: "هل معلوماتي الشخصية أمنه عند التسوق علي موقعكم؟",
    answer:
      "نقبل بطاقات الائتمان والخصم الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، وباي بال، والدفع عند الاستلام في مواقع مختارة. قد تتوفر خيارات دفع إضافية حسب منطقت",
  },
];

export default AccordionData;
