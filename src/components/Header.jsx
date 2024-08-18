// components/Header.js
import Link from "next/link";
import {
  RiGlobalLine,
  RiHeartFill,
  RiMoonFill,
  RiShoppingCartLine,
} from "@remixicon/react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky z-10 bg-white top-0 text-black py-3 px-6 shadow-xl ">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo and Search Section */}
        <div className="flex items-center space-x-4 flex-grow pr-5">
          <Image src="/logo.svg" alt="Udemy logo" width={90} height={90} />
          <h3 className="text-lg px-4">Categories</h3>
          <form className="relative flex items-center flex-grow">
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-900 rounded-full focus:outline-none dark:placeholder-gray-600"
              placeholder="Search for everything"
              required
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </form>
        </div>

        {/* Navigation Section */}
        <nav className="flex items-center space-x-4">
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/" className="hover:text-slate-950 text-[16px]">
                Plans & Pricing
              </Link>
            </li>
            <li>
              <Link href="/skill" className="hover:text-slate-950 text-[16px]">
                Udemy Business
              </Link>
            </li>
            <li>
              <Link
                href="/qualification"
                className="hover:text-slate-950 text-[16px]"
              >
                Teach On Udemy
              </Link>
            </li>
            <li>
              <RiShoppingCartLine size={22} className="my-icon" />
            </li>
          </ul>

          {/* Buttons Section */}
          <ul className="flex items-center space-x-2">
            <li>
              <button className="py-2 px-4 hover:bg-gray-200 border border-black font-bold">
                Log in
              </button>
            </li>
            <li>
              <button className="py-2 px-4 bg-zinc-800 text-white border border-black font-bold">
                Sign up
              </button>
            </li>
            <li>
              <button className="py-2 px-2 hover:bg-gray-200 border border-black font-bold">
                <RiGlobalLine size={21} className="my-icon" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
