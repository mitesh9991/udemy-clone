import { RiGlobalLine } from "@remixicon/react";
import Image from "next/image";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-[#2d2f31] text-white py-6 mt-auto">
      <div className=" mx-auto  ">
        <div className="flex justify-between content-center mb-3 px-12">
          <div className=" flex py-2">
            <p className="text-xl  font-bold">
              Top companies choose Udemy Business to build in-demand career
              skills.
            </p>
          </div>
          <div className="flex  mb-4">
            <img
              src="/logo-footer/nasdaq-light.svg"
              alt="Nasdaq"
              className="mx-2"
            />
            <img
              src="/logo-footer/volkswagen-light.svg"
              alt="Volkswagen"
              className="mx-2"
            />
            <img
              src="/logo-footer/eventbrite-light.svg"
              alt="Eventbrite"
              className="mx-2"
            />
            <img
              src="/logo-footer/netapp-light.svg"
              alt="NetApp"
              className="mx-2"
            />
            <img src="/logo-footer/box-light.svg" alt="Box" className="mx-2" />
          </div>
        </div>
        <hr className="w-full border-gray-600 mb-4" />
        <div className="px-12">
          <div className="flex justify-between py-4">
            <div className="flex flex-col space-y-1">
              <a href="">About us</a>
              <a href="">Contact us</a>
              <a href="">Careers</a>
              <a href="">Inverstor</a>
              <a href="">Terms</a>
              <a href="">Privacy policy</a>
              <a href="">Cookies settings</a>
              <a href="">Blog</a>
              <a href="">Sitemap</a>
              <a href="">Get the app</a>
              <a href="">Accesessibility statement</a>
            </div>
            <div>
              <button className="flex items-center space-x-2 py-2 px-4 border border-white font-bold hover:bg-white hover:text-[#2d2f31] transition duration-200">
                <RiGlobalLine size={21} />
                <span>English</span>
              </button>
            </div>
          </div>

          <div className="flex justify-between  mt-14 mb-4">
            <Image width={90} height={44} src="/logo-footer.svg" alt="" />
            <p className="text-sm">© 2024 Udemy, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
