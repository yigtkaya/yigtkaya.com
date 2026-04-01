"use client";

import { useEffect } from "react";

const tickerItems = [
  "FastAPI", "Flutter", "HarmonyOS", "TypeScript", "Jenkins CI/CD",
  "AWS", "Android", "Solidity", "Riverpod", "Clean Architecture", "Docker", "Bloc",
];

export default function Home() {
  useEffect(() => {
    // Cursor glow
    const glow = document.getElementById("glow");
    const handleMouse = (e: MouseEvent) => {
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", handleMouse);

    // Scroll reveal
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("on"), i * 60);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -20px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

    return () => {
      document.removeEventListener("mousemove", handleMouse);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" id="glow" />

      {/* Header */}
      <header>
        <div className="h-logo">
          <span>HYK</span> — Portfolio
        </div>
        <nav>
          <a href="#experience">Work</a>
          <a href="#skills">Stack</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="h-status">
          <span className="status-dot" />
          Available
        </div>
      </header>

      {/* Hero */}
      <section id="hero">
        <div className="hero-main">
          <div className="hero-left">
            <div>
              <p className="hero-tag">
                [ <span>Software Engineer</span> · Istanbul, TR ]
              </p>
              <h1>
                HASAN
                <br />
                <span className="outline">YIGIT</span>
                <br />
                <span className="yellow">KAYA</span>
              </h1>
              <p className="hero-sub">
                Backend systems, mobile apps, developer tooling. 3+ years
                shipping code that holds up under real conditions.
              </p>
              <div className="hero-cta-row">
                <a href="#contact" className="btn btn-fill">
                  Get in touch
                </a>
                <a href="#experience" className="btn btn-ghost">
                  See my work
                </a>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="stat-block">
              <div className="stat-num">3+</div>
              <div className="stat-label">Years experience</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">600</div>
              <div className="stat-label">Test cases automated</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">4</div>
              <div className="stat-label">Companies worked at</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">7.5</div>
              <div className="stat-label">IELTS band score</div>
            </div>
          </div>
        </div>

        <div className="hero-strip">
          <div className="strip-cell">
            Currently at <strong>Huawei</strong>
          </div>
          <div className="strip-cell">
            Stack <strong>FastAPI · Flutter · TS</strong>
          </div>
          <div className="strip-cell">
            Location <strong>Istanbul 🇹🇷</strong>
          </div>
          <div className="strip-cell">
            English <strong>C1 — IELTS 7.5</strong>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <section className="section" id="experience">
        <div className="section-bar">
          <span className="section-num">01</span>
          <span className="section-title-bar">Work Experience</span>
          <div className="section-line" />
        </div>
        <h2 className="reveal">
          EXP<span className="out">ERIENCE</span>
        </h2>

        <div className="exp-item reveal">
          <div className="exp-meta">
            <div className="exp-co">Huawei</div>
            <div className="exp-period">MAR 2025 → NOW</div>
            <div className="exp-now">Current</div>
          </div>
          <div className="exp-body">
            <h3 className="exp-role">Software Developer</h3>
            <p className="exp-desc">
              Building production REST APIs with FastAPI. Developing smartwatch
              and cross-platform apps in HarmonyOS with TypeScript. Automated
              600+ UI test cases on OpenHarmony with Hypium/TestKit. Implemented
              full Jenkins CI/CD pipeline and built internal log-analysis
              tooling. Contributing to developer docs and community forums.
            </p>
          </div>
          <div className="exp-right">
            {["FastAPI", "TypeScript", "HarmonyOS", "Jenkins", "OpenHarmony", "CI/CD"].map((t) => (
              <span key={t} className="exp-tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="exp-item reveal">
          <div className="exp-meta">
            <div className="exp-co">Mobilist</div>
            <div className="exp-period">NOV 2023 → MAR 2025</div>
          </div>
          <div className="exp-body">
            <h3 className="exp-role">Flutter Developer</h3>
            <p className="exp-desc">
              Delivered four production apps: Parakolay (fintech Flutter Web +
              Riverpod), Amber (events app with Google Maps + live location),
              Kerim Çelik (full e-commerce built from scratch), and Velox
              (factory production app with thermal printer integration). Code
              reviews, clean arch refactors, and deep link implementations
              throughout.
            </p>
          </div>
          <div className="exp-right">
            {["Flutter", "Dart", "Riverpod", "Google Maps", "Navigator 2.0"].map((t) => (
              <span key={t} className="exp-tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="exp-item reveal">
          <div className="exp-meta">
            <div className="exp-co">Intertech</div>
            <div className="exp-period">SEP 2022 → AUG 2023</div>
          </div>
          <div className="exp-body">
            <h3 className="exp-role">Android Developer</h3>
            <p className="exp-desc">
              Led Android 13→14 migration, replaced GetX with Bloc, maintained
              legacy features. Simultaneously ran a blockchain internship: DeFi
              protocol research, writing/auditing Solidity smart contracts with
              Hardhat, and joined live mobile project RADAR.
            </p>
          </div>
          <div className="exp-right">
            {["Android", "Kotlin", "Bloc", "Solidity", "Hardhat"].map((t) => (
              <span key={t} className="exp-tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="exp-item reveal">
          <div className="exp-meta">
            <div className="exp-co">Mobven</div>
            <div className="exp-period">JAN 2022 → FEB 2022</div>
          </div>
          <div className="exp-body">
            <h3 className="exp-role">Android Intern</h3>
            <p className="exp-desc">
              Monitored and optimized live Android app performance at code level.
              Fixed bottlenecks and bugs. First exposure to production mobile
              engineering.
            </p>
          </div>
          <div className="exp-right">
            {["Android", "Kotlin"].map((t) => (
              <span key={t} className="exp-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <div className="section-bar">
          <span className="section-num">02</span>
          <span className="section-title-bar">Tech Stack</span>
          <div className="section-line" />
        </div>
        <h2 className="reveal">
          THE <span className="out">STACK</span>
        </h2>

        <div className="skills-grid">
          {[
            { cat: "Backend", name: "API & Infra", items: ["FastAPI", "REST APIs", "Docker", "Jenkins", "AWS", "CI/CD", "Performance tuning"] },
            { cat: "Mobile", name: "Cross-Platform", items: ["Flutter", "Dart", "Android/Kotlin", "HarmonyOS", "TypeScript", "Smartwatch apps"] },
            { cat: "Architecture", name: "Design Patterns", items: ["Clean Architecture", "Bloc", "Riverpod", "Microservices", "System design"] },
            { cat: "Testing", name: "QA & Automation", items: ["Hypium", "TestKit", "UI automation", "Unit testing", "Hardhat"] },
            { cat: "Blockchain", name: "Web3", items: ["Solidity", "Smart contracts", "DeFi", "DApps", "Contract auditing"] },
            { cat: "Languages", name: "Communication", items: ["Turkish (native)", "English C1", "IELTS 7.5"] },
          ].map((skill) => (
            <div key={skill.cat} className="skill-cell reveal">
              <div className="skill-cat">{skill.cat}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-list">
                {skill.items.map((s) => (
                  <span key={s} className="sk">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <div className="section-bar">
          <span className="section-num">03</span>
          <span className="section-title-bar">Selected Projects</span>
          <div className="section-line" />
        </div>
        <h2 className="reveal">
          PRO<span className="out">JECTS</span>
        </h2>

        <div className="projects-grid">
          <div className="proj-card featured reveal">
            <div className="featured-left">
              <div>
                <div className="proj-num">01 / FEATURED</div>
                <div className="proj-type">Fintech · Flutter Web</div>
                <div className="proj-name" style={{ color: "var(--black)" }}>
                  Parakolay
                </div>
                <p className="proj-desc">
                  Got the Flutter Web project from zero to production.
                  Architected the full merchant app using Riverpod, deep links,
                  and universal links. End-to-end ownership from design
                  implementation to testing.
                </p>
              </div>
              <div className="proj-tags">
                {["Flutter Web", "Riverpod", "Deep Links", "Dart"].map((t) => (
                  <span key={t} className="ptag">{t}</span>
                ))}
              </div>
            </div>
            <div className="featured-right">
              <div className="proj-big-num">01</div>
            </div>
          </div>

          <div className="proj-card reveal">
            <div>
              <div className="proj-num">02</div>
              <div className="proj-type">Events &amp; Entertainment</div>
              <div className="proj-name">Amber</div>
              <p className="proj-desc">
                Real-time Google Maps integration with continuous location
                tracking. Built a custom Navigator 2.0 router to handle the
                app&apos;s complex deep-linking hierarchy.
              </p>
            </div>
            <div className="proj-tags">
              {["Flutter", "Google Maps", "Navigator 2.0"].map((t) => (
                <span key={t} className="ptag">{t}</span>
              ))}
            </div>
          </div>

          <div className="proj-card reveal">
            <div>
              <div className="proj-num">03</div>
              <div className="proj-type">E-Commerce · Built from Zero</div>
              <div className="proj-name">Kerim Çelik</div>
              <p className="proj-desc">
                Full app from first line to production. Wireframes, animations,
                deep links, and Riverpod 2.0. Every screen and state built from
                scratch.
              </p>
            </div>
            <div className="proj-tags">
              {["Flutter", "Riverpod 2.0", "Animations"].map((t) => (
                <span key={t} className="ptag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section" id="education">
        <div className="section-bar">
          <span className="section-num">04</span>
          <span className="section-title-bar">
            Education &amp; Certifications
          </span>
          <div className="section-line" />
        </div>
        <h2 className="reveal">
          CRED<span className="out">ENTIALS</span>
        </h2>

        <div className="creds-list">
          {[
            { name: "BSc Computer Engineering", org: "Bahçeşehir University · 2019–2023" },
            { name: "IELTS — Band Score 7.5", org: "British Council / IDP" },
            { name: "General English C1", org: "ELC Brighton" },
            { name: "HarmonyOS Developers Certification", org: "Huawei" },
            { name: "Neural Networks & Deep Learning", org: "deeplearning.ai" },
            { name: "CS50's Introduction to Python", org: "Harvard / edX" },
          ].map((cred, i) => (
            <div key={i} className="cred-item reveal">
              <span className="cred-idx">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="cred-name">{cred.name}</div>
                <div className="cred-org">{cred.org}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="awards-row">
          <div className="award-item reveal">
            <div className="award-icon">🏆</div>
            <div>
              <div className="award-text">
                U18 A Men&apos;s Basketball Turkey Championship
              </div>
              <div className="award-sub">National Champion</div>
            </div>
          </div>
          <div className="award-item reveal">
            <div className="award-icon">🏆</div>
            <div>
              <div className="award-text">
                U16 A Men&apos;s Basketball Turkey Championship
              </div>
              <div className="award-sub">National Champion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="section-bar">
          <span className="section-num">05</span>
          <span className="section-title-bar">Get in Touch</span>
          <div className="section-line" />
        </div>

        <div className="contact-top reveal">
          <div className="contact-heading">
            LET&apos;S
            <br />
            <span className="y">TALK</span>
            <br />
            <span className="out">WORK.</span>
          </div>
          <p className="contact-note">
            Open to full-time roles, freelance, and interesting side projects.
            Backend, mobile, or anywhere in between.
          </p>
        </div>

        <div className="contact-links reveal">
          <a href="mailto:hasanyigtkaya@gmail.com" className="contact-link">
            <div className="cl-label">Email</div>
            <div className="cl-value">hasanyigtkaya@gmail.com</div>
            <div className="cl-arrow">↗</div>
          </a>
          <a href="tel:+905347774359" className="contact-link">
            <div className="cl-label">Phone</div>
            <div className="cl-value">+90 534 777 43 59</div>
            <div className="cl-arrow">↗</div>
          </a>
          <a
            href="https://linkedin.com/in/hasanyigitkaya"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="cl-label">LinkedIn</div>
            <div className="cl-value">hasanyigitkaya</div>
            <div className="cl-arrow">↗</div>
          </a>
          <div className="contact-link" style={{ cursor: "crosshair" }}>
            <div className="cl-label">Location</div>
            <div className="cl-value">Istanbul, Türkiye</div>
            <div className="cl-arrow">—</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span className="f-left">© 2025 Hasan Yigit Kaya</span>
        <span className="f-right">Software Engineer · Istanbul 🇹🇷</span>
      </footer>
    </>
  );
}
