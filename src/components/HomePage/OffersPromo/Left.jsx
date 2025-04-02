import { RiDiscountPercentLine } from "react-icons/ri";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LiaShippingFastSolid } from "react-icons/lia";

const IconElement = ({ color, title, icon }) => {
  return (
    <div className="space-y-2 text-center">
      <div
        style={{ backgroundColor: color }}
        className={`mx-auto flex  lg:h-[100px] w-[60px] h-[60px] lg:w-[100px] items-center justify-center rounded-full text-white`}
      >
        {icon}
      </div>
      <p className="  text-sm lg:text-lg font-[600]">{title}</p>
    </div>
  );
};

export default function Left() {
  return (
    <div className="font-cairo flex flex-col items-center justify-center gap-y-[24px]">
      <div className="w-full space-y-3 md:space-y-7 text-center">
        <h3 className="text-base font-[700] lg:text-[34px]">
          خصم 25% مع عروض لا نهاية لها
        </h3>
        <p className="text-sm lg:text-xl text-subtitle mx-auto sm:w-[50%] leading-7  lg:w-[90%]  font-[500]">
          اشتري اللي نفسك فية من عالم العروض واستمتع بعرض 25% خصم اضافي علي
          الاكل والترفيه واستمتع اكثر.
        </p>
      </div>
      <div className="flex w-full sm:w-[80%] lg:w-full justify-between">
        <IconElement
          color="#FF4646"
          icon={<RiDiscountPercentLine className="h-[30px] w-[40px]" />}
          title="خصم اضافي"
        />
        <IconElement
          color="#6D921E"
          icon={
            <Icon
              icon="emojione-monotone:face-savouring-delicious-food"
              width="40"
              height="30"
            />
          }
          title="وصول مبكر للنكهات"
        />
        <IconElement
          color="#FACC15"
          icon={<LiaShippingFastSolid className="h-[30px] w-[40px]" />}
          title="شحن سريع"
        />
      </div>
    </div>
  );
}
