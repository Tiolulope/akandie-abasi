'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { cvData } from '@/lib/data'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }
const fadeLeft = { hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }

function AnimateIn({ children, variant = fadeUp, className = '' }: any) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} variants={variant} initial="hidden" animate={inView ? 'show' : 'hidden'} className={className}>
      {children}
    </motion.div>
  )
}

function SectionHeader({ num, title, label }: { num: string; title: string; label: string }) {
  return (
    <AnimateIn className="flex gap-4 sm:gap-8 items-start mb-12 sm:mb-20">
      <span className="font-sans text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase mt-2 hidden sm:block"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: 'var(--gold)' }}>
        {label}
      </span>
      <div>
        <span className="font-serif italic font-light leading-none block" style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', color: 'var(--border)' }}>{num}</span>
        <h2 className="font-display font-bold -mt-2 sm:-mt-4 leading-tight" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', color: 'var(--charcoal)' }}>{title}</h2>
      </div>
    </AnimateIn>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-16 py-4 sm:py-6 transition-all"
      style={{ background: scrolled ? 'rgba(250,246,240,0.95)' : 'rgba(250,246,240,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
      <div className="font-display text-base sm:text-lg font-bold" style={{ color: 'var(--charcoal)' }}>
        Akandie<span className="italic" style={{ color: 'var(--gold)' }}>-Abasi</span>
      </div>
      <ul className="hidden sm:flex gap-4 md:gap-10 list-none">
        {['skills', 'experience', 'projects', 'education', 'contact'].map(l => (
          <li key={l}>
            <a href={`#${l}`} className="font-sans text-xs font-medium tracking-widest uppercase transition-colors"
              style={{ color: 'var(--muted)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section id="hero" className="min-h-screen grid grid-cols-1 md:grid-cols-2" style={{}}>
      {/* Left — dark */}
      <div className="relative flex flex-col justify-end overflow-hidden" style={{ background: 'var(--charcoal)', padding: 'clamp(2rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(201,147,58,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(184,92,56,0.1) 0%, transparent 50%)'
        }} />
        <div className="absolute top-12 -left-4 font-display font-black text-white/[0.03] leading-none pointer-events-none select-none"
          style={{ fontSize: '12rem' }}>AA</div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase mb-6 sm:mb-8 flex items-center gap-3"
            style={{ color: 'var(--gold)' }}>
            <span className="w-6 sm:w-8 h-px block" style={{ background: 'var(--gold)' }} />
            Accountant · Data Analyst · Uyo, Nigeria
          </p>
          <h1 className="font-display font-black leading-[1.05] mb-2" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', color: 'var(--warm-white)' }}>
            Udofia<br />
            <em className="font-serif font-normal" style={{ color: 'var(--gold-light)' }}>Akandie-Abasi</em><br />
            Sunday
          </h1>
          <p className="font-serif italic text-lg sm:text-2xl mb-8 sm:mb-10" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Accountant & Financial Data Analyst
          </p>
          <p className="font-sans text-sm leading-7 sm:leading-8 mb-8 sm:mb-12 max-w-md" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Proactive, diligent, and result-oriented</strong> accountant and analyst, leveraging data analytics and accounting expertise to solve complex organizational problems.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#contact" className="font-sans text-xs font-medium tracking-wider sm:tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4 transition-all"
              style={{ background: 'var(--gold)', color: 'var(--charcoal)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}>
              Get In Touch
            </a>
            <a href="#experience" className="font-sans text-xs font-medium tracking-wider sm:tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4 transition-all"
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}>
              View Experience
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right — light */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}
        className="relative flex flex-col justify-center" style={{ background: 'var(--surface)', padding: 'clamp(2rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)' }}>
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, var(--gold), var(--terracotta), transparent)' }} />
        <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-12" style={{ color: 'var(--muted)' }}>By the numbers</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
          {cvData.stats.map(s => (
            <div key={s.label}>
              <span className="font-display font-black leading-none block mb-2" style={{ fontSize: '3.5rem', color: 'var(--charcoal)' }}>
                {s.num}<span style={{ color: 'var(--gold)' }}>{s.suffix}</span>
              </span>
              <p className="font-sans text-sm leading-snug" style={{ color: 'var(--muted)' }}>{s.label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 pt-10" style={{ borderTop: '1px solid var(--border)' }}>
          {[
            { icon: '📞', label: cvData.phone, href: `tel:${cvData.phone}` },
            { icon: '✉️', label: cvData.email, href: `mailto:${cvData.email}` },
            { icon: '📍', label: cvData.location, href: undefined },
          ].map(c => (
            <a key={c.label} href={c.href} className="flex items-center gap-3 text-sm transition-colors no-underline"
              style={{ color: 'var(--muted)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
              <span className="w-8 h-8 flex items-center justify-center text-sm transition-colors"
                style={{ background: 'var(--border)' }}>{c.icon}</span>
              {c.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function Skills() {
  const featuredTech = ['Power BI', 'Python', 'MS Excel', 'SPSS', 'Financial Analysis', 'Dashboard Creation']
  return (
    <section id="skills" style={{ background: 'var(--warm-white)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-28">
        <SectionHeader num="01" title="Tools & Expertise" label="Skills" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
          <AnimateIn variant={fadeLeft}>
            <p className="font-serif italic text-lg sm:text-xl leading-6 sm:leading-8" style={{ color: 'var(--brown)' }}>
              "A skilled analyst who bridges the gap between financial data and actionable business intelligence."
            </p>
          </AnimateIn>
          <div className="flex flex-col gap-10">
            {[
              { title: 'Technical Skills', tags: cvData.skills.technical, featured: ['Power BI', 'Python', 'MS Excel', 'SPSS'] },
              { title: 'Domain Expertise', tags: cvData.skills.domain, featured: ['Financial Analysis', 'Dashboard Creation'] },
              { title: 'Soft Skills', tags: cvData.skills.soft, featured: [] },
            ].map((group, i) => (
              <AnimateIn key={group.title}>
                <div className="font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-5 flex items-center gap-4"
                  style={{ color: 'var(--muted)' }}>
                  {group.title}
                  <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map(tag => (
                    <span key={tag} className="font-sans text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 cursor-default transition-all"
                      style={group.featured.includes(tag)
                        ? { background: 'var(--charcoal)', border: '1px solid var(--charcoal)', color: 'var(--warm-white)' }
                        : { background: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--charcoal)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-28">
        <SectionHeader num="02" title="Work History" label="Experience" />
        <div>
          {cvData.experience.map((exp, i) => (
            <AnimateIn key={exp.role}>
              <div className="grid gap-8 sm:gap-12 py-8 sm:py-12" style={{
                gridTemplateColumns: 'auto 1fr',
                borderTop: i === 0 ? '1px solid var(--border)' : undefined,
                borderBottom: '1px solid var(--border)',
              }}>
                <div className="min-w-0" style={{ minWidth: 'clamp(150px, 30%, 250px)' }}>
                  <span className="font-serif italic text-sm block mb-2" style={{ color: 'var(--muted)' }}>{exp.period}</span>
                  <span className="font-sans text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--gold)' }}>{exp.company}</span>
                  <span className="inline-block font-sans text-xs px-2 py-1 mt-3 block w-fit"
                    style={{ background: 'var(--surface)', color: 'var(--muted)' }}>{exp.badge}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-3xl mb-5 leading-tight" style={{ color: 'var(--charcoal)' }}>{exp.role}</h3>
                  <ul className="flex flex-col gap-3 list-none">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-4 text-sm leading-7" style={{ color: 'var(--muted)' }}>
                        <span className="font-serif flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }}>—</span>
                        <span>
                          {b.text}
                          {(b as any).highlight && (
                            <span className="inline-block font-sans text-xs font-semibold ml-2 px-2"
                              style={{ color: 'var(--terracotta)', background: 'rgba(184,92,56,0.08)' }}>
                              {(b as any).highlight}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--charcoal)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-28">
        <div className="flex gap-4 sm:gap-8 items-start mb-12 sm:mb-20">
          <AnimateIn>
            <span className="font-sans text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase mt-2 hidden sm:block"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: 'var(--gold)' }}>
              Projects
            </span>
          </AnimateIn>
          <AnimateIn>
            <span className="font-serif italic font-light leading-none block" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', color: 'rgba(255,255,255,0.06)' }}>03</span>
            <h2 className="font-display font-bold -mt-2 sm:-mt-4 leading-tight" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', color: 'var(--warm-white)' }}>Featured Work</h2>
          </AnimateIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
          {cvData.projects.map((p, i) => (
            <AnimateIn key={p.name}>
              <div className="relative p-6 sm:p-8 lg:p-12 transition-colors group" style={{ background: 'var(--charcoal)' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#252220')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--charcoal)')}>
                <div className="absolute top-4 right-4 sm:right-8 font-display font-black leading-none pointer-events-none"
                  style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', color: 'rgba(255,255,255,0.04)' }}>{p.num}</div>
                <div className="font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--gold)' }}>{p.type}</div>
                <h3 className="font-display font-bold text-lg sm:text-xl mb-4 leading-tight" style={{ color: 'var(--warm-white)' }}>{p.name}</h3>
                <p className="font-sans text-sm leading-7 mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tools.map(t => (
                    <span key={t} className="font-sans text-xs px-3 py-1"
                      style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-28">
        <SectionHeader num="04" title="Education & Certifications" label="Education" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {cvData.education.map((e, i) => (
            <AnimateIn key={e.degree}>
              <div className="p-6 sm:p-8 lg:p-10 transition-all cursor-default group"
                style={{ background: 'var(--warm-white)', border: '1px solid var(--border)' }}
                onMouseEnter={el => { el.currentTarget.style.transform = 'translateY(-3px)'; el.currentTarget.style.boxShadow = '0 20px 40px rgba(28,26,23,0.08)' }}
                onMouseLeave={el => { el.currentTarget.style.transform = 'translateY(0)'; el.currentTarget.style.boxShadow = 'none' }}>
                <div className="font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--gold)' }}>{e.type}</div>
                <div className="font-display font-bold text-lg leading-tight mb-2" style={{ color: 'var(--charcoal)' }}>{e.degree}</div>
                <div className="font-sans text-sm mb-2" style={{ color: 'var(--muted)' }}>{e.school}</div>
                <div className="font-serif italic text-sm" style={{ color: 'var(--terracotta)' }}>{e.date}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))' }}>
          {cvData.certifications.map(c => (
            <AnimateIn key={c.name}>
              <div className="flex gap-4 p-4 sm:p-6 items-start"
                style={{ background: 'var(--warm-white)', border: '1px solid var(--border)', borderLeft: '3px solid var(--gold)' }}>
                <span className="text-2xl flex-shrink-0">🏅</span>
                <div>
                  <div className="font-sans text-sm font-medium leading-tight mb-1" style={{ color: 'var(--charcoal)' }}>{c.name}</div>
                  {c.org && <div className="font-sans text-xs" style={{ color: 'var(--muted)' }}>{c.org}</div>}
                  <div className="font-serif italic text-xs mt-1" style={{ color: 'var(--gold)' }}>{c.date}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--warm-white)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-28">
        <SectionHeader num="05" title="Let's Work Together" label="Contact" />
        <div className="grid gap-8 sm:gap-12 lg:gap-24 items-center grid-cols-1 lg:grid-cols-2">
          <AnimateIn variant={fadeLeft}>
            <h3 className="font-display font-bold leading-tight mb-6" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--charcoal)' }}>
              Available for <em className="italic" style={{ color: 'var(--gold)' }}>new opportunities</em> and collaborations
            </h3>
            <p className="font-sans text-sm leading-8 mb-10" style={{ color: 'var(--muted)' }}>
              Open to accounting roles, financial analysis projects, and data analytics engagements. Let's connect and discuss how I can add value to your organization.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { icon: '📞', label: cvData.phone, href: `tel:${cvData.phone}` },
                { icon: '✉️', label: cvData.email, href: `mailto:${cvData.email}` },
                { icon: '📍', label: cvData.location, href: undefined },
              ].map(c => (
                <a key={c.label} href={c.href} className="flex items-center gap-4 text-sm transition-colors no-underline"
                  style={{ color: 'var(--charcoal)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--charcoal)')}>
                  <span className="w-10 h-10 flex items-center justify-center transition-all"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)', fontSize: '1rem' }}>{c.icon}</span>
                  {c.label}
                </a>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn>
            <div className="relative overflow-hidden p-6 sm:p-8 lg:p-14" style={{ background: 'var(--charcoal)' }}>
              <div className="absolute font-display font-black leading-none pointer-events-none select-none"
                style={{ top: '-2rem', left: '2rem', fontSize: 'clamp(8rem, 20vw, 15rem)', color: 'rgba(255,255,255,0.03)' }}>"</div>
              <p className="font-serif italic text-lg sm:text-xl leading-7 sm:leading-8 mb-6 sm:mb-8 relative z-10" style={{ color: 'rgba(255,255,255,0.8)' }}>
                "Dependable, reliable, and adaptable — ready to learn and grow with your organization."
              </p>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>— Personal Philosophy</p>
              {cvData.memberships.map((m, i) => (
                <div key={m.title} className="flex items-center gap-4 mt-8 pt-8"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="w-12 h-12 flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: m.color }}>{m.icon}</span>
                  <div className="font-sans text-sm leading-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <strong style={{ color: 'var(--warm-white)', fontWeight: 500 }}>{m.title}</strong><br />
                    {m.org}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-16 py-6 gap-4"
        style={{ background: 'var(--charcoal)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <span className="font-display italic text-base" style={{ color: 'var(--gold)' }}>Udofia Akandie-Abasi Sunday</span>
        <span className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Accountant & Data Analyst · Uyo, Nigeria · 2025</span>
      </footer>
    </>
  )
}
