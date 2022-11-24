import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <div className="relative flex justify-center sm:justify-between w-full px-9 sm:px-11 lg:px-[120px] py-[42px] sm:py-12 z-10 font-bold text-base leading-6 sm:leading-8 text-white transition duration-200">
      <Link href="/">
        <div className="flex flex-col justify-center cursor-pointer">
          <span className="font-bold font-spaceGrotesk text-white text-lg sm:text-2xl leading-[23px] sm:leading-[30px]">
            yieldbay
          </span>
        </div>
      </Link>
      <div className="hidden sm:inline-flex items-center gap-x-4 sm:mr-2">
        <a
          href="https://list.yieldbay.io/?utm_campaign=landing+page&utm_source=yb-landing&utm_medium=textlink"
          target="_blank"
          rel="noreferrer"
        >
          <Button size="small">Launch App</Button>
        </a>
      </div>
    </div>
  );
}
