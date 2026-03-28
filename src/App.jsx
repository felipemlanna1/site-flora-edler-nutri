import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Star, WhatsappLogo, Leaf, Dna, Scales, Brain, Heartbeat, Flask, GraduationCap, MapPin } from '@phosphor-icons/react'
import './App.css'

const WA = 'https://wa.me/5548999999999?text=Olá! Gostaria de agendar uma consulta com a Flora Edler.'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

function Stars({ size = 14 }) {
  return <div style={{ display: 'flex', gap: 2 }}>{[0,1,2,3,4].map(i => <Star key={i} size={size} weight="fill" color="#34D399" />)}</div>
}

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">Flora <span>Edler</span></div>
      <a href={WA} target="_blank" rel="noopener noreferrer" className="nb">
        <WhatsappLogo size={16} weight="duotone" /> Agendar
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <motion.div className="hero-badge" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <GraduationCap size={14} weight="fill" /> MESTRADO UFSC
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
        Nutricionista<br /><span className="a">Flora Edler</span>
      </motion.h1>
      <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        Nutrição personalizada com base em ciência e DNA. Programa de emagrecimento
        premium, nutrigenômica e acompanhamento individualizado em Florianópolis.
      </motion.p>
      <motion.a href={WA} target="_blank" rel="noopener noreferrer" className="big" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} whileHover={{ scale: 1.05 }}>
        <WhatsappLogo size={22} weight="duotone" /> Agendar Consulta
      </motion.a>
    </section>
  )
}

function About() {
  return (
    <section className="about sp">
      <div className="mx">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Sobre</span>
          <h2>Dra. Flora Edler</h2>
          <p>
            Nutricionista com <span className="a">Mestrado pela UFSC</span>, especialista em nutrição
            personalizada baseada em genômica. Atende em Ingleses e Centro de Florianópolis com foco
            em emagrecimento sustentável, saúde metabólica e qualidade de vida.
            Cada consulta recebe o tempo e atenção que merece.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const servicos = [
  { icon: <Dna size={26} weight="duotone" />, title: 'Nutrigenômica', desc: 'Planos alimentares baseados no seu perfil genético para resultados otimizados.' },
  { icon: <Scales size={26} weight="duotone" />, title: 'Emagrecimento Premium', desc: 'Programa personalizado e sustentável, sem dietas restritivas.' },
  { icon: <Leaf size={26} weight="duotone" />, title: 'Nutrição Funcional', desc: 'Alimentação como ferramenta de saúde, equilíbrio e prevenção.' },
  { icon: <Brain size={26} weight="duotone" />, title: 'Saúde Metabólica', desc: 'Controle de colesterol, glicemia e otimização do metabolismo.' },
  { icon: <Flask size={26} weight="duotone" />, title: 'Suplementação', desc: 'Avaliação criteriosa de exames e suplementação personalizada.' },
  { icon: <Heartbeat size={26} weight="duotone" />, title: 'Qualidade de Vida', desc: 'Incorporação de hábitos saudáveis no seu estilo de vida atual.' },
]

function Servicos() {
  return (
    <section className="srv sp" id="servicos">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Especialidades</span>
          <h2>Nutrição baseada em ciência</h2>
          <p>Cada plano é tão único quanto o seu DNA</p>
        </motion.div>
        <motion.div className="srv-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {servicos.map((s, i) => (
            <motion.div key={i} className="sc" variants={fadeUp} custom={i}>
              <div className="si">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const reviews = [
  { text: 'A melhor nutricionista que já tive. Super dedicada, consultas sem pressa e materiais incríveis.', author: 'Gabriela R.' },
  { text: 'A Flora é incrível! Nada de dieta restritiva, ela adapta a alimentação ao meu dia a dia.', author: 'Lucas M.' },
  { text: 'Emagreci 15kg com acompanhamento dela. Método baseado em genética é outro nível.', author: 'Fernanda S.' },
  { text: 'Consultas sempre com tempo adequado. Ela realmente se importa com cada paciente.', author: 'Ana Paula T.' },
  { text: 'Profissional excepcional. Meus exames melhoraram significativamente em 3 meses.', author: 'Carlos H.' },
  { text: 'A Flora tem um conhecimento impressionante. Me sinto segura com o acompanhamento.', author: 'Mariana L.' },
]

function Reviews() {
  return (
    <section className="sp" id="avaliacoes">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Depoimentos</span>
          <h2>Pacientes recomendam</h2>
          <p>150 avaliações com nota 4.8 no Google</p>
        </motion.div>
        <motion.div className="rev-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {reviews.map((r, i) => (
            <motion.div key={i} className="rc" variants={fadeUp} custom={i}>
              <div className="rc-stars"><Stars /></div>
              <p className="rc-txt">&ldquo;{r.text}&rdquo;</p>
              <div className="rc-auth">{r.author}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="cta sp">
      <div className="mx">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Sua saúde<br /><span className="a">personalizada</span></h2>
          <p>Agende sua consulta e descubra a nutrição ideal para o seu corpo e seus objetivos.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="big">
            <WhatsappLogo size={22} weight="duotone" /> Agendar Consulta
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="mx">
        <div className="footer-brand">Flora <span>Edler</span></div>
        <div className="footer-info">
          <MapPin size={12} weight="duotone" style={{ verticalAlign: 'middle' }} /> Ingleses Norte e Centro — Florianópolis, SC<br />
          Atendimento particular · Emite nota fiscal
        </div>
        <div className="footer-copy">© 2026 Flora Edler Nutricionista. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

function FloatingCta() {
  return (
    <motion.a href={WA} target="_blank" rel="noopener noreferrer" className="fbtn" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} whileHover={{ scale: 1.05 }}>
      <WhatsappLogo size={18} weight="duotone" /> Agendar
    </motion.a>
  )
}

function App() {
  return (
    <>
      <Helmet>
        <title>Flora Edler | Nutricionista — Florianópolis</title>
        <meta name="description" content="Nutricionista com mestrado UFSC. Nota 4.8 com 150 avaliações. Nutrigenômica, emagrecimento e nutrição funcional." />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Servicos />
      <Reviews />
      <Cta />
      <Footer />
      <FloatingCta />
    </>
  )
}

export default App
