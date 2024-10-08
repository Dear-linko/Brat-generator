"use client"
import {Fragment, useState, useEffect, useRef} from 'react';
import {usePathname, useParams} from 'next/navigation'
import {Menu, Transition} from '@headlessui/react';
import {GlobeAltIcon, ChevronDownIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {languages} from '@/config';

const LanguageSelector = ({lng = ""}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const pathname = usePathname()
    const newPathname = pathname.replace(`/${lng}`,"")

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Menu as="div" className="relative inline-block text-left" ref={menuRef}>
            <div>
                <Menu.Button
                    className="inline-flex w-full justify-center gap-x-1.5 border-gray-300 border dark:border-gray-600 rounded-md px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900  hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <GlobeAltIcon className="w-5 h-5 text-gray-400 dark:text-gray-400"/>
                    {lng === "default" ? "EN" : lng.toUpperCase()}
                    <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400 dark:text-gray-400"
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                show={menuOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute right-0 z-10 mt-2 w-26 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {languages.map((item) => {
                            let hrefValue = `/${item.lang}`;
                            if (newPathname) {
                                hrefValue = `/${item.lang}${newPathname}`;
                            }
                            return (
                                <Menu.Item key={item.lang}>
                                    {({ active }) => (
                                        <Link href={hrefValue}>
                                            <span
                                                className={`${
                                                    active ? 'bg-gray-100 dark:bg-gray-800 text-[#2d6ae0] dark:text-[#4d8ae0]' : 'text-gray-700 dark:text-gray-300'
                                                } block px-4 py-2 text-sm`}
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                {item.language}
                                            </span>
                                        </Link>
                                    )}
                                </Menu.Item>
                            );
                        })}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default LanguageSelector;