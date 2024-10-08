"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ThemeToggle } from "@/components/navbar/ThemeToggle";
import LanguageSelector from "@/components/navbar/LanguageSelector";
import LanguageSwitchModal from "@/components/LanguageSwitchModal";
import config from "@/libs/config";



export default function Navbar({ lng, NavbarLanguageText ,LanguagesSwitchModalText}) {
  const navigation = [
    { name: NavbarLanguageText.Item1, href: '#how-to-use' },
    { name: NavbarLanguageText.Item2, href: '#why-choose-us' },
    // {name:'Use Cases', href:'#case'},
    { name: NavbarLanguageText.Item4, href: '#faqs' },
  ]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white dark:bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5" title={config.appName}>
            <span className="text-xl font-semibold text-color-change">
              {/* {config.appName} */}
            </span>
            <img className="h-12 w-auto" src="/logo.png" alt={config.appName}/>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-sky-500 dark:text-white">
              {item.name}
            </a>
          ))}
        </div>
        <div className="lg:flex flex-1 items-center justify-end gap-x-6 hidden">
          <LanguageSelector lng={lng} />
          <ThemeToggle />
          <LanguageSwitchModal LanguagesSwitchModalText = {LanguagesSwitchModalText} />

          {/*<a*/}
          {/*    href="#"*/}
          {/*    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
          {/*>*/}
          {/*    Log In*/}
          {/*</a>*/}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="dark:bg-gray-900  fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between gap-x-6">
            <a href="/" className="-m-1.5 p-1.5">
               <img className="h-12" src="/logo.png" alt={config.appName}/>
            </a>
            {/*<a*/}
            {/*    href="#"*/}
            {/*    className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
            {/*>*/}
            {/*    Log In*/}
            {/*</a>*/}
            <LanguageSelector lng={lng} />
            <ThemeToggle />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 flex flex-col gap-y-2">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-sky-500 dark:text-white">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
