import React, { useState, useEffect } from "react";

/* ── Sub-components ─────────────────────────────────────────────────────── */

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

const CalloutBox = ({ children, variant = "info" }) => {
  const styles = {
    info: { background: "#E1E9FF", border: "#6C8CD5", color: "#1F2A44" },
    warning: { background: "#FEECEC", border: "#FF5C5C", color: "#3A1A1A" },
    success: { background: "#ECEFF6", border: "#384B70", color: "#1F2A44" },
  };
  const s = styles[variant];
  return (
    <div
      className="mt-4 px-4 py-3 rounded-r-lg text-sm leading-relaxed"
      style={{ background: s.background, borderLeft: `3px solid ${s.border}`, color: s.color }}
    >
      {children}
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex items-start gap-3 py-3" style={{ borderBottom: "1px solid #E0E3EB" }}>
    <span className="text-xs font-semibold uppercase tracking-wider shrink-0 mt-0.5 w-28" style={{ color: "#7C8BB3" }}>
      {label}
    </span>
    <span className="text-sm" style={{ color: "#3B4461" }}>{value}</span>
  </div>
);

const ContactLink = ({ href, icon, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
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
  { id: "acceptance",    number: 1,  title: "Acceptance of Terms" },
  { id: "nature",        number: 2,  title: "Nature of Service" },
  { id: "eligibility",   number: 3,  title: "User Eligibility" },
  { id: "user-resp",     number: 4,  title: "User Responsibilities" },
  { id: "driver-resp",   number: 5,  title: "Driver Partner Responsibilities" },
  { id: "payments",      number: 6,  title: "Payments & Pricing" },
  { id: "cancellations", number: 7,  title: "Cancellations & Refunds" },
  { id: "liability",     number: 8,  title: "Limitation of Liability" },
  { id: "termination",   number: 9,  title: "Suspension & Termination" },
  { id: "ip",            number: 10, title: "Intellectual Property" },
  { id: "governing",     number: 11, title: "Governing Law" },
  { id: "dispute",       number: 12, title: "Dispute Resolution" },
];

/* ── Main ───────────────────────────────────────────────────────────────── */
const TermsOfService = () => {
  const [activeId, setActiveId] = useState("acceptance");
  const [visible, setVisible] = useState(new Set(["acceptance"]));

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
        <div
          className="absolute top-1/2 -left-20 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #384B7033 0%, transparent 70%)" }}
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
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Terms of Service
          </h1>

          <p className="text-sm mb-6" style={{ color: "#9BB6FF" }}>
            Please read these terms carefully before using CabTale.
          </p>

          <div className="flex flex-wrap gap-8">
            {[
              { label: "Effective Date", value: "26 Feb, 2026" },
              { label: "Jurisdiction",   value: "New Delhi, India" },
              { label: "Governed By",    value: "Laws of India" },
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

      {/* ── Body ── */}
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

          {/* 1. Acceptance */}
          <SectionCard id="acceptance" visible={visible.has("acceptance")}>
            <SectionHeading number={1} title="Acceptance of Terms" />
            <Divider />
            <p className="text-sm leading-relaxed" style={{ color: "#3B4461" }}>
              By accessing or using CabTale, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
            </p>
            <CalloutBox variant="info">
              Your continued use of CabTale constitutes acceptance of any updates to these terms.
            </CalloutBox>
          </SectionCard>

          {/* 2. Nature of Service */}
          <SectionCard id="nature" visible={visible.has("nature")}>
            <SectionHeading number={2} title="Nature of Service" />
            <Divider />
            <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#3B4461" }}>
              <p>
                CabTale is a <strong style={{ color: "#1F2A44" }}>technology platform</strong> that connects passengers with independent driver partners.
              </p>
              <p>
                CabTale does <strong style={{ color: "#1F2A44" }}>not</strong> own vehicles and does <strong style={{ color: "#1F2A44" }}>not</strong> provide transportation services directly.
              </p>
            </div>
            <CalloutBox variant="success">
              Driver partners are independent contractors, not employees of CabTale.
            </CalloutBox>
          </SectionCard>

          {/* 3. Eligibility */}
          <SectionCard id="eligibility" visible={visible.has("eligibility")}>
            <SectionHeading number={3} title="User Eligibility" />
            <Divider />
            <p className="text-sm mb-3" style={{ color: "#3B4461" }}>To use CabTale, you must:</p>
            <ul className="flex flex-col gap-1.5">
              {[
                "Be at least 18 years old",
                "Provide accurate and current information",
                "Comply with all applicable laws and regulations",
              ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
            </ul>
          </SectionCard>

          {/* 4. User Responsibilities */}
          <SectionCard id="user-resp" visible={visible.has("user-resp")}>
            <SectionHeading number={4} title="User Responsibilities" />
            <Divider />
            <p className="text-sm mb-3" style={{ color: "#3B4461" }}>Users agree:</p>
            <ul className="flex flex-col gap-1.5">
              {[
                "Not to misuse the platform",
                "Not to engage in unlawful behavior",
                "Not to damage vehicles or property",
                "To treat drivers respectfully and professionally",
              ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
            </ul>
            <CalloutBox variant="warning">
              Failure to comply may result in immediate account suspension or termination.
            </CalloutBox>
          </SectionCard>

          {/* 5. Driver Responsibilities */}
          <SectionCard id="driver-resp" visible={visible.has("driver-resp")}>
            <SectionHeading number={5} title="Driver Partner Responsibilities" />
            <Divider />
            <p className="text-sm mb-3" style={{ color: "#3B4461" }}>Driver partners must:</p>
            <ul className="flex flex-col gap-1.5">
              {[
                "Maintain valid licenses and permits at all times",
                "Keep vehicles insured and in roadworthy condition",
                "Follow all applicable traffic laws",
                "Maintain professional conduct with passengers",
              ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
            </ul>
            <CalloutBox variant="warning">
              CabTale may suspend or terminate driver accounts for violations of these responsibilities.
            </CalloutBox>
          </SectionCard>

          {/* 6. Payments & Pricing */}
          <SectionCard id="payments" visible={visible.has("payments")}>
            <SectionHeading number={6} title="Payments & Pricing" />
            <Divider />
            <div className="flex flex-col gap-0 rounded-xl overflow-hidden" style={{ border: "1px solid #E0E3EB" }}>
              <InfoRow label="Fare Basis"       value="Calculated based on distance, time, and applicable charges" />
              <InfoRow label="Dynamic Pricing"  value="Prices may vary based on demand and route conditions" />
              <InfoRow label="Cancellation"     value="Cancellation fees may apply based on timing of cancellation" />
              <InfoRow label="Pricing Changes"  value="CabTale reserves the right to modify pricing at any time" />
            </div>
          </SectionCard>

          {/* 7. Cancellations & Refunds */}
          <SectionCard id="cancellations" visible={visible.has("cancellations")}>
            <SectionHeading number={7} title="Cancellations & Refunds" />
            <Divider />
            <ul className="flex flex-col gap-1.5 mb-4">
              {[
                "Users may cancel rides subject to applicable cancellation charges",
                "Refunds, if applicable, will be processed within 7–10 business days",
              ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
            </ul>
            <CalloutBox variant="info">
              Refund eligibility depends on the timing of the cancellation and the stage of the ride.
            </CalloutBox>
          </SectionCard>

          {/* 8. Limitation of Liability */}
          <SectionCard id="liability" visible={visible.has("liability")}>
            <SectionHeading number={8} title="Limitation of Liability" />
            <Divider />
            <p className="text-sm mb-3" style={{ color: "#3B4461" }}>CabTale is not liable for:</p>
            <ul className="flex flex-col gap-1.5 mb-4">
              {[
                "Driver misconduct or behavior",
                "Loss of personal belongings during a ride",
                "Delays due to traffic, weather, or road conditions",
                "Force majeure events beyond our control",
              ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
            </ul>
            <CalloutBox variant="warning">
              To the maximum extent permitted by law, CabTale's total liability is limited to the amount paid for the specific ride in question.
            </CalloutBox>
          </SectionCard>

          {/* 9. Suspension & Termination */}
          <SectionCard id="termination" visible={visible.has("termination")}>
            <SectionHeading number={9} title="Suspension & Termination" />
            <Divider />
            <p className="text-sm leading-relaxed" style={{ color: "#3B4461" }}>
              CabTale reserves the right to suspend or permanently terminate accounts for violations of these Terms of Service, without prior notice, at our sole discretion.
            </p>
          </SectionCard>

          {/* 10. Intellectual Property */}
          <SectionCard id="ip" visible={visible.has("ip")}>
            <SectionHeading number={10} title="Intellectual Property" />
            <Divider />
            <p className="text-sm leading-relaxed" style={{ color: "#3B4461" }}>
              All trademarks, logos, and content within the CabTale app are the exclusive property of CabTale and may not be reproduced, distributed, or used without prior written permission.
            </p>
            <CalloutBox variant="info">
              Unauthorised use of CabTale's intellectual property may result in legal action.
            </CalloutBox>
          </SectionCard>

          {/* 11. Governing Law */}
          <SectionCard id="governing" visible={visible.has("governing")}>
            <SectionHeading number={11} title="Governing Law" />
            <Divider />
            <div className="flex flex-col gap-0 rounded-xl overflow-hidden" style={{ border: "1px solid #E0E3EB" }}>
              <InfoRow label="Governed By"  value="Laws of India" />
              <InfoRow label="Jurisdiction" value="New Delhi, India" />
            </div>
          </SectionCard>

          {/* 12. Dispute Resolution */}
          <SectionCard id="dispute" visible={visible.has("dispute")}>
            <SectionHeading number={12} title="Dispute Resolution" />
            <Divider />
            <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#3B4461" }}>
              <p>
                Disputes shall first be attempted to be resolved <strong style={{ color: "#1F2A44" }}>amicably</strong> through direct communication between the parties.
              </p>
              <p>
                If unresolved, disputes shall be subject to <strong style={{ color: "#1F2A44" }}>arbitration</strong> under applicable Indian Arbitration laws.
              </p>
            </div>
            <CalloutBox variant="info">
              For disputes or queries, reach out to us first at the contact details below.
            </CalloutBox>

            <SubHeading>Contact for Disputes</SubHeading>
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

export default TermsOfService;