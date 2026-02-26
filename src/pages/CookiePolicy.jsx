// import React, { useState, useEffect } from "react";

// /* ── SVG Icons ──────────────────────────────────────────────────────────── */

// const IconShield = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//   </svg>
// );

// const IconBarChart = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <line x1="18" y1="20" x2="18" y2="10" />
//     <line x1="12" y1="20" x2="12" y2="4" />
//     <line x1="6"  y1="20" x2="6"  y2="14" />
//   </svg>
// );

// const IconSliders = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <line x1="4" y1="21" x2="4" y2="14" />
//     <line x1="4" y1="10" x2="4" y2="3" />
//     <line x1="12" y1="21" x2="12" y2="12" />
//     <line x1="12" y1="8" x2="12" y2="3" />
//     <line x1="20" y1="21" x2="20" y2="16" />
//     <line x1="20" y1="12" x2="20" y2="3" />
//     <line x1="1"  y1="14" x2="7"  y2="14" />
//     <line x1="9"  y1="8"  x2="15" y2="8" />
//     <line x1="17" y1="16" x2="23" y2="16" />
//   </svg>
// );

// const IconLink = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
//     <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
//   </svg>
// );

// const IconMonitor = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
//     <line x1="8" y1="21" x2="16" y2="21" />
//     <line x1="12" y1="17" x2="12" y2="21" />
//   </svg>
// );

// const IconSmartphone = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
//     <line x1="12" y1="18" x2="12.01" y2="18" />
//   </svg>
// );

// const IconBookmark = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
//   </svg>
// );

// const IconMail = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//     <polyline points="22,6 12,13 2,6" />
//   </svg>
// );

// const IconPhone = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//   </svg>
// );

// /* ── Sub-components ─────────────────────────────────────────────────────── */

// const SectionHeading = ({ number, title }) => (
//   <div className="flex items-center gap-3 mb-4">
//     <span
//       className="text-xs font-bold tracking-widest shrink-0"
//       style={{ color: "#6C8CD5" }}
//     >
//       {String(number).padStart(2, "0")}
//     </span>
//     <h2
//       className="text-xl font-bold leading-snug"
//       style={{ color: "#1F2A44", fontFamily: "'Georgia', serif" }}
//     >
//       {title}
//     </h2>
//   </div>
// );

// const Divider = () => (
//   <hr className="my-4 border-0 border-t" style={{ borderColor: "#E0E3EB" }} />
// );

// const BulletItem = ({ children }) => (
//   <li className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "#3B4461" }}>
//     <span
//       className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
//       style={{ background: "#6C8CD5" }}
//     />
//     {children}
//   </li>
// );

// const CalloutBox = ({ children, variant = "info" }) => {
//   const styles = {
//     info:    { background: "#E1E9FF", border: "#6C8CD5", color: "#1F2A44" },
//     warning: { background: "#FEECEC", border: "#FF5C5C", color: "#3A1A1A" },
//     success: { background: "#ECEFF6", border: "#384B70", color: "#1F2A44" },
//   };
//   const s = styles[variant];
//   return (
//     <div
//       className="mt-4 px-4 py-3 rounded-r-lg text-sm leading-relaxed"
//       style={{ background: s.background, borderLeft: `3px solid ${s.border}`, color: s.color }}
//     >
//       {children}
//     </div>
//   );
// };

// const ContactLink = ({ href, icon, label }) => {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <a
//       href={href}
//       className="inline-flex items-center gap-2.5 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
//       style={{
//         background: hovered ? "#D6E2FF" : "#ECEFF6",
//         border: `1.5px solid ${hovered ? "#6C8CD5" : "#E0E3EB"}`,
//         color: "#384B70",
//         textDecoration: "none",
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <span style={{ color: "#6C8CD5", display: "flex" }}>{icon}</span>
//       {label}
//     </a>
//   );
// };

// /* ── Cookie Type Card ───────────────────────────────────────────────────── */
// const CookieTypeCard = ({ icon, label, tag, tagColor, tagBg, iconColor, children }) => (
//   <div
//     className="rounded-xl p-5"
//     style={{ background: "#F8F9FC", border: "1px solid #E0E3EB" }}
//   >
//     <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
//       <div className="flex items-center gap-2.5">
//         <span
//           className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
//           style={{ background: tagBg, color: iconColor || tagColor }}
//         >
//           {icon}
//         </span>
//         <span className="text-sm font-semibold" style={{ color: "#1F2A44" }}>
//           {label}
//         </span>
//       </div>
//       <span
//         className="text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide"
//         style={{ background: tagBg, color: tagColor }}
//       >
//         {tag}
//       </span>
//     </div>
//     <ul className="flex flex-col gap-1.5">{children}</ul>
//   </div>
// );

// /* ── TOC item ───────────────────────────────────────────────────────────── */
// const TocItem = ({ number, title, id, active, onClick }) => (
//   <button
//     onClick={() => onClick(id)}
//     className="flex items-center gap-2.5 w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 border-none cursor-pointer"
//     style={{
//       background: active ? "#E1E9FF" : "transparent",
//       color: active ? "#1F2A44" : "#8C8FA1",
//       fontWeight: active ? 600 : 400,
//     }}
//   >
//     <span
//       className="text-xs font-bold tracking-widest w-5 shrink-0"
//       style={{ color: active ? "#6C8CD5" : "#7C8BB3" }}
//     >
//       {String(number).padStart(2, "0")}
//     </span>
//     <span className="leading-snug">{title}</span>
//     {active && (
//       <span
//         className="ml-auto w-1.5 h-1.5 rounded-full shrink-0"
//         style={{ background: "#6C8CD5" }}
//       />
//     )}
//   </button>
// );

// /* ── Section card ───────────────────────────────────────────────────────── */
// const SectionCard = ({ id, children, visible }) => (
//   <section
//     id={id}
//     className="rounded-2xl p-8 transition-all duration-500"
//     style={{
//       background: "#FFFFFF",
//       border: "1px solid #E0E3EB",
//       boxShadow: "0 2px 12px #CBD3E022",
//       opacity: visible ? 1 : 0,
//       transform: visible ? "translateY(0)" : "translateY(16px)",
//       scrollMarginTop: "5rem",
//     }}
//   >
//     {children}
//   </section>
// );

// /* ── TOC config ─────────────────────────────────────────────────────────── */
// const tocItems = [
//   { id: "intro",   number: 1, title: "Introduction" },
//   { id: "what",    number: 2, title: "What Are Cookies?" },
//   { id: "why",     number: 3, title: "Why We Use Cookies" },
//   { id: "types",   number: 4, title: "Types of Cookies" },
//   { id: "control", number: 5, title: "How You Can Control Cookies" },
//   { id: "security",number: 6, title: "Data Security" },
//   { id: "updates", number: 7, title: "Updates to This Policy" },
//   { id: "contact", number: 8, title: "Contact Us" },
// ];

// /* ── Main ───────────────────────────────────────────────────────────────── */
// const CookiePolicy = () => {
//   const [activeId, setActiveId] = useState("intro");
//   const [visible, setVisible] = useState(new Set(["intro"]));

//   useEffect(() => {
//     const observers = tocItems.map(({ id }) => {
//       const el = document.getElementById(id);
//       if (!el) return null;
//       const obs = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setVisible(prev => new Set([...prev, id]));
//             setActiveId(id);
//           }
//         },
//         { rootMargin: "-20% 0px -60% 0px" }
//       );
//       obs.observe(el);
//       return obs;
//     });
//     return () => observers.forEach(o => o?.disconnect());
//   }, []);

//   const scrollTo = id =>
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

//   return (
//     <div className="min-h-screen" style={{ background: "#F3F5FA" }}>

//       {/* ── Hero ── */}
//       <header
//         className="relative overflow-hidden px-6 py-14"
//         style={{ background: "linear-gradient(135deg, #1E2C4F 0%, #2C3A59 55%, #2B3A63 100%)" }}
//       >
//         <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(circle, #6C8CD533 0%, transparent 70%)" }} />
//         <div className="absolute -bottom-10 left-1/4 w-48 h-48 rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(circle, #9BB6FF1A 0%, transparent 70%)" }} />
//         <div className="absolute top-1/2 -left-20 w-56 h-56 rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(circle, #384B7033 0%, transparent 70%)" }} />

//         <div className="relative max-w-5xl mx-auto">
//           {/* Brand pill */}
//           <div
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
//             style={{ background: "#6C8CD522", border: "1px solid #6C8CD544", color: "#9BB6FF" }}
//           >
//             CabTale
//           </div>

//           <h1
//             className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
//             style={{ fontFamily: "'Georgia', serif" }}
//           >
//             Cookie Policy
//           </h1>

//           <p className="text-sm mb-6" style={{ color: "#9BB6FF" }}>
//             How we use cookies to improve your CabTale experience.
//           </p>

//           <div className="flex flex-wrap gap-8">
//             {[
//               { label: "Last Updated", value: "26 Feb, 2026" },
//               { label: "Applies To",   value: "Website & App" },
//             ].map(({ label, value }) => (
//               <div key={label} className="flex flex-col gap-0.5">
//                 <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "#7C8BB3" }}>
//                   {label}
//                 </span>
//                 <span className="text-sm font-medium" style={{ color: "#D6E2FF" }}>
//                   {value}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </header>

//       {/* ── Body ── */}
//       <div className="max-w-5xl mx-auto px-4 py-10 flex gap-6 items-start">

//         {/* ── Sidebar TOC ── */}
//         <aside
//           className="hidden md:flex flex-col gap-0.5 sticky top-6 self-start rounded-2xl p-4 shrink-0"
//           style={{
//             width: "220px",
//             background: "#FFFFFF",
//             border: "1px solid #E0E3EB",
//             boxShadow: "0 2px 12px #CBD3E022",
//             maxHeight: "calc(100vh - 3rem)",
//             overflowY: "auto",
//           }}
//         >
//           <p className="text-xs font-bold uppercase tracking-widest px-3 mb-3" style={{ color: "#8C8FA1" }}>
//             Contents
//           </p>
//           {tocItems.map(item => (
//             <TocItem
//               key={item.id}
//               {...item}
//               active={activeId === item.id}
//               onClick={scrollTo}
//             />
//           ))}
//         </aside>

//         {/* ── Content ── */}
//         <main className="flex flex-col gap-5 min-w-0 flex-1">

//           {/* 1. Introduction */}
//           <SectionCard id="intro" visible={visible.has("intro")}>
//             <SectionHeading number={1} title="Introduction" />
//             <Divider />
//             <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#3B4461" }}>
//               <p>
//                 This Cookie Policy explains how <strong style={{ color: "#1F2A44" }}>CabTale</strong> ("we," "our," or "us") uses cookies and similar technologies when you visit our website and use our cab booking services.
//               </p>
//               <p>
//                 By continuing to use our website, you agree to the use of cookies in accordance with this policy.
//               </p>
//             </div>
//           </SectionCard>

//           {/* 2. What Are Cookies */}
//           <SectionCard id="what" visible={visible.has("what")}>
//             <SectionHeading number={2} title="What Are Cookies?" />
//             <Divider />
//             <p className="text-sm leading-relaxed mb-5" style={{ color: "#3B4461" }}>
//               Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites function properly and improve user experience by remembering your preferences and activity.
//             </p>

//             {/* Visual explainer — SVG icons replace emojis */}
//             <div className="grid grid-cols-3 gap-3">
//               {[
//                 { icon: <IconMonitor />,    label: "Computer",    desc: "Stored in browser" },
//                 { icon: <IconSmartphone />, label: "Mobile",      desc: "Stored in app/browser" },
//                 { icon: <IconBookmark />,   label: "Preferences", desc: "Remembers your choices" },
//               ].map(({ icon, label, desc }) => (
//                 <div
//                   key={label}
//                   className="flex flex-col items-center text-center gap-2 p-4 rounded-xl"
//                   style={{ background: "#F8F9FC", border: "1px solid #E0E3EB" }}
//                 >
//                   <span
//                     className="flex items-center justify-center w-10 h-10 rounded-xl"
//                     style={{ background: "#E1E9FF", color: "#6C8CD5" }}
//                   >
//                     {icon}
//                   </span>
//                   <span className="text-xs font-semibold" style={{ color: "#384B70" }}>{label}</span>
//                   <span className="text-xs" style={{ color: "#8C8FA1" }}>{desc}</span>
//                 </div>
//               ))}
//             </div>
//           </SectionCard>

//           {/* 3. Why We Use Cookies */}
//           <SectionCard id="why" visible={visible.has("why")}>
//             <SectionHeading number={3} title="Why We Use Cookies" />
//             <Divider />
//             <p className="text-sm mb-3" style={{ color: "#3B4461" }}>CabTale uses cookies to:</p>
//             <ul className="flex flex-col gap-1.5">
//               {[
//                 "Enable secure ride bookings",
//                 "Maintain user login sessions",
//                 "Store ride and location preferences",
//                 "Improve website performance",
//                 "Analyze user behavior to enhance services",
//                 "Ensure security and prevent fraudulent activity",
//               ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
//             </ul>
//           </SectionCard>

//           {/* 4. Types of Cookies */}
//           <SectionCard id="types" visible={visible.has("types")}>
//             <SectionHeading number={4} title="Types of Cookies We Use" />
//             <Divider />

//             <div className="flex flex-col gap-4">

//               {/* 4.1 Essential */}
//               <CookieTypeCard
//                 icon={<IconShield />}
//                 label="Essential Cookies"
//                 tag="Strictly Necessary"
//                 tagColor="#1E2C4F"
//                 tagBg="#D6E2FF"
//                 iconColor="#384B70"
//               >
//                 {[
//                   "Ride booking functionality",
//                   "Secure login and authentication",
//                   "Payment processing",
//                   "Session management",
//                   "Security and fraud prevention",
//                 ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
//               </CookieTypeCard>
//               <CalloutBox variant="warning">
//                 Without essential cookies, certain features of the website — including booking — will not function correctly.
//               </CalloutBox>

//               {/* 4.2 Performance */}
//               <CookieTypeCard
//                 icon={<IconBarChart />}
//                 label="Performance & Analytics Cookies"
//                 tag="Anonymous Data"
//                 tagColor="#2C3A59"
//                 tagBg="#E1E9FF"
//                 iconColor="#2C3A59"
//               >
//                 {[
//                   "Understand traffic patterns",
//                   "Improve navigation and booking flow",
//                   "Optimize website performance",
//                 ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
//               </CookieTypeCard>
//               <p className="text-xs leading-relaxed px-1" style={{ color: "#7C8BB3" }}>
//                 If analytics tools (such as Google Analytics) are used, they may set cookies to collect anonymous usage data.
//               </p>

//               {/* 4.3 Functional */}
//               <CookieTypeCard
//                 icon={<IconSliders />}
//                 label="Functional Cookies"
//                 tag="Preference Based"
//                 tagColor="#384B70"
//                 tagBg="#ECEFF6"
//                 iconColor="#384B70"
//               >
//                 {[
//                   "Pickup and drop preferences",
//                   "User settings and configurations",
//                   "Device or browser preferences",
//                 ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
//               </CookieTypeCard>

//               {/* 4.4 Third-Party */}
//               <CookieTypeCard
//                 icon={<IconLink />}
//                 label="Third-Party Cookies"
//                 tag="External Services"
//                 tagColor="#506490"
//                 tagBg="#F3F5FA"
//                 iconColor="#506490"
//               >
//                 {[
//                   "Payment gateways",
//                   "Map services (e.g., route and location tools)",
//                   "Chat or customer support tools",
//                   "Analytics providers",
//                 ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
//               </CookieTypeCard>
//               <p className="text-xs leading-relaxed px-1" style={{ color: "#7C8BB3" }}>
//                 These third parties may collect information in accordance with their own privacy policies.
//               </p>

//             </div>
//           </SectionCard>

//           {/* 5. How to Control */}
//           <SectionCard id="control" visible={visible.has("control")}>
//             <SectionHeading number={5} title="How You Can Control Cookies" />
//             <Divider />
//             <p className="text-sm mb-3 leading-relaxed" style={{ color: "#3B4461" }}>
//               You can manage or disable cookies through your browser settings. Most browsers allow you to:
//             </p>
//             <ul className="flex flex-col gap-1.5 mb-4">
//               {[
//                 "View all stored cookies",
//                 "Delete existing cookies",
//                 "Block certain types of cookies",
//                 "Disable all cookies entirely",
//               ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
//             </ul>
//             <CalloutBox variant="warning">
//               Disabling essential cookies may affect the functionality of the ride booking system and other core features.
//             </CalloutBox>
//           </SectionCard>

//           {/* 6. Data Security */}
//           <SectionCard id="security" visible={visible.has("security")}>
//             <SectionHeading number={6} title="Data Security" />
//             <Divider />
//             <p className="text-sm leading-relaxed" style={{ color: "#3B4461" }}>
//               We use appropriate security measures to protect data collected through cookies. However, no online transmission is completely secure, and users should exercise caution while browsing.
//             </p>
//             <CalloutBox variant="info">
//               For more details on how we handle your data overall, please refer to our{" "}
//               <a href="/privacy-policy" style={{ color: "#6C8CD5", fontWeight: 600, textDecoration: "none" }}>
//                 Privacy Policy
//               </a>.
//             </CalloutBox>
//           </SectionCard>

//           {/* 7. Updates */}
//           <SectionCard id="updates" visible={visible.has("updates")}>
//             <SectionHeading number={7} title="Updates to This Cookie Policy" />
//             <Divider />
//             <p className="text-sm leading-relaxed" style={{ color: "#3B4461" }}>
//               We may update this Cookie Policy from time to time to reflect changes in legal requirements or our services. Any updates will be posted on this page with a revised "Last Updated" date.
//             </p>
//             <CalloutBox variant="success">
//               We recommend reviewing this policy periodically to stay informed about how we use cookies.
//             </CalloutBox>
//           </SectionCard>

//           {/* 8. Contact */}
//           <SectionCard id="contact" visible={visible.has("contact")}>
//             <SectionHeading number={8} title="Contact Us" />
//             <Divider />
//             <p className="text-sm mb-4 leading-relaxed" style={{ color: "#3B4461" }}>
//               If you have any questions about our Cookie Policy, you may contact us at:
//             </p>
//             <div className="flex flex-col gap-3">
//               <ContactLink href="mailto:support@cabtale.com" icon={<IconMail />} label="support@cabtale.com" />
//               <ContactLink href="tel:+918527664228"          icon={<IconPhone />} label="+91-8527664228" />
//             </div>
//           </SectionCard>

//           {/* Footer */}
//           <p className="text-center text-xs py-4" style={{ color: "#8C8FA1" }}>
//             © 2026 CabTale. All rights reserved. · Governed by the laws of India.
//           </p>

//         </main>
//       </div>
//     </div>
//   );
// };

// export default CookiePolicy;


























import React, { useState, useEffect } from "react";

/* ── SVG Icons ──────────────────────────────────────────────────────────── */

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconBarChart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6"  y1="20" x2="6"  y2="14" />
  </svg>
);

const IconSliders = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1"  y1="14" x2="7"  y2="14" />
    <line x1="9"  y1="8"  x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
);

const IconLink = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const IconMonitor = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const IconSmartphone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const IconBookmark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

const IconMail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconPhone = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

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

const CalloutBox = ({ children, variant = "info" }) => {
  const styles = {
    info:    { background: "#E1E9FF", border: "#6C8CD5", color: "#1F2A44" },
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

const ContactLink = ({ href, icon, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2.5 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
      style={{
        background: hovered ? "#D6E2FF" : "#ECEFF6",
        border: `1.5px solid ${hovered ? "#6C8CD5" : "#E0E3EB"}`,
        color: "#384B70",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ color: "#6C8CD5", display: "flex" }}>{icon}</span>
      {label}
    </a>
  );
};

/* ── Cookie Type Card ───────────────────────────────────────────────────── */
const CookieTypeCard = ({ icon, label, tag, tagColor, tagBg, iconColor, children }) => (
  <div
    className="rounded-xl p-5"
    style={{ background: "#F8F9FC", border: "1px solid #E0E3EB" }}
  >
    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
      <div className="flex items-center gap-2.5">
        <span
          className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
          style={{ background: tagBg, color: iconColor || tagColor }}
        >
          {icon}
        </span>
        <span className="text-sm font-semibold" style={{ color: "#1F2A44" }}>
          {label}
        </span>
      </div>
      <span
        className="text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide"
        style={{ background: tagBg, color: tagColor }}
      >
        {tag}
      </span>
    </div>
    <ul className="flex flex-col gap-1.5">{children}</ul>
  </div>
);

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

/* ── Section card — no animation ────────────────────────────────────────── */
const SectionCard = ({ id, children }) => (
  <section
    id={id}
    className="rounded-2xl p-8"
    style={{
      background: "#FFFFFF",
      border: "1px solid #E0E3EB",
      boxShadow: "0 2px 12px #CBD3E022",
      scrollMarginTop: "5rem",
    }}
  >
    {children}
  </section>
);

/* ── TOC config ─────────────────────────────────────────────────────────── */
const tocItems = [
  { id: "intro",    number: 1, title: "Introduction" },
  { id: "what",     number: 2, title: "What Are Cookies?" },
  { id: "why",      number: 3, title: "Why We Use Cookies" },
  { id: "types",    number: 4, title: "Types of Cookies" },
  { id: "control",  number: 5, title: "How You Can Control Cookies" },
  { id: "security", number: 6, title: "Data Security" },
  { id: "updates",  number: 7, title: "Updates to This Policy" },
  { id: "contact",  number: 8, title: "Contact Us" },
];

/* ── Main ───────────────────────────────────────────────────────────────── */
const CookiePolicy = () => {
  const [activeId, setActiveId] = useState("intro");

  useEffect(() => {
    const observers = tocItems.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
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
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #6C8CD533 0%, transparent 70%)" }} />
        <div className="absolute -bottom-10 left-1/4 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #9BB6FF1A 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 -left-20 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #384B7033 0%, transparent 70%)" }} />

        <div className="relative max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
            style={{ background: "#6C8CD522", border: "1px solid #6C8CD544", color: "#9BB6FF" }}
          >
            CabTale
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Cookie Policy
          </h1>

          <p className="text-sm mb-6" style={{ color: "#9BB6FF" }}>
            How we use cookies to improve your CabTale experience.
          </p>

          <div className="flex flex-wrap gap-8">
            {[
              { label: "Last Updated", value: "26 Feb, 2026" },
              { label: "Applies To",   value: "Website & App" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "#7C8BB3" }}>
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
          <p className="text-xs font-bold uppercase tracking-widest px-3 mb-3" style={{ color: "#8C8FA1" }}>
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
          <SectionCard id="intro">
            <SectionHeading number={1} title="Introduction" />
            <Divider />
            <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#3B4461" }}>
              <p>
                This Cookie Policy explains how <strong style={{ color: "#1F2A44" }}>CabTale</strong> ("we," "our," or "us") uses cookies and similar technologies when you visit our website and use our cab booking services.
              </p>
              <p>
                By continuing to use our website, you agree to the use of cookies in accordance with this policy.
              </p>
            </div>
          </SectionCard>

          {/* 2. What Are Cookies */}
          <SectionCard id="what">
            <SectionHeading number={2} title="What Are Cookies?" />
            <Divider />
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#3B4461" }}>
              Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites function properly and improve user experience by remembering your preferences and activity.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: <IconMonitor />,    label: "Computer",    desc: "Stored in browser" },
                { icon: <IconSmartphone />, label: "Mobile",      desc: "Stored in app/browser" },
                { icon: <IconBookmark />,   label: "Preferences", desc: "Remembers your choices" },
              ].map(({ icon, label, desc }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-2 p-4 rounded-xl"
                  style={{ background: "#F8F9FC", border: "1px solid #E0E3EB" }}
                >
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{ background: "#E1E9FF", color: "#6C8CD5" }}
                  >
                    {icon}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: "#384B70" }}>{label}</span>
                  <span className="text-xs" style={{ color: "#8C8FA1" }}>{desc}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* 3. Why We Use Cookies */}
          <SectionCard id="why">
            <SectionHeading number={3} title="Why We Use Cookies" />
            <Divider />
            <p className="text-sm mb-3" style={{ color: "#3B4461" }}>CabTale uses cookies to:</p>
            <ul className="flex flex-col gap-1.5">
              {[
                "Enable secure ride bookings",
                "Maintain user login sessions",
                "Store ride and location preferences",
                "Improve website performance",
                "Analyze user behavior to enhance services",
                "Ensure security and prevent fraudulent activity",
              ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
            </ul>
          </SectionCard>

          {/* 4. Types of Cookies */}
          <SectionCard id="types">
            <SectionHeading number={4} title="Types of Cookies We Use" />
            <Divider />
            <div className="flex flex-col gap-4">

              <CookieTypeCard
                icon={<IconShield />}
                label="Essential Cookies"
                tag="Strictly Necessary"
                tagColor="#1E2C4F"
                tagBg="#D6E2FF"
                iconColor="#384B70"
              >
                {[
                  "Ride booking functionality",
                  "Secure login and authentication",
                  "Payment processing",
                  "Session management",
                  "Security and fraud prevention",
                ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
              </CookieTypeCard>
              <CalloutBox variant="warning">
                Without essential cookies, certain features of the website — including booking — will not function correctly.
              </CalloutBox>

              <CookieTypeCard
                icon={<IconBarChart />}
                label="Performance & Analytics Cookies"
                tag="Anonymous Data"
                tagColor="#2C3A59"
                tagBg="#E1E9FF"
                iconColor="#2C3A59"
              >
                {[
                  "Understand traffic patterns",
                  "Improve navigation and booking flow",
                  "Optimize website performance",
                ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
              </CookieTypeCard>
              <p className="text-xs leading-relaxed px-1" style={{ color: "#7C8BB3" }}>
                If analytics tools (such as Google Analytics) are used, they may set cookies to collect anonymous usage data.
              </p>

              <CookieTypeCard
                icon={<IconSliders />}
                label="Functional Cookies"
                tag="Preference Based"
                tagColor="#384B70"
                tagBg="#ECEFF6"
                iconColor="#384B70"
              >
                {[
                  "Pickup and drop preferences",
                  "User settings and configurations",
                  "Device or browser preferences",
                ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
              </CookieTypeCard>

              <CookieTypeCard
                icon={<IconLink />}
                label="Third-Party Cookies"
                tag="External Services"
                tagColor="#506490"
                tagBg="#F3F5FA"
                iconColor="#506490"
              >
                {[
                  "Payment gateways",
                  "Map services (e.g., route and location tools)",
                  "Chat or customer support tools",
                  "Analytics providers",
                ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
              </CookieTypeCard>
              <p className="text-xs leading-relaxed px-1" style={{ color: "#7C8BB3" }}>
                These third parties may collect information in accordance with their own privacy policies.
              </p>

            </div>
          </SectionCard>

          {/* 5. How to Control */}
          <SectionCard id="control">
            <SectionHeading number={5} title="How You Can Control Cookies" />
            <Divider />
            <p className="text-sm mb-3 leading-relaxed" style={{ color: "#3B4461" }}>
              You can manage or disable cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="flex flex-col gap-1.5 mb-4">
              {[
                "View all stored cookies",
                "Delete existing cookies",
                "Block certain types of cookies",
                "Disable all cookies entirely",
              ].map(item => <BulletItem key={item}>{item}</BulletItem>)}
            </ul>
            <CalloutBox variant="warning">
              Disabling essential cookies may affect the functionality of the ride booking system and other core features.
            </CalloutBox>
          </SectionCard>

          {/* 6. Data Security */}
          <SectionCard id="security">
            <SectionHeading number={6} title="Data Security" />
            <Divider />
            <p className="text-sm leading-relaxed" style={{ color: "#3B4461" }}>
              We use appropriate security measures to protect data collected through cookies. However, no online transmission is completely secure, and users should exercise caution while browsing.
            </p>
            <CalloutBox variant="info">
              For more details on how we handle your data overall, please refer to our{" "}
              <a href="/privacy-policy" style={{ color: "#6C8CD5", fontWeight: 600, textDecoration: "none" }}>
                Privacy Policy
              </a>.
            </CalloutBox>
          </SectionCard>

          {/* 7. Updates */}
          <SectionCard id="updates">
            <SectionHeading number={7} title="Updates to This Cookie Policy" />
            <Divider />
            <p className="text-sm leading-relaxed" style={{ color: "#3B4461" }}>
              We may update this Cookie Policy from time to time to reflect changes in legal requirements or our services. Any updates will be posted on this page with a revised "Last Updated" date.
            </p>
            <CalloutBox variant="success">
              We recommend reviewing this policy periodically to stay informed about how we use cookies.
            </CalloutBox>
          </SectionCard>

          {/* 8. Contact */}
          <SectionCard id="contact">
            <SectionHeading number={8} title="Contact Us" />
            <Divider />
            <p className="text-sm mb-4 leading-relaxed" style={{ color: "#3B4461" }}>
              If you have any questions about our Cookie Policy, you may contact us at:
            </p>
            <div className="flex flex-col gap-3">
              <ContactLink href="mailto:support@cabtale.com" icon={<IconMail />}  label="support@cabtale.com" />
              <ContactLink href="tel:+918527664228"          icon={<IconPhone />} label="+91-8527664228" />
            </div>
          </SectionCard>

          {/* Footer */}
          <p className="text-center text-xs py-4" style={{ color: "#8C8FA1" }}>
            © 2026 CabTale. All rights reserved. · Governed by the laws of India.
          </p>

        </main>
      </div>
    </div>
  );
};

export default CookiePolicy;