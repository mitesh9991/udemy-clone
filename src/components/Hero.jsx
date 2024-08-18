import { RiDownload2Line } from "@remixicon/react";
import { cn } from "./utils/cn";
import Crousal from "./utils/Crousal";
import TabNavigation from "./utils/NavigationTab";

// components/Hero.js
export default function Hero() {
  return (
    <section className="relative  text-black  container">
      <Crousal />
      <div className="py-12 px-8 space-y-12">
        <div className="">
          <h1 className="text-4xl font-bold mb-4">
            All the skills you need in one place
          </h1>
          <h2 className="text-xl text-gray-500">
            From critical skills to technical topics, Udemy supports your
            professional development.
          </h2>
        </div>

        <div className="">
          <TabNavigation />
        </div>
      </div>
    </section>
  );
}
