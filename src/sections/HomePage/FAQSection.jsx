import faq from "src/assets/faq.png";

import Content from "src/components/HomePage/FAQ/ContentSection";
export default function FAQ() {
  return (
    <div className="bg-mainSectionColor">
      <div className=" items-start container mx-auto flex flex-col gap-x-4 !py-(--section-padding) lg:flex-row">
        <div className="lg:w-[30%] mx-auto">
          <img className="w-full  " src={faq} alt="faq" />
        </div>
        <Content />
      </div>
    </div>
  );
}
