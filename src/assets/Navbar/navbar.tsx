import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import style from "./navbar.css";
import img from "./example.jpg";
import logo from "./LOGO-02-01 (2).png";
import Home from "../components/user_student/home";
import About from "../components/user_student/about";

const navigation = [
  { name: "HOME", href: "home", current: false },
  { name: "ABOUT", href: "about", current: false },
];
export const user = {
  avatar: { img },
  name: "Purinat Rodpum",
};

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-emerald-100 font-kanit ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-kanit ">
            <div className="relative flex h-16 items-center justify-between font-kanit">
              <div className="absolute font-kanit inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center font-kanit justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5 font-kanit" />
                  <span className="sr-only font-kanit">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 font-kanit" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 font-kanit" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className=" font-kanit flex flex-1  items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <a href="#">
                  <img className="h-14 w-auto" src={logo} alt="Your Company" />
                  </a>
                </div>
                <div className="hidden sm:block font-kanit ">
                  <div className=" flex space-x-20 font-kanit  pl-96 mt-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-sky"
                            : "text-green-700 hover:bg-green-700 hover:text-white",
                          "rounded-md px-3 py-2 pl-2 text-lg font-medium font-sans"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="font-kanit absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="text-green-700 font-kanit text-xl px-2 font-medium">
                  {user.name}
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className=" font-kanit  relative xl-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={img}
                        alt="img"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="font-kanit  absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100 font-kanit" : "",
                              "block px-4 py-2 text-sm text-gray-700 font-kanit"
                            )}
                          >
                            {user.name}
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100 font-kanit" : "",
                              "block px-4 font-kanit py-2 text-sm text-gray-700"
                            )}
                          >
                            Purinat2407@gamil.com
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-red-500 font-kanit" : "",
                              "block px-4 py-2 text-sm text-gray-700 font-kanit"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="font-kanit  sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-green-900 text-green"
                      : "text-green-700 hover:bg-green-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
