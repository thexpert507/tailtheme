import { VscClose } from "react-icons/vsc";
import { VscMenu } from "react-icons/vsc";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { DarkThemeSwitch } from "./darkThemeSwitch";
import { Box } from "./box";
import { PADDING_Y } from "@/utils";

interface NavProps {
  children?: React.ReactNode;
  testId?: string;
}
export function Nav({ children, testId }: NavProps) {
  return (
    <>
      <header
        data-testid={testId}
        className={twMerge(
          "hidden md:block backdrop-blur bg-background-primary shadow-sm absolute top-0 left-0 right-0 z-50 py-4 md:fixed"
        )}>
        <div className="mx-auto max-w-8xl justify-between px-4 flex">
          <nav className="w-full fixed inset-x-0 bottom-0 top-14 hidden bg-background-primary items-center gap-8 px-6 text-background-contrast md:static md:flex md:bg-transparent md:p-0 h-screen md:h-auto">
            {children}
          </nav>
        </div>
      </header>
      <div className="h-16 md:h-0"></div>
    </>
  );
}

export function NavBrand({ children, testId }: NavProps) {
  return (
    <div data-testid={testId} className="flex-shrink-0 flex items-center justify-between">
      {children}
    </div>
  );
}

export function NavItems({ children, testId }: NavProps) {
  return (
    <ul
      data-testid={testId}
      className="mt-5 items-center gap-8 space-y-6 font-medium md:mt-0 md:flex md:space-y-0">
      {children}
    </ul>
  );
}

interface NavItemProps {
  children?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  testId?: string;
}
export function NavItem({ children, onClick, active, testId }: NavItemProps) {
  return (
    <li data-testid={testId}>
      <button
        onClick={onClick}
        className={twMerge(
          "block hover:text-primary cursor-pointer whitespace-nowrap",
          active && "text-primary"
        )}>
        {children}
      </button>
    </li>
  );
}

interface MobileNavProps {
  children?: React.ReactNode;
  brand: React.ReactNode;
  darkThemeSwitch?: boolean;
  paddingY?: keyof typeof PADDING_Y;
  testId?: string;
}
export function MobileNav({ children, brand, darkThemeSwitch, paddingY, testId }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const toogle = () => setOpen(!open);

  return (
    <header
      data-testid={testId}
      className={twMerge(
        "backdrop-blur bg-background-primary shadow-sm fixed top-0 left-0 right-0 z-50 md:hidden",
        PADDING_Y[paddingY ?? "lg"]
      )}>
      <div className="mx-auto max-w-8xl justify-between px-4 md:flex">
        <div className="flex items-center justify-between">
          {brand}
          <Box flat items="center">
            {darkThemeSwitch && (
              <>
                <DarkThemeSwitch></DarkThemeSwitch>
                <div className="w-1"></div>
              </>
            )}
            <div className="block md:hidden" onClick={toogle}>
              <VscMenu className={twMerge("h-6 w-6", open ? "hidden" : "block")}></VscMenu>
              <VscClose className={twMerge("h-6 w-6", open ? "block" : "hidden")}></VscClose>
            </div>
          </Box>
        </div>
        <nav
          className={twMerge(
            "fixed inset-x-0 bottom-0 top-14 items-center gap-8 bg-background-primary px-6 text-background-contrast md:static md:flex md:bg-transparent md:p-0 h-screen md:h-auto",
            !open && "hidden"
          )}>
          {children}
        </nav>
      </div>
    </header>
  );
}

interface MobileNavBrandProps {
  href?: string;
  children?: React.ReactNode;
}
export function MobileNavBrand({ children, href }: MobileNavBrandProps) {
  return <a href={href}>{children}</a>;
}
