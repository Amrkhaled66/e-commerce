const ActionButton = ({ icon, label }) => (
  <button className="border-stroke text-subtitle flex items-center gap-x-1 rounded-2xl border px-2 py-2 text-xs sm:px-4 sm:text-base">
    {icon}
    {label}
  </button>
);

export default ActionButton;
