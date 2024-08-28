"use client";

import { useEffect, useRef } from "react";
// import styles from "./styles/navbar.module.scss";
import Link from "next/link";

export default function NavMenu() {
  const linkListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const element = linkListRef.current;

    if (!element) return;

    const links = element.getElementsByTagName("a");
    console.log(links);
    const hoverLink = (e: MouseEvent) => {
      console.log("test");
    };
    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.addEventListener("mouseover", (e) => hoverLink);
    }
  }, []);

  return (
    <div>
      <h1>Links</h1>
      <nav>
        <ul ref={linkListRef}>
          <Link
            className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
            href="/about_me"
          >
            About Me
          </Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
        </ul>
      </nav>
    </div>
  );
}
