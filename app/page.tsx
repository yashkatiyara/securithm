import Header from "@/components/Header";
import ScrollFx from "@/components/ScrollFx";
import ContactForm from "@/components/ContactForm";
import { Mark } from "@/components/Logo";

const CAREERS_URL = process.env.NEXT_PUBLIC_CAREERS_URL || "";
const careersReady = /^https?:\/\//.test(CAREERS_URL);

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="bg-field" aria-hidden="true"><canvas id="hero-canvas" className="hero-canvas" /></div>

      {/* Emergency strip */}
      <div className="alert-strip">
        <div className="wrap">
          <span className="pulse" aria-hidden="true" />
          <span><strong>Just been scammed?</strong> The first hours decide everything.</span>
          <span className="muted">Report to India&apos;s national cybercrime helpline now:</span>
          <a href="tel:1930">Call 1930</a>
          <span className="muted">·</span>
          <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a>
        </div>
      </div>

      <Header />

      <main id="main">
        <span id="top" />

        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <span className="hero-tag reveal"><span className="pulse" aria-hidden="true" /> Cybersecurity &amp; digital forensics · India</span>
                <h1 className="display reveal d1" id="hero-title">There&apos;s nowhere private<br />you can call to get<br />your money <em>back.</em></h1>
                <p className="lede reveal d2">India loses more money to online fraud than almost anywhere on earth — yet almost every victim spends the one window that matters on hold. Securithm is the number they should be able to dial: a private anti-scam centre that traces the money while it can still be frozen.</p>
                <div className="hero-actions reveal d3">
                  <a className="btn btn-primary" href="#contact">Report a case or partner with us
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </a>
                  <a className="btn btn-ghost" href="#what">How Securithm works</a>
                </div>
              </div>

              <div className="trail reveal d2" role="img" aria-label="Stolen funds moving through three mule accounts, with a narrow window where a rapid freeze can stop the loss.">
                <div className="trail-head">
                  <span>TXN&nbsp;TRACE&nbsp;·&nbsp;LIVE</span>
                  <span className="live"><span className="pulse" aria-hidden="true" /> tracing</span>
                </div>
                <svg viewBox="0 0 360 210" width="100%" aria-hidden="true">
                  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0 0l6 4-6 4z" fill="#ff6b5e" /></marker></defs>
                  <g fontSize="10" fill="#9aa4b2" textAnchor="middle">
                    <circle cx="40" cy="40" r="20" fill="#191d26" stroke="#333c4a" /><text x="40" y="76">Victim</text>
                    <circle cx="150" cy="40" r="20" fill="#191d26" stroke="#4a2410" /><text x="150" y="76">Mule 1</text>
                    <circle cx="260" cy="40" r="20" fill="#191d26" stroke="#4a2410" /><text x="260" y="76">Mule 2</text>
                    <circle cx="320" cy="140" r="20" fill="#191d26" stroke="#4a2410" /><text x="320" y="176">Offshore</text>
                    <circle cx="120" cy="140" r="22" fill="#0f1a14" stroke="#57e6ac" /><text x="120" y="177" fill="#57e6ac">Freeze</text>
                  </g>
                  <g fill="none" stroke="#ff6b5e" strokeWidth="2" markerEnd="url(#ar)">
                    <path className="trail-flow" d="M62 40H128" />
                    <path className="trail-flow" d="M172 40H238" />
                    <path className="trail-flow" d="M278 56L306 122" />
                  </g>
                  <path d="M64 52C90 100 100 118 108 128" fill="none" stroke="#57e6ac" strokeWidth="2" strokeDasharray="4 5" />
                  <text x="150" y="24" fontSize="9" fill="#ff6b5e" textAnchor="middle">₹ moving in minutes</text>
                </svg>
                <p className="trail-caption">We move with whoever has authority to <strong>pull the lever</strong> — banks, payment rails, telecoms, exchanges — while the money is still reachable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-alt" id="mission" aria-labelledby="story-title">
          <div className="wrap">
            <div className="story">
              <div>
                <p className="eyebrow reveal">The window that closes</p>
                <h2 className="h2 reveal d1" id="story-title">A few hours<br />decide <em>everything.</em></h2>
                <p className="pullquote reveal d2">Most places that bleed money the way India does have somewhere to call. <span>We mostly don&apos;t</span> — which is absurd, given we lose the most.</p>
              </div>
              <ol className="timeline reveal d1" aria-label="How a single fraud unfolds">
                <li className="hot"><time>Morning tea</time><p>A retired man&apos;s phone rings. The caller says they&apos;re from his bank — they know his name, his branch, the last digits of his account. Calm, professional, reassuring.</p></li>
                <li className="hot"><time>Minutes later</time><p>A few &quot;verification steps&quot; later, he&apos;s given away what matters. By lunchtime, his life&apos;s savings are gone.</p></li>
                <li><time>That afternoon</time><p>The family calls the bank, files a complaint, reports the fraud. Everyone agrees it&apos;s urgent and promises to look into it.</p></li>
                <li><time>While the reports move</time><p>The money has already bounced through three mule accounts. It isn&apos;t even in the country anymore.</p></li>
                <li className="good"><time>What could have happened</time><p>There was a window that morning — maybe a few hours — when a rapid freeze could have stopped most of the loss. He spent it on hold. <strong>That window is what Securithm exists to catch.</strong></p></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section aria-labelledby="stats-title">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow">The scale of it</p>
              <h2 className="h2" id="stats-title">The numbers behind the silence</h2>
            </div>
            <div className="stats reveal d1">
              <div className="stat"><p className="stat-num">₹<span data-count="22495" data-dec="0">22495</span> cr</p><p>Reported lost to cyber fraud across India in 2025 — roughly the same as the year before.</p></div>
              <div className="stat"><p className="stat-num"><span data-count="28" data-dec="0">28</span> lakh</p><p>Cases reported in 2025 — of which under 56,000 became an actual police FIR.</p></div>
              <div className="stat"><p className="stat-num mint"><span data-count="10">10</span>–12%</p><p>Of stolen money actually gets back to the owner — about ₹1 returned for every ₹10 lost.</p></div>
              <div className="stat"><p className="stat-num">Half<span>+</span></p><p>Of these scam centres are run from outside the country — mostly from scam compounds across Southeast Asia.</p></div>
            </div>
            <p className="source-note reveal d1">Government has moved — a national coordination centre, the reporting portal, the 1930 helpline, faster mule-account freezes, public awareness. What&apos;s still missing is private-sector capacity at scale. Securithm aims to fill that gap.</p>
          </div>
        </section>

        {/* What we do */}
        <section className="section-alt" id="what" aria-labelledby="what-title">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow">What we do</p>
              <h2 className="h2" id="what-title">Security through <em>algorithms</em>,<br />built to help people.</h2>
              <p className="lede">Securithm is a cybersecurity and digital-forensics investigation company built to help people and organizations respond to fraud and security threats. We named it for the two ideas at our core — <strong>Secur</strong>ity through the algor<strong>ithm</strong>s we design for people.</p>
            </div>
            <div className="grid-3">
              <div className="card reveal"><div className="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg></div><h3>Recover</h3><p>Help victims get money back through a success-based model — no fee unless we recover, ever.</p></div>
              <div className="card reveal d1"><div className="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M4 9h16M8 5v14" /></svg></div><h3>Protect</h3><p>Provide cybersecurity services and products that protect businesses, institutions and the people they serve.</p></div>
              <div className="card reveal d2"><div className="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></svg></div><h3>Investigate</h3><p>Build, long-term, a forensic intelligence system that can help with complex digital and homicide investigations.</p></div>
            </div>
            <p className="lede reveal d1" style={{ marginTop: 40 }}>It&apos;s high time a firm like Securithm existed: losses are rising while recovery sits near 10%; regulators are expanding but short on capable private partners; and the same AI that lets a scammer impersonate someone&apos;s son now makes a real forensic investigation system practical.</p>
          </div>
        </section>

        {/* How it works */}
        <section aria-labelledby="how-title">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow">How a recovery works</p>
              <h2 className="h2" id="how-title">Move before the trail<br />goes cold.</h2>
            </div>
            <div className="steps reveal d1">
              <div className="step"><h3>Report &amp; trace</h3><p>You reach us; we map where the money went across banks, payment rails, telecoms and exchanges — fast.</p></div>
              <div className="step"><h3>Freeze &amp; escalate</h3><p>We move with whoever holds the lever to restrict the funds, and hand law enforcement usable evidence.</p></div>
              <div className="step"><h3>Recover — then bill</h3><p>Only if funds come back do we take an agreed 8–12% cut. No recovery, no fee. It&apos;s in the contract.</p></div>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="section-alt" id="objectives" aria-labelledby="obj-title">
          <div className="wrap">
            <div className="section-head reveal"><p className="eyebrow">Three objectives</p><h2 className="h2" id="obj-title">A plan, and a pathway to follow.</h2></div>
            <div className="grid-3" style={{ alignItems: "start" }}>
              <article className="card reveal"><div className="kicker"><span className="idx">01</span> Anti-scam centre</div><h3>The number a victim dials</h3><p>We trace money lost across banks, payment rails, telecoms and exchanges while it can still be frozen, and move fast with whoever has the authority to restrict further loss.</p><p><strong>Scambaiting:</strong> an analyst plays the target, keeps the criminal talking, and maps the accounts, scripts, infrastructure and people — pointing at the money and building evidence for law enforcement.</p><p><strong>Success-based fees.</strong> Unlike advance-payment &quot;recovery&quot; schemes that chase victims and deliver nothing, we charge only after we recover — an agreed <strong>8–12%</strong> cut, settled per case and per partner.</p></article>
              <article className="card reveal d1"><div className="kicker"><span className="idx">02</span> Steady footing</div><h3>Security as a service &amp; a product</h3><p>Recovery earns a name and trust — but it doesn&apos;t make payroll on the first of the month. So we sell security two ways:</p><div className="split" style={{ marginTop: 8 }}><div className="card" style={{ padding: 20, background: "var(--bg-2)" }}><span className="tag">Part A · Product</span><p style={{ fontSize: 15 }}>Custom cybersecurity built to a client&apos;s lawful needs — defensive tools, workflows, endpoint protection, monitoring and counter-surveillance.</p></div><div className="card" style={{ padding: 20, background: "var(--bg-2)" }}><span className="tag">Part B · Service</span><p style={{ fontSize: 15 }}>Subscriptions that monitor and protect small-business systems — plus training and awareness for companies, government staff, schools and senior citizens.</p></div></div></article>
              <article className="card reveal d2"><div className="kicker"><span className="idx">03</span> Long-term vision</div><h3>A forensic AI, built from scratch</h3><p>Once recovery and services make Securithm self-sustaining, we aim to build something not done yet: a forensic-investigation large language model for complex digital <em>and</em> medical forensic cases.</p><p>A specialized reasoning system trained to help investigators think through difficult cases — its data drawn from years of real case studies and every case closed under objectives one and two.</p></article>
            </div>
          </div>
        </section>

        {/* Get involved */}
        <section id="involved" aria-labelledby="inv-title">
          <div className="wrap">
            <div className="section-head reveal"><p className="eyebrow">How you can be involved</p><h2 className="h2" id="inv-title">Ideas only go so far<br />on their own.</h2><p className="lede">We have a plan and a pathway. What we need now are people who believe in it and are ready to help build Securithm.</p></div>
            <div className="grid-2 involve">
              <div className="card reveal"><div className="letter">A</div><div><h3>Investor</h3><p>Fund the priorities: recovery operations, revenue-generating software, and the runway to build the forensic AI. Revenue diversifies across success fees, subscriptions, custom software and eventual product licensing.</p></div></div>
              <div className="card reveal d1"><div className="letter">B</div><div><h3>Co-founder</h3><p>The technical plan is sorted — we need someone to own operations and partnerships: relationships with banks, telecoms and law enforcement, while holding ethical standards as we grow.</p></div></div>
              <div className="card reveal d1"><div className="letter">C</div><div><h3>Institutions &amp; partnerships</h3><p>Banks, payment providers, NGOs, government agencies and security teams form a major part of the recovery process. Partnering with us means responding to fraud faster and recovering more.</p></div></div>
              <div className="card reveal d2"><div className="letter">D</div><div><h3>Know the right person?</h3><p>A simple introduction to a serious investor, an experienced operator, or an institution that should know about Securithm can make a real difference.</p></div></div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="section-alt" id="founder" aria-labelledby="founder-title">
          <div className="wrap">
            <div className="section-head reveal"><p className="eyebrow">The person behind it</p><h2 className="h2" id="founder-title">Why this one&apos;s <em>mine</em> to build.</h2></div>
            <div className="founder">
              <aside className="founder-card reveal">
                <div className="founder-avatar" aria-hidden="true">MK</div>
                <h3>Muzammil Kazi</h3>
                <p className="founder-role">Founder · Ethical hacker</p>
                <div className="chips">
                  <span className="chip">Penetration testing</span>
                  <span className="chip">Social engineering</span>
                  <span className="chip">CHFI (in progress)</span>
                  <span className="chip">Accessibility engineering</span>
                  <span className="chip">Stand-up comedian</span>
                </div>
              </aside>
              <div className="founder-prose reveal d1">
                <h4>An attacker&apos;s mindset</h4>
                <p>By profession I&apos;m an ethical hacker — penetration testing and social engineering, the kind of work where a company pays you to think like the person who could break into their systems. I&apos;m also working toward my CHFI certification. After enough time in this field you stop thinking about cyber-criminals in theory and start understanding how they actually work. That&apos;s how I know a company like Securithm is a necessity.</p>
                <h4>Building the tools that should already exist</h4>
                <p>Usually the first thing people mention about me is that I&apos;m completely blind, so I&apos;ll say it and move on. I&apos;ve had no vision in either eye; everything I do on a computer runs through a screen reader called NVDA. It works better than most people expect — though I haven&apos;t met another blind person working in offensive security yet.</p>
                <p>That gap points at a problem this industry has ignored for too long. So I&apos;m building a screen reader designed to work seamlessly with GUI-based cybersecurity tools, on both Windows and Kali Linux — because Kali, as widely used as it is, is still very hard to navigate without sight. I started building it because I need it, and because there are others fully capable of this work who are held back by tools never designed with us in mind.</p>
                <h4>Holding the room</h4>
                <p>I also perform stand-up — mostly dark humour. It&apos;s more relevant than it sounds: this business means talking to distressed people who&apos;ve lost their savings, to banks that have heard every pitch, and to senior citizens who tune out the moment things sound technical. Being able to hold a room and make sure everyone actually understands is a skill — especially in cybersecurity.</p>
                <p>Everything I&apos;ve done points one direction: how attackers think, the accessibility challenges I live with daily, and the belief that good security means finding the technical problem <em>and</em> helping people deal with it. That&apos;s why I believe Securithm should exist — and why I want to be the one building it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Careers */}
        <section id="careers" aria-labelledby="careers-title">
          <div className="wrap">
            <div className="section-head reveal"><p className="eyebrow">Careers</p><h2 className="h2" id="careers-title">Build the thing that<br />should already exist.</h2><p className="lede">We&apos;re early, and we hire for judgment over credentials. If you want to do work that visibly helps people on their worst day, we want to hear from you — and yes, we build accessibly, by default.</p></div>
            <div className="contact-grid">
              <div className="careers-panel reveal">
                <h3>Roles we&apos;re growing into</h3>
                <ul className="role-list">
                  <li>Fraud-recovery / intake analyst <span className="tag">Ops</span></li>
                  <li>Scambaiting &amp; threat intelligence analyst <span className="tag">Intel</span></li>
                  <li>Security engineer (services &amp; products) <span className="tag">Eng</span></li>
                  <li>Digital forensics investigator <span className="tag">Forensics</span></li>
                  <li>Partnerships &amp; law-enforcement liaison <span className="tag">Ops</span></li>
                </ul>
                {careersReady ? (
                  <a className="btn btn-signal" href={CAREERS_URL} target="_blank" rel="noopener noreferrer">Apply via our form
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </a>
                ) : (
                  <a className="btn btn-signal" aria-disabled="true" href="#careers">Applications open soon</a>
                )}
                <p className="form-note">Prefer to reach out directly? Use the contact form — mention the role in your message.</p>
              </div>
              <div className="reveal d1">
                <div className="panel">
                  <h3 style={{ fontSize: 22, marginBottom: 8 }}>Not a fit but want to help?</h3>
                  <p className="muted" style={{ fontSize: 15 }}>Investors, co-founders, institutions and introductions all move this forward. Pick whatever fits from <a href="#involved">Get involved</a>, or just say hello below.</p>
                  <div className="contact-methods" style={{ marginTop: 18 }}>
                    <a href="#contact"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg></span><span className="meta"><b>Send a message</b><span>Reaches us straight away via the contact form</span></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="section-head reveal"><p className="eyebrow">Contact</p><h2 className="h2" id="contact-title">Report a case, or start<br />a conversation.</h2><p className="lede">Whether you&apos;ve been targeted, you run an institution that should be a partner, or you want to invest — tell us in a line or two and we&apos;ll come back to you.</p></div>
            <div className="contact-grid">
              <div className="panel reveal"><ContactForm /></div>
              <div className="reveal d1">
                <div className="panel" style={{ marginBottom: 20 }}>
                  <h3 style={{ fontSize: 20, marginBottom: 16 }}>If you&apos;ve just been scammed</h3>
                  <div className="contact-methods">
                    <a href="tel:1930"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.4-1.2a2 2 0 012.1-.4c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" /></svg></span><span className="meta"><b>Call 1930</b><span>India&apos;s national cyber-fraud helpline — do this first</span></span></a>
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" /></svg></span><span className="meta"><b>cybercrime.gov.in</b><span>File the official complaint in parallel</span></span></a>
                  </div>
                  <p className="form-note" style={{ marginTop: 16 }}>Securithm complements these official channels — it doesn&apos;t replace them. Report through 1930 first; then tell us so we can trace the money while it&apos;s still reachable.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="wrap">
            <div className="inner reveal">
              <h2 className="h2">India loses the most.<br />It deserves somewhere to call.</h2>
              <p className="lede">If any of this resonated — as an investor, a partner, a teammate, or someone who knows the right person — that&apos;s exactly the kind of message we&apos;re hoping to get.</p>
              <div className="cta-actions"><a className="btn btn-primary" href="#contact">Get in touch</a><a className="btn btn-ghost" href="#involved">See how to get involved</a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <a className="brand" href="#top" aria-label="Securithm home"><Mark /><span>Securithm<span className="dot">.</span></span></a>
              <p>Security through algorithms, built to help people. A private anti-scam centre and cybersecurity firm for a country that loses the most and calls the least.</p>
            </div>
            <div><h4>Explore</h4><ul><li><a href="#mission">The mission</a></li><li><a href="#what">What we do</a></li><li><a href="#objectives">Objectives</a></li><li><a href="#founder">Founder</a></li></ul></div>
            <div><h4>Get involved</h4><ul><li><a href="#involved">Invest / partner</a></li><li><a href="#careers">Careers</a></li><li><a href="#contact">Contact</a></li><li><a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">Report fraud (gov)</a></li></ul></div>
          </div>
          <div className="footer-bottom">
            <span>© <span id="year">2026</span> Securithm. All rights reserved.</span>
            <span>Just been scammed? Call <a href="tel:1930">1930</a> first — the first hours matter most.</span>
          </div>
        </div>
      </footer>

      <ScrollFx />
    </>
  );
}
