import React, { useState } from "react";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Acceuil", href: "#" },
  { name: "Nos produits", href: "#" },
  { name: "Nos services", href: "#" },
  { name: "A propos", href: "#" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-blue-900">
      <nav
        className="flex items-center justify-between space-x-12 p-6 lg:px-8"
        aria-label="Navigation principale"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="-m-1.5 p-1.5 text-xl font-semibold leading-8 text-white hover:text-gray-300 transition ease-in-out duration-500"
          >
            <strong>Jawda</strong> Advisory
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-semibold leading-6 text-white hover:text-gray-300 transition ease-in-out duration-500"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:justify-end">
          <button
            type="button"
            onClick={() => console.log("🔴 redirect connexion")}
            className="font-semibold px-3.5 py-1.5 rounded-md text-blue-900 text-lg bg-white  drop-shadow-sm  hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 transition ease-in-out duration-500"
          >
            Login
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-blue-900/10">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="-m-1.5 p-1.5 text-xl font-semibold leading-8 text-blue-900 hover:text-gray-300 transition ease-in-out duration-500"
            >
              <strong>Jawda</strong> Advisory
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-blue-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/connexion"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
