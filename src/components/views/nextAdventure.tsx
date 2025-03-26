import Image from "next/image";
import { images } from "../../../utils/constants/images";

export default function NextAdventureView() {
  const adventures = [
    {
      title: "Mountain, Indonesia",
      description: "Destinasi Hiking Terbaik di Indonesia",
      image: images.Jogja,
      tags: ["Mount", "Destination"],
    },
    {
      title: "Beach, Bali",
      description: "Nikmati keindahan pantai Bali yang eksotis",
      image: images.Bali,
      tags: ["Beach", "Destination"],
    },
    {
      title: "Forest, Borneo",
      description: "Destinasi Kebudayaan Terbaik di Indonesia",
      image: images.Riau,
      tags: ["Culture", "Destination"],
    },
  ];

  return (
    <div className="w-full flex flex-col text-center items-center px-9">
      <h1 className="text-5xl font-normal">
        <span className="font-semibold">W</span>hat&apos;s{" "}
        <span className="font-semibold">Y</span>our{" "}
        <span className="font-semibold">N</span>ext{" "}
        <span className="font-semibold">A</span>dventure?
      </h1>
      <p className="text-3xl font-light mt-3">
        Pick a category and start exploring
      </p>

      <div className="md:flex-row flex flex-col mt-8 w-full md:justify-between">
        {adventures.map((adventure, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:items-start rounded-lg w-full"
          >
            <Image
              src={adventure.image}
              width={100}
              height={100}
              alt={adventure.title}
              className="w-full max-w-[355px] sm::max-w-[430px] h-[275px] sm:h-[355px] rounded-[10px]"
            />
            <h2 className="text-3xl font-semibold">{adventure.title}</h2>
            <p className="text-xl">{adventure.description}</p>
            <div className="mt-3 flex gap-2">
              {adventure.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#D9D9D9] px-6 py-2 font-semibold text-xl rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
