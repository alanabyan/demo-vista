"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import TourismCategory from "../layouts/Tourism";

export default function CategoryView() {
  const [activeCategory, setActiveCategory] = useState("Tourism");

  const categories = ["Tourism", "Best", "Travel"];

  return (
    <div className="w-full flex flex-col px-9">
      <div className="flex gap-x-3">
        {categories.map((category) => (
          <Button
            key={category}
            className={`transition-all duration-300 bg-[#E1E1E180]/50 text-black font-medium text-lg rounded-full border-black/20 border hover:bg-transparent ${
              activeCategory === category
                ? "w-full max-w-[154px]"
                : "w-full max-w-[125px]"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="mt-6">
        {activeCategory === "Tourism" && (
          <TourismCategory />
        )}
        {activeCategory === "Best" && (
          <p>Best category content displayed here.</p>
        )}
        {activeCategory === "Travel" && (
          <p>Travel category content displayed here.</p>
        )}
      </div>
    </div>
  );
}
