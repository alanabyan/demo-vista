import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full px-2.5 py-2.5">
      <div className="bg-[url('/assets/images/main-bg.svg')] w-full h-[709px] rounded-[20px] bg-cover bg-center px-12 flex flex-col py-12 flex-grow">
        <div className="mt-auto md:flex justify-between items-end w-full">
          <div className="text-white max-w-[805px]">
            <h1 className="text-[64px] sm:text-3xl font-semibold">
              Discover Indonesia&apos;s Best Travel Spots
            </h1>
            <p className="font-medium text-xl md:mt-0 mt-4">
              Find top rated destinations and real reviews from fellow travelers
            </p>
          </div>
          <Button className="rounded-[35px] bg-[#D9D9D9] w-[149px] text-black h-[61px] md:mt-0 mt-10">
            Explore Now
          </Button>
        </div>
      </div>
    </div>
  );
}
