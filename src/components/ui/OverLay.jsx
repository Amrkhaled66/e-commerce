export default function Overlay({ ...props }) {
  return (
    <div
      {...props}
      className="fixed top-0 right-0 z-[10000] h-screen w-screen bg-black opacity-50"
    ></div>
  );
}
