export default function Element({ img, title }) {
  return (
    <div className=" w-fit mx-auto cursor-pointer space-y-2 ">
      <img
        className=" border-2  border-stroke w-[126px] h-[126px] rounded-2xl  object-cover "
        src={img}
        alt=""
      />
      <p className="font-cairo text-center font-[700] text-sm  ">{title}</p>
    </div>
  );
}
