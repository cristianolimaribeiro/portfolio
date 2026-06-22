"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FiArrowDown,
  FiBriefcase,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiMenu,
  FiX,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaGraduationCap, FaLanguage, FaWhatsapp } from "react-icons/fa";
import { FiExternalLink, FiFolder } from "react-icons/fi";
import { education, experiences, languages, technologies, projects } from "@/constants";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectSlideIndex, setProjectSlideIndex] = useState<Record<string, number>>({});
  const topbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = ["home", "sobre", "projetos", "carreira", "contato"];
    const observers = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
      .map((section) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(section.id);
            }
          },
          { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
        );
        observer.observe(section);
        return observer;
      });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const bottomReached = window.innerHeight + window.scrollY >= document.body.offsetHeight - 24;

      if (bottomReached) {
        setActiveSection("contato");
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (topbarRef.current && !topbarRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <main className="portfolio-shell">
      <header className="topbar" ref={topbarRef}>
        <a href="#home" className="brand">Cristiano.dev</a>
        <button
          type="button"
          className="menu-toggle"
          aria-controls="site-nav"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={(event) => {
            event.stopPropagation();
            setMenuOpen((value) => !value);
          }}
        >
          {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
        <nav id="site-nav" className={`site-nav ${menuOpen ? "menu-open" : ""}`}>
          <a href="#sobre" className={activeSection === "sobre" ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#projetos" className={activeSection === "projetos" ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Projetos</a>
          <a href="#carreira" className={activeSection === "carreira" ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Carreira</a>
          <a href="#contato" className={activeSection === "contato" ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
      </header>

      <section className="hero reveal reveal-up" id="home">
        <div className="hero__copy">
          <p className="hero__tag">Perfil profissional</p>
          <h1>Cristiano Lima Ribeiro</h1>
          <p className="hero__subtitle">
            Desenvolvedor Front-end | React.js | TypeScript | SPFx | Microsoft 365 | Power Automate | Node.js
          </p>
          <p className="hero__description">
            Desenvolvedor Front-end Pleno com experiência em aplicações web corporativas, intranets, portais digitais e soluções integradas ao ecossistema Microsoft 365.
          </p>
          <div className="hero__meta">
            <span><FiMapPin size={16} /> Petrópolis, Rio de Janeiro, Brasil</span>
            <span><FiBriefcase size={16} /> +14 anos em TI</span>
          </div>
          <div className="hero__actions">
            <a href="#contato">Fale comigo</a>
            <a href="#carreira" className="ghost">Ver carreira <FiArrowDown size={14} /></a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <Image
            src={`${basePath}/profile.png`}
            alt="Foto de Cristiano Lima Ribeiro"
            width={420}
            height={420}
            preload
            sizes="(max-width: 900px) 100vw, 420px"
            className="hero__photo"
          />
        </div>
      </section>

      <section className="card about-card reveal reveal-up reveal-delay-1" id="sobre">
        <h2><FiUser size={18} /> Resumo Profissional</h2>
        <p>
          Atuação sólida com React.js, TypeScript, JavaScript, SPFx, SharePoint Online, Power Automate, Node.js, Express e integração com APIs REST. Experiência em levantamento de requisitos, análise funcional, componentização, performance, usabilidade, documentação técnica, implantação e sustentação para empresas de grande porte.
        </p>
      </section>

      <section className="projects-grid reveal reveal-up reveal-delay-2" id="projetos">
        <div className="projects-heading">
          <p>Projetos selecionados</p>
          <h2>Casos que mostram produto, interface e integração na prática.</h2>
        </div>
        {projects.map((project) => (
          (() => {
            const gallery = project.gallery?.length ? project.gallery : [{ label: project.title, image: project.image }];
            const currentIndex = projectSlideIndex[project.title] ?? 0;
            const activeSlide = gallery[currentIndex % gallery.length];
            const hasCarousel = project.featured && gallery.length > 1;

            return (
            <article key={project.title} className={`project-card ${project.featured ? "project-card--featured" : ""}`}>
              <div className="project-info">
                <span className="project-label">
                  <FiFolder />
                  {project.featured ? "Projeto em Destaque" : "Projeto"}
              </span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <ul className="project-features-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

              <div className="project-visual">
                <div className="browser-mockup">
                  <div className="browser-header">
                    <div className="browser-dot"></div>
                    <div className="browser-dot"></div>
                    <div className="browser-dot"></div>
                  </div>
                  <div className="project-img-container">
                    <Image
                      src={`${basePath}${activeSlide.image}`}
                      alt={`Preview do projeto ${project.title} - ${activeSlide.label}`}
                      fill
                      className="project-img"
                      sizes="(max-width: 900px) 100vw, 42vw"
                    />
                    {hasCarousel && (
                      <>
                        <button
                          type="button"
                          className="project-carousel-btn project-carousel-btn--prev"
                          aria-label={`Ver imagem anterior do projeto ${project.title}`}
                          onClick={() =>
                            setProjectSlideIndex((current) => ({
                              ...current,
                              [project.title]:
                                (current[project.title] ?? 0) === 0 ? gallery.length - 1 : (current[project.title] ?? 0) - 1,
                            }))
                          }
                        >
                          <FiChevronLeft size={14} className="project-carousel-btn-icon project-carousel-btn-icon--prev" />
                        </button>
                        <button
                          type="button"
                          className="project-carousel-btn project-carousel-btn--next"
                          aria-label={`Ver próxima imagem do projeto ${project.title}`}
                          onClick={() =>
                            setProjectSlideIndex((current) => ({
                              ...current,
                              [project.title]: ((current[project.title] ?? 0) + 1) % gallery.length,
                            }))
                          }
                        >
                          <FiChevronRight size={14} className="project-carousel-btn-icon project-carousel-btn-icon--next" />
                        </button>
                        <div className="project-carousel-dots" aria-label={`Seletores de imagem do projeto ${project.title}`}>
                          {gallery.map((slide, index) => (
                            <button
                              key={slide.label}
                              type="button"
                              className={index === currentIndex % gallery.length ? "is-active" : ""}
                              aria-label={`Ver ${slide.label} do projeto ${project.title}`}
                              onClick={() =>
                                setProjectSlideIndex((current) => ({
                                  ...current,
                                  [project.title]: index,
                                }))
                              }
                            />
                          ))}
                        </div>
                        <div className="project-preview-label">{activeSlide.label}</div>
                      </>
                    )}
                  </div>
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={link.label.toLowerCase().includes("código") ? "btn-secondary" : "btn-primary"}
                  >
                    {link.label.toLowerCase().includes("código") ? <FaGithub size={14} /> : <FiExternalLink size={14} />}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

              <ul className="project-stack-inline">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            );
          })()
        ))}
      </section>

      <section className="content-grid" id="carreira">
        <article className="card reveal reveal-up reveal-delay-2">
          <h2><FiBriefcase size={18} /> Experiência</h2>
          {experiences.map((job) => (
            <div key={`${job.company_name}-${job.date}`} className="timeline-item">
              <h3>{job.title}</h3>
              <p className="muted">{job.company_name} | {job.date}</p>
              <p className="impact-line">
                {job.company_name === "Ímpar"
                  ? "Soluções de Digital Workplace para clientes como Vale, Banco Safra, Grupo Fleury, Prudential do Brasil e MAG Seguros."
                  : "Base técnica em sustentação, operação e confiabilidade para ambientes corporativos."}
              </p>
              <ul className="timeline-preview">
                {job.points.slice(0, 2).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {job.points.length > 2 && (
                <details className="timeline-details">
                  <summary>
                    Ver detalhes
                    <FiChevronDown size={14} />
                  </summary>
                  <ul>
                    {job.points.slice(2).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          ))}
        </article>

        <article className="card reveal reveal-up reveal-delay-3">
          <h2><FaGraduationCap size={18} /> Formacao</h2>
          <ul className="compact-list">
            {education.map((item) => (
              <li key={`${item.institution}-${item.date}`}>
                <p className="strong">{item.title}</p>
                <p className="muted">{item.institution} | {item.date}</p>
              </li>
            ))}
          </ul>

          <h2><FaLanguage size={18} /> Idiomas</h2>
          <ul className="tags">
            {languages.map((language) => (
              <li key={language.name}>{language.name}: {language.level}</li>
            ))}
          </ul>

          <h2>Stack</h2>
          <div className="stack-groups">
            {technologies.map((tech) => (
              <section key={tech.group} className="stack-group">
                <h3>{tech.group}</h3>
                <ul className="tags">
                  {tech.items.map((item, index) => (
                    <li key={item} style={{ "--chip-index": index } as React.CSSProperties}>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      </section>

      <section className="card contact-card reveal reveal-up reveal-delay-4" id="contato">
        <div className="contact-heading">
          <h2><FiMail size={18} /> Contato</h2>
          <p>Disponível para conversas sobre front-end, SPFx, Microsoft 365 e automações corporativas.</p>
        </div>
        <div className="contact-grid">
          <a href="mailto:cristiano.lima.ribeiro@gmail.com" className="contact-tile contact-tile--email">
            <span className="contact-icon"><FiMail size={20} /></span>
            <span className="contact-copy">
              <strong>Email</strong>
              <em>cristiano.lima.ribeiro@gmail.com</em>
            </span>
            <FiArrowUpRight className="contact-arrow" size={18} />
          </a>
          <a href="https://wa.me/5524981481103" target="_blank" rel="noreferrer" className="contact-tile contact-tile--whatsapp">
            <span className="contact-icon"><FaWhatsapp size={21} /></span>
            <span className="contact-copy">
              <strong>WhatsApp</strong>
              <em>+55 24 98148-1103</em>
            </span>
            <FiArrowUpRight className="contact-arrow" size={18} />
          </a>
          <a href="https://github.com/cristianolimaribeiro" target="_blank" rel="noreferrer" className="contact-tile contact-tile--compact">
            <span className="contact-icon"><FaGithub size={20} /></span>
            <span className="contact-copy">
              <strong>GitHub</strong>
              <em>@cristianolimaribeiro</em>
            </span>
          </a>
          <a href="https://linkedin.com/in/cristiano-lima-ribeiro" target="_blank" rel="noreferrer" className="contact-tile contact-tile--compact">
            <span className="contact-icon"><FaLinkedin size={20} /></span>
            <span className="contact-copy">
              <strong>LinkedIn</strong>
              <em>/in/cristiano-lima-ribeiro</em>
            </span>
          </a>
          <a href="tel:+5524981481103" className="contact-tile contact-tile--compact">
            <span className="contact-icon"><FiPhone size={20} /></span>
            <span className="contact-copy">
              <strong>Telefone</strong>
              <em>+55 24 98148-1103</em>
            </span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
