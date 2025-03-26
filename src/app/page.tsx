import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="w-full px-2.5 py-2.5 gap-y-28 flex flex-col z-0">
      <div className="bg-[url('/assets/images/main-bg.svg')] w-full h-[709px] rounded-[20px] bg-cover bg-center px-12 flex flex-col py-12 flex-grow">
        <div className="mt-auto md:flex justify-between items-end w-full">
          <div className="text-white max-w-[805px]">
            <h1 className="md:text-[64px] md:leading-[150%] text-3xl font-semibold">
              Discover Indonesia&apos;s Best Travel Spots
            </h1>
            <p className="font-medium text-xl md:mt-0 mt-4">
              Find top rated destinations and real reviews from fellow travelers
            </p>
          </div>
          <Button className="rounded-[35px] bg-[#D9D9D9] w-[149px] text-black h-[61px] md:mt-0 mt-10 transition-all duration-300 ease-in hover:border-[#D9D9D9] hover:border-2 hover:text-white hover:bg-transparent">
            Explore Now
          </Button>
        </div>
      </div>
      <div className="px-9 flex flex-col gap-y-9">
        <h1 className="md:text-5xl text-2xl md:font-light w-full max-w-[655px]">
          Where travelers are heading this month
        </h1>
        <div className="md:flex-row flex flex-col w-full md:gap-x-5 gap-y-7">
          <div className="grid relative md:w-[60%] w-full h-[329px] rounded-[20px] items-center gap-[10px] bg-[url('/assets/images/pulau-seribu.svg')] bg-cover bg-center">
            <div className="absolute bottom-0 text-white px-9 py-6 bg-black/15 w-full rounded-b-2xl">
              <h1 className="font-bold md:text-[40px] text-3xl">
                Kepulauan Seribu
              </h1>
              <div className="flex gap-x-3 items-center">
                <Icon icon="lets-icons:flag" width="28" height="28" />
                <p className="md:text-xl text-base">
                  Kepulauan Seribu, Indonesia
                </p>
              </div>
              <div className="flex gap-x-3 items-center">
                <Icon
                  icon="material-symbols:star-rounded"
                  width="28"
                  height="28"
                  className="text-yellow-400"
                />
                <p>4.5/5</p>
              </div>
            </div>
          </div>
          <div className="grid relative md:w-[40%] w-full h-[329px] rounded-[20px] items-center gap-[10px] bg-[url('/assets/images/main-bg.svg')] bg-cover bg-center">
            <div className="absolute bottom-0 text-white px-9 py-6 bg-black/15 w-full rounded-b-2xl">
              <h1 className="font-bold md:text-[40px] text-3xl">
                Kepulauan Seribu
              </h1>
              <div className="flex gap-x-3 items-center">
                <Icon icon="lets-icons:flag" width="28" height="28" />
                <p className="md:text-xl text-base">
                  Kepulauan Seribu, Indonesia
                </p>
              </div>
              <div className="flex gap-x-3 items-center">
                <Icon
                  icon="material-symbols:star-rounded"
                  width="28"
                  height="28"
                  className="text-yellow-400"
                />
                <p>4.5/5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="grid relative w-full h-[329px] rounded-[20px] items-center gap-[10px] bg-[url('/assets/images/bromo.svg')] bg-cover bg-center">
            <div className="absolute bottom-0 text-white px-9 py-6 md:bg-transparent bg-black/15 w-full rounded-b-2xl">
              <h1 className="font-bold md:text-[40px] text-3xl">
                Kepulauan Seribu
              </h1>
              <div className="flex gap-x-3 items-center">
                <Icon icon="lets-icons:flag" width="28" height="28" />
                <p className="md:text-xl text-base">
                  Kepulauan Seribu, Indonesia
                </p>
              </div>
              <div className="flex gap-x-3 items-center">
                <Icon
                  icon="material-symbols:star-rounded"
                  width="28"
                  height="28"
                  className="text-yellow-400"
                />
                <p>4.5/5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-row flex flex-col w-full md:gap-x-5 gap-y-7">
          <div className="grid relative md:w-[40%] w-full h-[329px] rounded-[20px] items-center gap-[10px] bg-[url('/assets/images/kuta.svg')] bg-cover bg-center">
            <div className="absolute bottom-0 text-white px-9 py-6 md:bg-transparent bg-black/15 w-full rounded-b-2xl">
              <h1 className="font-bold md:text-[40px] text-3xl">
                Kepulauan Seribu
              </h1>
              <div className="flex gap-x-3 items-center">
                <Icon icon="lets-icons:flag" width="28" height="28" />
                <p className="md:text-xl text-base">
                  Kepulauan Seribu, Indonesia
                </p>
              </div>
              <div className="flex gap-x-3 items-center">
                <Icon
                  icon="material-symbols:star-rounded"
                  width="28"
                  height="28"
                  className="text-yellow-400"
                />
                <p>4.5/5</p>
              </div>
            </div>
          </div>
          <div className="grid relative md:w-[60%] w-full h-[329px] rounded-[20px] items-center gap-[10px] bg-[url('/assets/images/gatau.svg')] bg-cover bg-center">
            <div className="absolute bottom-0 text-white px-9 py-6 bg-black/15 w-full rounded-b-2xl">
              <h1 className="font-bold md:text-[40px] text-3xl">
                Kepulauan Seribu
              </h1>
              <div className="flex gap-x-3 items-center">
                <Icon icon="lets-icons:flag" width="28" height="28" />
                <p className="md:text-xl text-base">
                  Kepulauan Seribu, Indonesia
                </p>
              </div>
              <div className="flex gap-x-3 items-center">
                <Icon
                  icon="material-symbols:star-rounded"
                  width="28"
                  height="28"
                  className="text-yellow-400"
                />
                <p>4.5/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/images/swim.svg')] w-full bg-cover bg-center py-[180px] rounded-[20px] flex flex-col justify-center items-center text-white">
        <h1 className="font-semibold text-[64px] w-full max-w-[524px] text-center">
          Let&apos;s Explore Heaven Together
        </h1>
        <div className="w-full max-w-[579px] h-[69px] bg-white rounded-full mt-[60px] relative flex items-center px-2">
          <div className="w-16 h-16 bg-black rounded-full absolute right-2 flex justify-center items-center">
            <Icon icon="bitcoin-icons:search-outline" width="50" height="50" />
          </div>
        </div>
        <p className="font-medium text-xl mt-8">Popular: Jakarta Bali Raja Ampat</p>
      </div>
    </div>
  );
}
