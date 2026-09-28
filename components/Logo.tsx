export function Mark({ className = "mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 2l11 4v8c0 7-4.7 12.6-11 15C9.7 26.6 5 21 5 14V6z" fill="#ffb547" />
      <path d="M9 15h3l2-5 3 8 1.8-3.5H22" fill="none" stroke="#1a1204" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22" cy="13.5" r="2.2" fill="#0f1a14" stroke="#57e6ac" strokeWidth="1.5" />
    </svg>
  );
}

export function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Securithm home">
      <Mark />
      <span>
        Securithm<span className="dot">.</span>
      </span>
    </a>
  );
}
