

import React, { useState, useEffect } from "react";

/* ── sub-components ─────────────────────────────────────────────────────── */

const SectionHeading = ({ number, title }) => (
  <div className="flex items-center gap-3 mb-4">
    <span
      className="text-xs font-bold tracking-widest shrink-0"
      style={{ color: "#6C8CD5" }}
    >
      {String(number).padStart(2, "0")}
    </span>
    <h2
      className="text-xl font-bold leading-snug"
      style={{ color: "#1F2A44", fontFamily: "'Georgia', serif" }}
    >
      {title}
    </h2>
  </div>
);

const Divider = () => (
  <hr className="my-4 border-0 border-t" style={{ borderColor: "#E0E3EB" }} />
);

const BulletItem = ({ children }) => (
  <li className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "#3B4461" }}>
    <span
      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
      style={{ background: "#6C8CD5" }}
    />
    {children}
  </li>
);

const SubHeading = ({ children }) => (
  <p
    className="text-xs font-semibold uppercase tracking-widest mt-5 mb-2"
    style={{ color: "#384B70" }}
  >
    {children}
  </p>
);

const CalloutBox = ({ children }) => (
  <div
    className="mt-4 px-4 py-3 rounded-r-lg text-sm leading-relaxed"
    style={{
      background: "#E1E9FF",
      borderLeft: "3px solid #6C8CD5",
      color: "#1F2A44",
    }}
  >
    {children}
  </div>
);

const ContactLink = ({ href, icon, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 no-underline"
      style={{
        background: hovered ? "#D6E2FF" : "#ECEFF6",
        border: `1.5px solid ${hovered ? "#6C8CD5" : "#E0E3EB"}`,
        color: "#384B70",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{icon}</span>
      {label}
    </a>
  );
};

/* ── TOC item ───────────────────────────────────────────────────────────── */
const TocItem = ({ number, title, id, active, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className="flex items-center gap-2.5 w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 border-none cursor-pointer"
    style={{
      background: active ? "#E1E9FF" : "transparent",
      color: active ? "#1F2A44" : "#8C8FA1",
      fontWeight: active ? 600 : 400,
    }}
  >
    <span
      className="text-xs font-bold tracking-widest w-5 shrink-0"
      style={{ color: active ? "#6C8CD5" : "#7C8BB3" }}
    >
      {String(number).padStart(2, "0")}
    </span>
    <span className="leading-snug">{title}</span>
    {active && (
      <span
        className="ml-auto w-1.5 h-1.5 rounded-full shrink-0"
        style={{ background: "#6C8CD5" }}
      />
    )}
  </button>
);

/* ── Section card ───────────────────────────────────────────────────────── */
const SectionCard = ({ id, children, visible }) => (
  <section
    id={id}
    className="rounded-2xl p-8 transition-all duration-500"
    style={{
      background: "#FFFFFF",
      border: "1px solid #E0E3EB",
      boxShadow: "0 2px 12px #CBD3E022",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
      scrollMarginTop: "5rem",
    }}
  >
    {children}
  </section>
);

/* ── TOC config ─────────────────────────────────────────────────────────── */
const tocItems = [
  { id: "intro",     number: 1,  title: "Introduction" },
  { id: "collect",   number: 2,  title: "Information We Collect" },
  { id: "use",       number: 3,  title: "How We Use Your Information" },
  { id: "sharing",   number: 4,  title: "Sharing of Information" },
  { id: "security",  number: 5,  title: "Data Security" },
  { id: "retention", number: 6,  title: "Data Retention" },
  { id: "rights",    number: 7,  title: "Your Rights" },
  { id: "children",  number: 8,  title: "Children's Privacy" },
  { id: "changes",   number: 9,  title: "Changes to This Policy" },
  { id: "contact",   number: 10, title: "Contact Us" },
];

/* ── Main ───────────────────────────────────────────────────────────────── */
const PrivacyPolicy = () => {
  const [activeId, setActiveId] = useState("intro");
  const [visible, setVisible] = useState(new Set(["intro"]));

  useEffect(() => {
    const observers = tocItems.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(prev => new Set([...prev, id]));
            setActiveId(id);
          }
        },
        { rootMargin: "-20% 0px -60% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const scrollTo = id =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-screen" style={{ background: "#F3F5FA" }}>

      {/* ── Hero ── */}
      <header
        className="relative overflow-hidden px-6 py-14"
        style={{ background: "linear-gradient(135deg, #1E2C4F 0%, #2C3A59 55%, #2B3A63 100%)" }}
      >
        {/* Decorative glows */}
        <div
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #6C8CD533 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-10 left-1/4 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #9BB6FF1A 0%, transparent 70%)" }}
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Brand pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
            style={{ background: "#6C8CD522", border: "1px solid #6C8CD544", color: "#9BB6FF" }}
          >
            🚖 CabTale
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Privacy Policy
          </h1>

          <div className="flex flex-wrap gap-8">
            {[
              { label: "Effective Date", value: "26 Feb, 2026" },
              { label: "Last Updated",   value: "26 Feb, 2026" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span
                  className="text-xs uppercase tracking-widest font-medium"
                  style={{ color: "#7C8BB3" }}
                >
                  {label}
                </span>
                <span className="text-sm font-medium" style={{ color: "#D6E2FF" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Body layout ── */}
      <div className="max-w-5xl mx-auto px-4 py-10 flex gap-6 items-start">

        {/* ── Sidebar TOC ── */}
        <aside
          className="hidden md:flex flex-col gap-0.5 sticky top-6 self-start rounded-2xl p-4 shrink-0"
          style={{
            width: "220px",
            background: "#FFFFFF",
            border: "1px solid #E0E3EB",
            boxShadow: "0 2px 12px #CBD3E022",
            maxHeight: "calc(100vh - 3rem)",
            overflowY: "auto",
          }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest px-3 mb-3"
            style={{ color: "#8C8FA1" }}
          >
            Contents
          </p>
          {tocItems.map(item => (
            <TocItem
              key={item.id}
              {...item}
              active={activeId === item.id}
              onClick={scrollTo}
            />
          ))}
        </aside>

        {/* ── Content ── */}
        <main className="flex flex-col gap-5 min-w-0 flex-1">

          {/* 1. Introduction */}
          <SectionCard id="intro" visible={visible.has("intro")}>
            <SectionHeading number={1} title="Introduction" />
            <Divider />
            <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#3B4461" }}>
              <p>Welcome to <strong style={{ color: "#1F2A44" }}>CabTale</strong>.</p>
              <p>CabTale ("Company", "we", "our", "us") operates a mobile application and related services that connect passengers with driver partners for intercity and intra-city cab transportation services across India.</p>
              <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the CabTale mobile application and services ("Services").</p>
              <p>By using CabTale, you agree to the terms of this Privacy Policy.</p>
            </div>
          </SectionCard>

          {/* 2. Information We Collect */}
          <SectionCard id="collect" visible={visible.has("collect")}>
            <SectionHeading number={2} title="Information We Collect" />
            <Divider />
            <p className="text-sm" style={{ color: "#3B4461" }}>We may collect the following types of information:</p>
            {[
              {
                label: "A. Personal Information",
                items: ["Full Name", "Phone Number", "Email Address", "Profile Photo (optional)", "Payment Details", "Government ID (for driver partners)"],
              },
              {
                label: "B. Location Information",
                items: ["Real-time GPS location", "Pickup and drop locations", "Travel history"],
              },
              {
                label: "C. Device & Technical Information",
                items: ["Device type", "IP address", "Operating system", "App usage data", "Crash logs"],
              },
              {
                label: "D. Driver Partner Information",
                items: ["Driving License", "Vehicle Registration Certificate", "Insurance details", "Background verification documents", "Bank account details"],
              },
            ].map(({ label, items }) => (
              <div key={label}>
                <SubHeading>{label}</SubHeading>
                <ul className="flex flex-col gap-1.5">
                  {items.map(item => <BulletItem key={item}>{item}</BulletItem>)}
                </ul>
              </div>
            ))}
          </SectionCard>

          {/* 3. How We Use */}
          <SectionCard id="use" visible={visible.has("use")}>
            <SectionHeading number={3} title="How We Use Your Information" />
            <Divider />
            <p className="text-sm mb-3" style={{ color: "#3B4461" }}>We use your information to:</p>
            <ul className="flex flex-col gap-1.5">
              {[
                "Provide and improve CabTale services",
                "Match passengers with drivers",
                "Process payments",
                "Send ride confirmations and updates",
                "Ensure safety and fraud prevention",
                "Comply with legal obligations",
                "Provide customer support",
              ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
            </ul>
          </SectionCard>

          {/* 4. Sharing */}
          <SectionCard id="sharing" visible={visible.has("sharing")}>
            <SectionHeading number={4} title="Sharing of Information" />
            <Divider />
            <p className="text-sm mb-3" style={{ color: "#3B4461" }}>We may share your data with:</p>
            <ul className="flex flex-col gap-1.5">
              {[
                "Driver partners (for ride coordination)",
                "Payment gateway providers",
                "Verification agencies",
                "Government authorities when legally required",
                "Marketing service providers",
              ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
            </ul>
            <CalloutBox>
              We do <strong>not</strong> sell personal data to third parties.
            </CalloutBox>
          </SectionCard>

          {/* 5. Data Security */}
          <SectionCard id="security" visible={visible.has("security")}>
            <SectionHeading number={5} title="Data Security" />
            <Divider />
            <p className="text-sm leading-relaxed" style={{ color: "#3B4461" }}>
              We implement reasonable technical and organizational measures to protect your personal data. However, no system is completely secure, and we cannot guarantee absolute security.
            </p>
          </SectionCard>

          {/* 6. Data Retention */}
          <SectionCard id="retention" visible={visible.has("retention")}>
            <SectionHeading number={6} title="Data Retention" />
            <Divider />
            <p className="text-sm leading-relaxed" style={{ color: "#3B4461" }}>
              We retain your information as long as necessary to provide services and comply with legal obligations.
            </p>
          </SectionCard>

          {/* 7. Your Rights */}
          <SectionCard id="rights" visible={visible.has("rights")}>
            <SectionHeading number={7} title="Your Rights" />
            <Divider />
            <p className="text-sm mb-3 leading-relaxed" style={{ color: "#3B4461" }}>
              Under applicable Indian laws (including the{" "}
              <em style={{ color: "#506490" }}>Digital Personal Data Protection Act, 2023</em>
              ), you may have rights to:
            </p>
            <ul className="flex flex-col gap-1.5 mb-4">
              {["Access your personal data", "Correct inaccurate data", "Request deletion", "Withdraw consent"].map(
                item => <BulletItem key={item}>{item}</BulletItem>
              )}
            </ul>
            <p className="text-sm mb-3" style={{ color: "#3B4461" }}>To exercise these rights, contact us at:</p>
            <ContactLink href="mailto:hello@cabtale.com" icon="✉️" label="hello@cabtale.com" />
          </SectionCard>

          {/* 8. Children's Privacy */}
          <SectionCard id="children" visible={visible.has("children")}>
            <SectionHeading number={8} title="Children's Privacy" />
            <Divider />
            <p className="text-sm leading-relaxed" style={{ color: "#3B4461" }}>
              CabTale services are not intended for individuals under{" "}
              <strong style={{ color: "#1F2A44" }}>18 years of age</strong>.
            </p>
          </SectionCard>

          {/* 9. Changes */}
          <SectionCard id="changes" visible={visible.has("changes")}>
            <SectionHeading number={9} title="Changes to This Policy" />
            <Divider />
            <p className="text-sm leading-relaxed" style={{ color: "#3B4461" }}>
              We may update this Privacy Policy periodically. Continued use of the app after changes means you accept the revised policy.
            </p>
          </SectionCard>

          {/* 10. Contact Us */}
          <SectionCard id="contact" visible={visible.has("contact")}>
            <SectionHeading number={10} title="Contact Us" />
            <Divider />
            <div className="flex flex-col gap-3">
              <ContactLink href="mailto:hello@cabtale.com" icon="✉️" label="hello@cabtale.com" />
              <ContactLink href="tel:+918527664228"        icon="📞" label="+91-8527664228" />
            </div>
          </SectionCard>

          {/* Footer note */}
          <p className="text-center text-xs py-4" style={{ color: "#8C8FA1" }}>
            © 2026 CabTale. All rights reserved. · Governed by the laws of India.
          </p>

        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;