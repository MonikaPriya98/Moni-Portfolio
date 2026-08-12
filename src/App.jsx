import { motion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowDownRight, ArrowUpRight, Award, Bot, Braces, BriefcaseBusiness,
  CodeXml, Database, FlaskConical, GitBranch, GraduationCap, KanbanSquare,
  Mail, Menu, Monitor, PackageCheck, Server, Smartphone, Sparkles, X,
} from 'lucide-react'
import { FaJava } from 'react-icons/fa'
import {
  SiAmazonwebservices, SiDocker, SiFlutter, SiGithub, SiClaude,
  SiGithubcopilot, SiLinkedin, SiOpenai,
  SiReact, SiRedhatopenshift, SiSpringboot,
} from 'react-icons/si'
import { useState } from 'react'
import MagneticButton from './components/MagneticButton'
import { metrics, projects, stackGroups } from './data'

const stackIcons = [SiRedhatopenshift, GitBranch, SiAmazonwebservices, Server, Monitor, Smartphone, CodeXml, Database, FlaskConical, PackageCheck, KanbanSquare]
const projectIcons = [Database, Smartphone, SiDocker, Server]

const experience = [
  {
    period: 'JUL 2025 — PRESENT',
    role: 'Lead Engineer',
    focus: 'CubenSquare · Chennai',
    detail: 'Leading a cross-functional team of seven engineers, overseeing project delivery, mentoring team members and aligning technical strategy with business goals.',
  },
  {
    period: 'JUL 2024 — PRESENT',
    role: 'Full Stack Developer',
    focus: 'CubenSquare · Chennai',
    detail: 'Building end-to-end web and mobile products using React, Flutter, Node.js, Java, Spring Boot, AWS, Docker, Kubernetes and Helm.',
  },
  {
    period: 'SEP 2022 — DEC 2022',
    role: 'Mobile App Developer',
    focus: 'George Brown College · Toronto',
    detail: 'Developed React and React Native applications, integrated Firebase services, created reusable UI components and contributed to the Budgetify mobile application.',
  },
  {
    period: 'JUN 2019 — FEB 2022',
    role: 'Full Stack Developer',
    focus: 'Tata Consultancy Services',
    detail: 'Built enterprise Java applications and Spring Boot microservices, developed REST APIs, modernized legacy systems and delivered features using Agile practices.',
  },
]

const education = [
  {
    period: 'OCT 2025 — 2027',
    title: 'M.Sc. Data Science & Artificial Intelligence',
    detail: 'Dr MGR Educational and Research Institute · Currently pursuing advanced study in data science and artificial intelligence.',
  },
  {
    period: 'JAN 2022 — DEC 2022',
    title: 'Postgraduate Degree — Mobile Application Development & Design Strategies',
    detail: 'George Brown College, Toronto · Focused on end-to-end mobile application design, development and delivery.',
  },
  {
    period: '2016 — 2019',
    title: 'Bachelor of Science — Computer Science',
    detail: 'SDNB Vaishnav College for Women, India · Foundation in computer science, programming, databases and software development.',
  },
]

const certifications = [
  {
    period: 'JUNE 2026',
    title: 'RHCSA — OpenShift',
    issuer: 'Red Hat',
    detail: 'Certified in OpenShift administration, including bare-metal installation, Day-2 operations, RBAC, Operators, oc CLI, BuildConfigs, ImageStreams, HPA, SCC and Helm Charts.',
    icon: 'openshift',
  },
  {
    period: 'CERTIFICATION',
    title: 'Java Foundations Certified Junior Associate',
    issuer: 'Oracle',
    detail: 'Java programming foundations and object-oriented development concepts.',
    icon: 'java',
  },
  {
    period: 'CERTIFICATE',
    title: 'HTML Essential Training',
    issuer: 'LinkedIn Learning',
    detail: 'Semantic HTML structure and modern web-development foundations.',
  },
  {
    period: 'CERTIFICATE',
    title: 'CSS Essential Training',
    issuer: 'LinkedIn Learning',
    detail: 'CSS layout, responsive styling and presentation fundamentals.',
  },
  {
    period: 'CERTIFICATE',
    title: 'Learning Git and GitHub',
    issuer: 'LinkedIn Learning',
    detail: 'Version-control workflows, repository collaboration and GitHub fundamentals.',
  },
  {
    period: 'CERTIFICATE',
    title: 'Developing a Critical Thinking Mindset',
    issuer: 'LinkedIn Learning',
    detail: 'Structured problem-solving, decision-making and critical analysis.',
  },
]

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <header className="topbar">
        <a className="logo" href="#home" aria-label="Monika Priya home">
          <span>&lt;</span>MP<span>/&gt;</span>
        </a>
        <nav id="main-navigation" className={navOpen ? 'open' : ''} aria-label="Main navigation">
          {['about', 'stack', 'experience', 'education', 'projects', 'certifications', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setNavOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <span className="available"><i /> Available for work</span>
          <button className="menu-button" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu" aria-expanded={navOpen} aria-controls="main-navigation">
            {navOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <motion.div className="hero-copy" initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }}>
            <div className="eyebrow">
              <Sparkles size={17} />
              <span className="eyebrow-greeting">HELLO, I’M</span>
              <strong>MONIKA PRIYA</strong>
            </div>
            <h1>Full stack<br /><span>developer.</span></h1>
            <p>I craft reliable web and mobile products—from thoughtful interfaces to Java services, cloud infrastructure and production deployments.</p>
            <div className="hero-actions">
              <MagneticButton href="#projects">View my work <ArrowDownRight size={18} /></MagneticButton>
              <MagneticButton href="mailto:monikapriyacs@gmail.com" secondary>Let’s talk <Mail size={17} /></MagneticButton>
            </div>
            <div className="hero-stack" aria-label="Core technologies">
              <span><FaJava /> JAVA</span><i /><span><SiReact /> REACT</span><i />
              <span><Database /> DATABASES</span><i /><span><SiFlutter /> FLUTTER</span><i />
              <span><SiRedhatopenshift /> OPENSHIFT</span>
            </div>
          </motion.div>

          <motion.div className="portrait-stage" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2, duration: .9 }}>
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-frame">
              <img src="/assets/monika-illustrated-portrait-v2.png" alt="Illustrated portrait of Monika Priya, Full Stack Developer" />
              <div className="portrait-scan" />
            </div>
            <div className="float-card card-code">
              <SiSpringboot /><span><small>BACKEND</small>Spring Boot</span>
            </div>
            <div className="float-card card-status react-card">
              <SiReact /><span><small>FRONTEND</small>React</span>
            </div>
            <div className="code-tag tag-one">{'{ Java }'}</div>
            <div className="code-tag tag-two">&lt;React /&gt;</div>
          </motion.div>
          <a className="scroll-note" href="#about">SCROLL TO EXPLORE <ArrowDownRight size={14} /></a>
        </section>

        <section className="about section" id="about">
          <motion.div {...reveal}>
            <div className="section-label">ABOUT ME</div>
            <h2>Engineering ideas into<br /><span>useful experiences.</span></h2>
          </motion.div>
          <motion.div className="about-copy" {...reveal} transition={{ delay: .1 }}>
            <p>I’m a Java full stack and Flutter developer focused on the whole delivery path: clean UI, maintainable APIs, dependable data, and cloud-native operations.</p>
            <p>My work spans Spring Boot, React, mobile development, AWS, Azure DevOps, Docker, Kubernetes and Red Hat OpenShift.</p>
          </motion.div>
          <div className="metrics">
            {metrics.map((metric) => <motion.div className="metric" key={metric.label} {...reveal}><strong>{metric.value}</strong><span>{metric.label}</span></motion.div>)}
          </div>
        </section>

        <section className="stack section" id="stack">
          <motion.div className="section-head" {...reveal}>
            <div><div className="section-label">MY TOOLKIT</div><h2>Code. Create.<br /><span>Deploy. Repeat.</span></h2></div>
            <p>A versatile toolkit for moving products from a blank file to a resilient production environment.</p>
          </motion.div>
          <div className="stack-grid">
            {stackGroups.map((group, index) => {
              const Icon = stackIcons[index]
              return <motion.article className="stack-card" key={group.title} {...reveal} transition={{ delay: index * .08 }}>
                <div className="stack-icon"><Icon /></div><span className="stack-number">0{index + 1}</span>
                <small>{group.subtitle}</small><h3>{group.title}</h3>
                <div className="chips">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </motion.article>
            })}
            <motion.article className="stack-card ai-stack-card" {...reveal} transition={{ delay: .32 }}>
              <div className="stack-icon"><Bot /></div><span className="stack-number">AI</span>
              <small>Modern development workflow</small><h3>AI-Assisted Development</h3>
              <div className="ai-tools">
                <span><SiOpenai /><b>Codex</b></span>
                <span><SiOpenai /><b>ChatGPT</b></span>
                <span><SiClaude /><b>Claude</b></span>
                <span><SiGithubcopilot /><b>GitHub Copilot</b></span>
                <span><Bot /><b>Tabnine</b></span>
              </div>
              <p>Using AI tools for rapid prototyping, code generation, debugging, test creation, documentation and development research.</p>
            </motion.article>
          </div>
        </section>

        <section className="journey section" id="experience">
          <motion.div className="journey-heading" {...reveal}>
            <div className="journey-icon"><BriefcaseBusiness /></div>
            <div><div className="section-label">EXPERIENCE</div><h2>Building beyond<br /><span>the brief.</span></h2></div>
          </motion.div>
          <div className="timeline">
            {experience.map((item) => (
              <motion.article className="timeline-item" key={item.role} {...reveal}>
                <div className="timeline-marker" />
                <span className="timeline-period">{item.period}</span>
                <div><small>{item.focus}</small><h3>{item.role}</h3><p>{item.detail}</p></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="journey section journey-alt" id="education">
          <motion.div className="journey-heading" {...reveal}>
            <div className="journey-icon"><GraduationCap /></div>
            <div><div className="section-label">EDUCATION</div><h2>Knowledge that<br /><span>keeps evolving.</span></h2></div>
          </motion.div>
          <div className="timeline">
            {education.map((item) => (
              <motion.article className="timeline-item" key={item.title} {...reveal}>
                <div className="timeline-marker" />
                <span className="timeline-period">{item.period}</span>
                <div><h3>{item.title}</h3><p>{item.detail}</p></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <motion.div className="section-head" {...reveal}>
            <div><div className="section-label">SELECTED WORK</div><h2>Systems with<br /><span>real-world impact.</span></h2></div>
            <p>Platforms designed around real users, operational clarity and dependable delivery.</p>
          </motion.div>
          <div className="project-grid">
            {projects.map((project, index) => {
              const Icon = projectIcons[index]
              return <motion.article className={`project-card project-${index + 1}`} key={project.name} {...reveal}>
                <div className="project-top"><div className="project-icon"><Icon /></div><ArrowUpRight /></div>
                <div className="project-signal">{project.signal} · {project.region}</div>
                <h3>{project.name}</h3><p>{project.summary}</p>
                <div className="chips">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
              </motion.article>
            })}
          </div>
        </section>

        <section className="journey section certification-section" id="certifications">
          <motion.div className="journey-heading" {...reveal}>
            <div className="journey-icon certification-icon"><Award /></div>
            <div><div className="section-label">CERTIFICATIONS</div><h2>Skills, tested<br /><span>in practice.</span></h2></div>
          </motion.div>
          <div className="certification-grid">
            {certifications.map((item) => (
              <motion.article className="certification-card" key={item.title} {...reveal}>
                <div className="certification-badge">
                  {item.icon === 'openshift' ? <SiRedhatopenshift /> : item.icon === 'java' ? <FaJava /> : <Award />}
                </div>
                <div><span>{item.period} · {item.issuer}</span><h3>{item.title}</h3><p>{item.detail}</p></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-glow" />
          <motion.div {...reveal}>
            <div className="section-label">LET’S CONNECT</div>
            <h2>Have an idea?<br /><span>Let’s build it.</span></h2>
            <p>I’m open to full stack, mobile, cloud and platform engineering opportunities.</p>
            <a className="email-link" href="mailto:monikapriyacs@gmail.com">monikapriyacs@gmail.com <ArrowUpRight /></a>
            <div className="socials">
              <a href="https://github.com/MonikaPriya98" target="_blank" rel="noreferrer"><SiGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/monika-priya-m/" target="_blank" rel="noreferrer"><SiLinkedin /> LinkedIn</a>
            </div>
          </motion.div>
          <div className="contact-code" aria-hidden="true"><Braces /><span>if (idea) {'{'}<br />&nbsp;&nbsp;buildTogether();<br />{'}'}</span></div>
        </section>
      </main>
      <footer><span>© 2026 MONIKA PRIYA</span><span>Designed with purpose · Built with code</span></footer>
    </>
  )
}
