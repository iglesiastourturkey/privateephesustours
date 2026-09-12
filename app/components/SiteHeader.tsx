/* eslint-disable @next/next/no-html-link-for-pages */
import { ArrowUpRight, Menu, X } from "lucide-react";

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  return (
    <header className={`site-header ${dark ? "header-dark" : ""}`}>
      <a className="wordmark" href="/">PRIVATE EPHESUS<small>Journeys with meaning</small></a>
      <nav><a href="/tours">Tours</a><a href="/#journey">The journey</a><a href="/about">About</a><a href="/#reviews">Reviews</a><a href="/#faq">FAQ</a></nav>
      <a className="header-plan" href="/book">Book in 3 steps <ArrowUpRight /></a>
      <details className="small-menu"><summary><Menu /><X /></summary><div><a href="/tours">Tours</a><a href="/about">About</a><a href="/#reviews">Reviews</a><a href="/#faq">FAQ</a><a href="/book">Book in 3 steps</a></div></details>
    </header>
  );
}
