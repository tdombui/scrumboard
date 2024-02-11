import Bg from "../../../ls/src/assets/bg/bg.png";

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-10] overflow-hidden">
      <img
        src={Bg}
        alt="Background"
        className="object-cover w-full h-full"
        style={{ userSelect: "none" }}
      />
    </div>
  );
}
