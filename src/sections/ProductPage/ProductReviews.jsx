import Stars from "src/components/ui/Stars";
import { CiUser } from "react-icons/ci";

// || Left Part
const ReviewsCount = ({ stars, reviews }) => {
  return (
    <div className="space-y-3">
      <h5 className="text-2xl font-[700]">التقييم & المراجعات</h5>
      <p className="text-4xl font-[700]">{stars}</p>
      <Stars length={stars} />
      <p> بناء على {reviews} تقييم </p>
    </div>
  );
};

const RatingBreakdown = ({ starsCount }) => {
  const totalRatings = starsCount.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="w-full max-w-md space-y-3">
      {starsCount
        .sort((a, b) => b.value - a.value)
        .map(({ value, count }) => {
          const percentage = totalRatings
            ? Math.round((count / totalRatings) * 100)
            : 0;
          const barColor =
            value === 5
              ? "bg-main-color"
              : value === 4
                ? "bg-[#557117]"
                : value === 3
                  ? "bg-[#EFBF00]"
                  : value === 2
                    ? "bg-[#F36C32]"
                    : "bg-red-500";

          return (
            <div key={value} className="flex items-center space-x-2">
              <div className="flex gap-x-2">
                <span> {value}</span>
                <span className="star"> </span>
              </div>
              <div className="relative h-2 w-full rounded bg-gray-300">
                <div
                  className={`absolute top-0 right-0 h-full ${barColor} rounded`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="w-10 text-sm font-semibold">{percentage}%</span>
            </div>
          );
        })}
    </div>
  );
};

// || Right Part
const ReviewElement = ({ customerName, head, date, content }) => {
  return (
    <li className="space-y-3 lg:w-[75%]">
      <div className="flex items-center gap-x-3">
        <span className="bg-main-color-100 rounded-full p-2 text-xl text-black">
          <CiUser />
        </span>
        <span>{customerName}</span>
      </div>
      <div className="flex items-center gap-x-2">
        <span>
          <Stars length={4} />
        </span>
        <span className="font-[700]">{head}</span>
      </div>
      <p className="text-subtitle">تم كتابة هذا التقييم في {date}</p>
      <p className="text-sm lg:text-base leading-7">{content}</p>
      <div className="space-x-4">
        <button className="w-fit cursor-pointer rounded-[50px] border border-black px-9 py-2.5">
          مفيد
        </button>
        <button className="border-stroke text-subtitle border-r py-3 pr-3">
          اٍبلاغ
        </button>
      </div>
    </li>
  );
};
export default function ProductReviews({ reviews, stars, starsCount }) {
  return (
    <div className="bg-mainSectionColor">
      <div className="container mx-auto flex flex-col gap-6 !py-[var(--section-padding)] lg:flex-row">
        <div className="lg:border-stroke flex flex-col space-y-5 rounded-2xl p-6 lg:w-1/3 lg:border lg:bg-white">
          <ReviewsCount stars={stars} reviews={reviews.length} />
          <RatingBreakdown starsCount={starsCount} />
          <div className="border-stroke w-full space-y-3 border-t pt-6">
            <h5 className="text-2xl font-bold">قم بكتابة مراجعة لهذا المنتج</h5>
            <p className="text-subtitle text-sm">شارك ارائك مع الآخرين</p>
            <button className="w-full cursor-pointer rounded-[50px] border border-black py-2.5">
              اكتب مراجعة
            </button>
          </div>
        </div>
        <div className="lg:border-stroke flex flex-1 flex-col gap-y-6 rounded-2xl p-5 lg:border lg:bg-white">
          <h5 className="text-2xl font-[700]"> افضل المراجعات </h5>
          <ul className="space-y-9">
            {reviews.map((review) => (
              <ReviewElement
                key={review.id}
                customerName={review.customerName}
                head={review.head}
                date={review.date}
                content={review.content}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
