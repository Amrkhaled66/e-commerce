import faq from "src/assets/faq.png";

import Content from "../../components/FAQ/ContentSection";
export default function FAQ() {
  return (
    <div className="bg-mainSectionColor">
      <div className=" flex  container mx-auto gap-x-4 !py-(--section-padding) ">
        <div className="w-[30%]" >
          <img className="w-full" src={faq} alt="faq" />
        </div>
        <Content />
      </div>
    </div>
  );
}
