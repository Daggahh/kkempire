"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"
import ThemeToggle from "../theme-toggle"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Account: "/account",
  Cart: "/cart",
  KKServices: "/kkservices",
}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none text-[#482A12] hover:text-[#D49D5D]"
                >
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <PopoverPanel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-[100] inset-x-0 text-sm m-2 bg-empire-sand/20 dark:bg-empire-midnight/60 backdrop-blur-md border border-[#897366]/20 dark:border-empire-taupe/40 rounded-lg">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full justify-between p-6"
                  >
                    <div
                      className="flex justify-end items-center relative z-[110]"
                      id="xmark"
                    >
                      <div className="block small:hidden mr-4">
                        <ThemeToggle />
                      </div>
                      <button
                        data-testid="close-menu-button"
                        onClick={close}
                        className="text-[#482A12] hover:text-[#D49D5D] transition-colors duration-300 z-[120]"
                        style={{ zIndex: 120 }}
                      >
                        <XMark />
                      </button>
                    </div>
                    <ul className="flex flex-col gap-6 items-start justify-start">
                      {Object.entries(SideMenuItems).map(([name, href]) => (
                        <li key={name}>
                          <LocalizedClientLink
                            href={href}
                            className="text-3xl leading-10 text-[#482A12] dark:text-empire-sand hover:text-[#D49D5D] dark:hover:text-empire-gold transition-colors duration-300"
                            onClick={close}
                            data-testid={`${name.toLowerCase()}-link`}
                          >
                            {name}
                          </LocalizedClientLink>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-y-6">
                      <div
                        className="flex justify-between text-[#482A12]"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150 text-[#482A12] dark:text-empire-sand",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between txt-compact-small text-empire-brown dark:text-empire-sand hover:text-[#D49D5D] dark:hover:text-empire-gold transition-colors duration-300">
                        {new Date().getFullYear()} KKEmpire. All rights
                        reserved.
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
