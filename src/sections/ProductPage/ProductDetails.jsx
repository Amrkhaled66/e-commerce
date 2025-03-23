import { useState } from "react";

// Component for Main Features
function MainFeatures({ mainPros }) {
  return (
    <div className="space-y-3">
      <h6 className="text-lg font-[700]">الميزات الأساسية</h6>
      <ul className="space-y-3">
        {mainPros.map((pro, index) => (
          <li
            className="text-subtitle flex items-center gap-x-2 text-sm lg:text-base"
            key={index}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#333333" />
            </svg>
            {pro}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component for Overview
function Overview({ overView }) {
  return (
    <div className="space-y-3">
      <h6 className="text-base font-[700] lg:text-lg">نظرة عامة</h6>
      <p className="text-subtitle text-sm lg:text-base">{overView}</p>
    </div>
  );
}

// Component for Specifications
function Specifications({ details, showMore, setShowMore }) {
  const displayedDetails = showMore ? details : details.slice(0, 4);

  return (
    <div className="relative space-y-3">
      <h6 className="text-lg font-[700]">المواصفات</h6>
      <div>
        {displayedDetails.map((detail, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-x-2 px-4 py-3 font-[600] odd:bg-[#F5FAEA] even:bg-white"
          >
            <span className="text-subtitle w-1/2">{detail.type}</span>
            <span className="w-1/2 text-black">{detail.title}</span>
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      {!showMore && details.length > 4 && (
        <div
          className="absolute bottom-0 left-0 h-20 w-full"
          style={{
            background:
              "linear-gradient(5deg, rgba(255, 255, 255, 0.80) 40.58%, rgba(255, 255, 255, 0.00) 170.09%)",
          }}
        />
      )}
    </div>
  );
}

// Main ProductDetails Component
export default function ProductDetails({ mainPros, details, overView }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-col !py-(--section-padding)">
        <div className="border-stroke border-b pb-5">
          <h5 className="text-2xl font-[700]">تفاصيل المنتج</h5>
        </div>

        <div className="flex flex-col justify-between gap-x-24 gap-y-6 pt-5 lg:flex-row">
          {/* Left Section */}
          <div className="flex flex-col gap-y-6 lg:w-1/2">
            <MainFeatures mainPros={mainPros} />
            <Overview overView={overView} />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <Specifications
              showMore={showMore}
              setShowMore={setShowMore}
              details={details}
            />
          </div>
        </div>

        {/* Show More / Show Less Button */}
        {details.length > 4 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className={`text-subtitle lg:text-main-color lg:hover:bg-main-color mt-8 cursor-pointer underline transition-all duration-300 lg:mx-auto lg:w-fit lg:rounded-[16px] lg:border-2 lg:px-5 lg:py-3 lg:font-bold lg:no-underline lg:hover:text-white`}
          >
            {showMore ? "عرض اقل" : "عرض المواصفات كاملة"}
          </button>
        )}
      </div>
    </div>
  );
}
