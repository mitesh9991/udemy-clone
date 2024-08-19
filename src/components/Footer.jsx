import { RiGlobalLine } from "@remixicon/react";
import Image from "next/image";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-[#2d2f31] text-white py-6 mt-auto">
      <div className="mx-auto px-4 md:px-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between content-center mb-3">
          <div className="py-2 mb-4 md:mb-0">
            <p className="text-lg md:text-xl font-bold">
              Top companies choose Udemy Business to build in-demand career
              skills.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end mb-4">
            <img
              src="/logo-footer/nasdaq-light.svg"
              alt="Nasdaq"
              className="mx-2 w-24 h-12 md:w-auto"
            />
            <img
              src="/logo-footer/volkswagen-light.svg"
              alt="Volkswagen"
              className="mx-2 w-24  h-12 md:w-auto"
            />
            <img
              src="/logo-footer/eventbrite-light.svg"
              alt="Eventbrite"
              className="mx-2 w-24 h-12 md:w-auto"
            />
            <img
              src="/logo-footer/netapp-light.svg"
              alt="NetApp"
              className="mx-2 w-24 h-12 md:w-auto"
            />
            <img
              src="/logo-footer/box-light.svg"
              alt="Box"
              className="mx-2 w-24 h-12 md:w-auto"
            />
          </div>
        </div>

        <hr className="w-full border-gray-600 mb-4" />

        {/* Links Section */}
        <div className="flex  flex-col-reverse md:flex-row justify-between">
          <div className="flex flex-col space-y-2 mb-4 md:mb-0">
            <a href="" className="hover:underline">
              About us
            </a>
            <a href="" className="hover:underline">
              Contact us
            </a>
            <a href="" className="hover:underline">
              Careers
            </a>
            <a href="" className="hover:underline">
              Investor
            </a>
            <a href="" className="hover:underline">
              Terms
            </a>
            <a href="" className="hover:underline">
              Privacy policy
            </a>
            <a href="" className="hover:underline">
              Cookies settings
            </a>
            <a href="" className="hover:underline">
              Blog
            </a>
            <a href="" className="hover:underline">
              Sitemap
            </a>
            <a href="" className="hover:underline">
              Get the app
            </a>
            <a href="" className="hover:underline">
              Accessibility statement
            </a>
          </div>
          <div className="flex py-8 md:py-0 md:justify-end md:h-10">
            <button className="flex items-center space-x-2 py-2 px-4 border border-white font-bold hover:bg-white hover:text-[#2d2f31] transition duration-200">
              <RiGlobalLine size={21} />
              <span>English</span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mt-14 mb-4">
          <Image
            width={90}
            height={44}
            src="/logo-footer.svg"
            alt="Udemy Logo"
          />
          <p className="text-sm mt-2 md:mt-0">© 2024 Udemy, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
