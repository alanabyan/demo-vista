import Image from "next/image";
import { images } from "../../../utils/constants/images";

export default function QuoteView() {
  return (
    <div className="w-full px-[60px] py-[35px] flex bg-[#F4F4F4] items-center justify-center mt-[103px]">
      <h1 className="sm:text-5xl text-3xl font-normal leading-snug text-center">
        Travel isn&apos;t about souvenirs or photos{" "}
        <span className="inline-flex items-center">
          <Image
            src={images.Quote1}
            width={100}
            height={100}
            alt="senja"
            className="sm:w-[113px] sm:h-[50px] w-[51.5px] h-[25px] rounded-full object-cover inline-block relative sm:top-3 top-1"
          />
        </span>{" "}
        it&apos;s about the moments{" "}
        <span className="inline-flex items-center">
          <Image
            src={images.Quote2}
            width={100}
            height={100}
            alt="moment"
            className="sm:w-[113px] sm:h-[50px] w-[51.5px] h-[25px] rounded-full object-cover inline-block relative sm:top-3 top-1"
          />
        </span>{" "}
        that stay with you long after the trip ends. Collect stories,
        friendships, and memories you can carry forever.
      </h1>
    </div>
  );
}
