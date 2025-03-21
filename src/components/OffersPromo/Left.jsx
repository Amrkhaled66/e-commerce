import { RiDiscountPercentLine } from "react-icons/ri";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LiaShippingFastSolid } from "react-icons/lia";

const IconElement = ({ color, title, icon }) => {
  return (
    <div className="text-center space-y-2 ">
      <div
        style={{ backgroundColor: color }}
        className={` mx-auto text-white rounded-full  w-[100px] h-[100px] flex items-center justify-center  `}
      >
        {icon}
      </div>
      <p className=" font-[600] text-lg ">{title}</p>
    </div>
  );
};

export default function Left() {
  return (
    <div className="flex   font-cairo gap-y-[24px] flex-col justify-center  items-center">
      <div className="w-full space-y-7  text-center">
        <h3 className="font-[700] text-[34px] ">
          خصم 25% مع عروض لا نهاية لها
        </h3>
        <p className="text-xl  font-[500] leading-relaxed text-subtitle w-[90%] mx-auto ">
          اشتري اللي نفسك فية من عالم العروض واستمتع بعرض 25% خصم اضافي علي
          الاكل والترفيه واستمتع اكثر.
        </p>
      </div>
      <div className="flex justify-between w-full ">
        <IconElement
          color="#FF4646"
          icon={<RiDiscountPercentLine className="  w-[40px] h-[30px] " />}
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
          icon={<LiaShippingFastSolid className="w-[40px] h-[30px]" />}
          title="شحن سريع"
        />
      </div>
    </div>
  );
}
