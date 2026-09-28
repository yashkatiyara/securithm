"use client";
import { useState } from "react";
import { Brand } from "./Logo";

const links = [
  ["#mission", "Mission"],
  ["#what", "What we do"],
  ["#objectives", "Objectives"],
  ["#involved", "Get involved"],
  ["#founder", "Founder"],
  ["#careers", "Careers"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap">
        <Brand />
        <button className="nav-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen((o) => !o)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          Menu
        </button>
        <nav className={`nav${open ? " open" : ""}`} id="primary-nav" aria-label="Primary" onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}>
          <ul>
            {links.map(([href, label]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
            <li><a className="btn btn-primary" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
