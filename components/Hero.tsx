import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mx-auto max-w-xs md:max-w-3xl py-6 sm:py-11 md:py-[60px] flex flex-col items-center">
      <h1 className="font-spaceGrotesk font-bold text-center text-[#D9D9D9] text-2xl sm:text-7xl  mb-8 sm:mb-10">
        Your Portal for Defi in the Polkadot and Kusama Paraverse
      </h1>
      <h3 className="text-center text-md sm:text-xl font-spaceGrotesk max-w-lg font-medium  mb-8 sm:mb-10">
        yieldbay is a team of passionate people building tools for the no noise
        web3 revolution.
      </h3>
      <button className="rounded-xl text-base font-spaceGrotesk font-bold text-baseBlueDark py-2 px-[18px] sm:py-3 sm:px-6 bg-white">
        Launch App
      </button>
      <div className="flex flex-row gap-2">
        <Link href="github.com/yield-bay">
          <Image src="/vercel.svg" alt="github logo" width="16" height="16" />
        </Link>
        <Link href="https://twitter.com/yield_bay?s=20&t=iLuzIRccJ6jTGm8Fp9qSoQ">
          <Image src="/vercel.svg" alt="twitter logo" width="16" height="16" />
        </Link>
        <Link href="github.com/yield-bay">
          <Image src="/vercel.svg" alt="discord logo" width="16" height="16" />
        </Link>
      </div>
    </div>
  );
}