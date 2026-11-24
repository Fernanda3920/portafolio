import { ArrowDownRight, ArrowRight, ArrowUpRight, CodeXml, Mail, MapPin, MoveUpRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Acompañamiento que sí acompaña.',
    type: 'SALUD · APLICACIÓN EN PRODUCCIÓN',
    description: 'Aplicación móvil para apoyar la adherencia a medicamentos y el bienestar emocional. Incluye recordatorios con notificaciones push, registro emocional y sincronización en tiempo real. Desarrollo colaborativo con atención a una arquitectura escalable.',
    tags: ['React Native', 'Firebase Auth', 'Cloud Firestore', 'Push notifications'],
    visual: 'care',
    label: 'En producción',
    link: null,
    images: [
      '/Screenshot_20260429-145537.png',
      '/Screenshot_20260429-145531.png',
      '/Screenshot_20260429-145512.png',
    ],
  },
  {
    number: '02',
    title: 'Una nube que cabe en una Raspberry Pi.',
    type: 'HACKATÓN · E-COMMERCE',
    description: 'Un entorno de comercio electrónico desplegado en infraestructura local: una demostración práctica de cómo hacer más con recursos pequeños.',
    tags: ['Raspberry Pi', 'MariaDB', 'REST API'],
    visual: 'cloud',
    label: 'Local cloud / 24 h',
    link: null,
  },
  {
    number: '03',
    title: 'La propiedad digital, en comunidad.',
    type: 'HACKATÓN · WEB3',
    description: 'Una red social Web3 donde las personas interactúan a través de NFTs y contratos inteligentes. Diseñada y desplegada en solo 24 horas.',
    tags: ['Solidity', 'Blockchain', 'Web3'],
    visual: 'web3',
    label: 'Made of blocks',
    link: null,
  },
  {
    number: '04',
    title: 'Operación farmacéutica, bajo control.',
    type: 'SOFTWARE EMPRESARIAL · ESCRITORIO',
    description: 'Sistema para administrar el ciclo operativo de una farmacia: facturación, control de inventario y generación de reportes financieros para facilitar el seguimiento del negocio.',
    tags: ['C#', '.NET Framework', 'SQL Server', 'ReportViewer'],
    visual: 'pharmacy',
    label: 'Gestión empresarial',
    link: null,
    images: ['/funcion_reportes.png'],
  },
  {
    number: '05',
    title: 'Cada receta, cada insumo, cada conteo.',
    type: 'SISTEMA WEB · INVENTARIO RESTAURANTERO',
    description: 'Herramienta para coordinar recetas, insumos y existencias. Registra movimientos, automatiza acciones operativas y compara el inventario teórico —calculado a partir de las operaciones— con el conteo físico para detectar diferencias.',
    tags: ['JavaScript', 'React', 'Vite', 'Node.js', 'PostgreSQL · contenedores'],
    visual: 'restaurant',
    label: 'Inventario conectado',
    link: null,
    images: ['/apariencia_sistema.png'],
  },
  {
    number: '06',
    title: 'Una red diseñada para conectar.',
    type: 'REDES · INFRAESTRUCTURA',
    description: 'Prácticas de diseño y configuración de redes con Cisco Packet Tracer, junto con experiencia práctica en cableado estructurado: conectividad desde la simulación hasta la infraestructura física.',
    tags: ['Cisco Packet Tracer', 'Redes', 'Cableado estructurado'],
    visual: 'network',
    label: 'Redes e infraestructura',
    link: 'https://github.com/Fernanda3920/Cisco-Packet-Tracer',
  },
  {
    number: '07',
    title: 'El entorno también produce datos.',
    type: 'IOT · MONITOREO AMBIENTAL',
    description: 'Proyecto de monitoreo de sensores ambientales con mensajería MQTT: captura y comunicación de lecturas para observar condiciones del entorno en tiempo real.',
    tags: ['IoT', 'MQTT', 'Sensores', 'Monitoreo'],
    visual: 'mqtt',
    label: 'Datos en tiempo real',
    link: 'https://github.com/Fernanda3920/Monitoreo-de-Sensores-Ambientales-con-MQTT',
  },
  {
    number: '08',
    title: 'AgendaPRO UABC Las Palmas.',
    type: 'SALUD · GESTIÓN DE CITAS',
    description: 'Plataforma web para médicos y pacientes que permite agendar citas, gestionar consultas y mantener auditorías de actividad. Actualmente en implementación en UABC Las Palmas.',
    tags: ['Agenda médica', 'Gestión de pacientes', 'Consultas', 'Auditoría'],
    visual: 'agenda',
    label: 'En implementación · UABC Las Palmas',
    link: null,
    images: [
      '/Captura de pantalla 2026-11-24 120703-agenda.png',
      '/Captura de pantalla 2026-11-24 120738-agenda.png',
      '/Captura de pantalla 2026-11-24 120815-agenda.png',
    ],
  },
]

const skills = ['JavaScript', 'Python', 'React Native', 'React', 'Node.js', 'C# / .NET', 'SQL Server', 'PostgreSQL', 'AWS', 'Google Cloud', 'IoT / MQTT', 'Redes']

export default function Portfolio() {
  return (
    <main className="portfolio-shell">
      <header className="topbar">
        <a className="wordmark" href="#inicio" aria-label="América Nevárez, inicio"><span className="mark">a.</span><span>América Nevárez</span></a>
        <nav aria-label="Navegación principal" className="nav-links">
          <a href="#proyectos">Proyectos</a><a href="#sobre-mi">Sobre mí</a><a href="#contacto">Contacto</a>
        </nav>
        <a className="top-cta" href="mailto:fernandanevarez7171@gmail.com">Hablemos <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="availability"><span className="pulse" /> DISPONIBLE PARA NUEVOS RETOS</div>
          <p className="eyebrow">DESARROLLADORA DE SOFTWARE · TIJUANA, MX</p>
          <h1>Ideas que se<br />convierten en <span className="serif-accent">impacto.</span></h1>
          <p className="hero-description">Hola, soy América. Construyo productos digitales que resuelven problemas reales, conectando tecnología con una mirada humana.</p>
          <div className="hero-actions"><a className="button-primary" href="#proyectos">Explorar proyectos <ArrowDownRight size={17} /></a><a className="text-link" href="#sobre-mi">Conoce mi historia <ArrowRight size={15} /></a></div>
          <div className="hero-meta"><span><MapPin size={14} /> Tijuana, México</span><span className="meta-divider" /><span>ES · EN B1</span></div>
        </div>
        <div className="hero-art" aria-label="Ilustración abstracta con formas geométricas">
          <img className="hero-project-image" src="/port.png" alt="Vista principal de la aplicación móvil de acompañamiento" />
          <div className="art-caption"><span>BUILDING WITH PURPOSE</span><span>32° 30′ N — 117° 02′ W</span></div>
          <div className="art-sticker">curious<br />by nature<span>✳</span></div>
        </div>
        <div className="hero-index"><span>01 / 04</span><span className="index-line" /></div>
      </section>

      <section className="technology-strip" aria-label="Tecnologías principales">
        <p className="section-kicker">TECNOLOGÍAS</p>
        <div className="technology-list">
          {skills.slice(0, 8).map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="intro-strip" id="sobre-mi">
        <p className="section-kicker">UN POCO SOBRE MÍ</p>
        <p className="intro-copy">De la idea al despliegue: <span>me gusta construir tecnología útil, accesible y hecha para personas.</span></p>
        <a href="https://github.com/Fernanda3920" target="_blank" rel="noreferrer" className="round-link" aria-label="Visitar GitHub"><CodeXml size={19} /></a>
      </section>

      <section className="projects-section" id="proyectos">
        <div className="section-heading"><div><p className="section-kicker">SELECCIÓN 2024 — 2026</p><h2>Trabajo con <span className="serif-accent">intención.</span></h2></div><p className="section-note">Una selección de proyectos donde la tecnología se encuentra con necesidades reales.</p></div>
        <div className="featured-projects">
          {projects.filter(project => project.images).map((project) => <article className="featured-project" key={project.number}>
            <div className={`featured-project-media ${project.visual}`}>
              <span className="visual-label">{project.label}</span>
              {project.images && project.images.length > 1 && project.visual === 'care'
                ? <div className="phone-gallery">{project.images.map((image, index) => <img key={image} src={image} alt={`${project.title} — pantalla ${index + 1}`} />)}</div>
                : <div className="desktop-gallery">{project.images?.map((image) => <img key={image} src={image} alt={project.title} />)}</div>}
            </div>
            <div className="featured-project-content">
              <div className="project-meta"><span>{project.type}</span><span>{project.number}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
              {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">Ver repositorio <MoveUpRight size={13} /></a>}
            </div>
          </article>)}
        </div>
        <div className="text-project-list">
          {projects.filter(project => !project.images).map((project) => <article className="text-project" key={project.number}>
            <span className="text-project-number">{project.number}</span>
            <div className="text-project-main">
              <p className="text-project-type">{project.type}</p>
              <h3>{project.title}</h3>
            </div>
            <p className="text-project-description">{project.description}</p>
            <div className="text-project-end">
              <div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
              {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">Ver repositorio <MoveUpRight size={13} /></a>}
            </div>
          </article>)}
        </div>
      </section>

      <section className="about-section">
        <div className="about-left"><p className="section-kicker">MI FORMA DE TRABAJAR</p><h2>Curiosidad<br />con <span className="serif-accent">propósito.</span></h2><p className="about-desc">Ingeniera en Sistemas Computacionales en formación. Disfruto los retos que cruzan disciplinas: software, infraestructura, datos y las personas que los usan.</p><a className="about-link" href="mailto:fernandanevarez7171@gmail.com">¿Tienes un reto en mente? <ArrowUpRight size={15} /></a></div>
        <div className="about-right"><div className="stat-row"><div className="stat"><strong>01<span>.</span></strong><span>lugar en hackatón<br />SOREDI ITT · 2026</span></div><div className="stat"><strong>150<span>+</span></strong><span>personas acompañadas<br />con tecnología en salud</span></div></div><div className="skill-block"><p className="section-kicker">HERRAMIENTAS DE TODOS LOS DÍAS</p><div className="skill-tags">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div><div className="education"><span className="edu-icon">✳</span><div><strong>Ingeniería en Sistemas Computacionales</strong><span>Instituto Tecnológico de Tijuana · 2022—2026</span></div><MoveUpRight size={16} /></div></div>
      </section>

      <section className="contact-section" id="contacto"><div className="contact-orb" /><p className="section-kicker">¿CONSTRUIMOS ALGO BUENO?</p><h2>Las buenas ideas<br />empiezan con <span className="serif-accent">una charla.</span></h2><a className="contact-button" href="mailto:fernandanevarez7171@gmail.com"><Mail size={17} /> fernandanevarez7171@gmail.com <ArrowUpRight size={16} /></a><div className="contact-social"><a href="https://github.com/Fernanda3920" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a><span>TIJUANA, MX · DISPONIBLE REMOTO</span></div></section>
      <footer className="footer"><a className="wordmark" href="#inicio"><span className="mark">a.</span><span>América Nevárez</span></a><span>Diseñado y construido con intención.</span><span>© 2026</span></footer>
    </main>
  )
}
