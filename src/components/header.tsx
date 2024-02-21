import { ArrowLeft, Rabbit } from "lucide-react";
import Timer from "./timer";
import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <div>
      <h1
        className="flex items-center justify-center mt-6 font-bold tracking-tight text-white dark:text-gray-200"
        style={{ userSelect: "none" }}
      >
        <a
          href="https://dombui.com"
          className="flex items-center mr-4 lg:pointer-events-auto text-3xl"
        >
          <div>
            <ArrowLeft
              className="w-10 h-10 text-white"
              aria-label="Go back to dombui.com"
            />
          </div>
        </a>
        scrum
        <div className="flex items-center ml-4 lg:pointer-events-auto">
          <Rabbit
            className="w-10 h-10 text-white"
            aria-label="Fast as She Goes"
          />
        </div>
      </h1>
      <Marquee
        className="news-ticker-container"
        pauseOnHover={true}
        speed={35}
        autoFill={true}
        style={{ userSelect: "none" }}
      >
        <span className="span-marquee">
          this is product management @ INSOMNYC
        </span>
        <span className="span-marquee">this is agile @ INSOMNYC</span>
        <span className="span-marquee">this is design @ INSOMNYC</span>
        <span className="span-marquee">
          this is what we're building @ INSOMNYC
        </span>

        <span className="span-marquee">
          this is what we're doing @ INSOMNYC
        </span>
        <span className="span-marquee">the royal we @ INSOMNYC</span>
      </Marquee>
      <div className="flex items-center justify-center mb-1">
        <Timer />
      </div>
    </div>
  );
}
