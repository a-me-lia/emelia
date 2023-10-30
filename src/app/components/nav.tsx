"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
    "/": {
      name: "home",
      id: "0",
    },
    "/blog": {
      name: "blog",
      id: "1",
    },
    "/music": {
        name: "music",
        id: "2",
      },
    "/literature": {
      name: "literature",
      id: "3",
    },
    "/art": {
      name: "art",
      id: "4",
    },
    "/about": {
      name: "about",
      id: "4",
    },
  };

export default function Nav(){
    let pathname = usePathname() || "/";
    if (pathname.includes("/blog")) {
      pathname = "/blog";
    }
    if (pathname.includes("/about")) {
      pathname = "/home";
    }
    if (pathname.includes("/music")) {
        pathname = "/music";
    }
    if (pathname.includes("/literature")) {
      pathname = "/literature";
    }
    if (pathname.includes("/art")) {
      pathname = "/art";
    }
    if (pathname.includes("/about")) {
      pathname = "/about";
    }

    return(
        <>
        <div className="fixed top-0 z-[49] h-16 w-full flex flex-row justify-between items-center px-16 ">
            <Link href='/'><h1 className=" text-neutral-100 text-[32px] font-bold">emelia.pl</h1></Link>
            <ul className="flex flex-cols text-white font-bold">
            {Object.entries(navItems).map(([path, { name, id }]) => {
              const isActive = path === pathname;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`pr-6 mix-blend-difference ${
                    isActive ? "text-neutral-100" : "text-neutral-700"
                  } transition-colors duration-1000`}
                >
                  <p id={id}>{name}</p>
                </Link>
              );
            })}
            </ul>
        </div>
        </>
    )
}