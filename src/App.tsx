import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

import {
  Home,
  User,
  Rocket,
  GraduationCap,
  Satellite,
  Code,
  Menu,
  Download,
  Send,
  Mail,
  MapPin,
  Github,
  Check,
  Cloud,
  Database,
  Palette,
  EarthIcon,
  WholeWord,
  Linkedin,
  Globe,
  X,
} from "lucide-react";

const styles = `
  @keyframes rocketFly {
    0% {
      transform: translate(0, 0) rotate(-45deg) scale(1);
      opacity: 1;
    }
    50% {
      transform: translate(200px, -400px) rotate(-50deg) scale(1.2);
      opacity: 1;
    }
    100% {
      transform: translate(400px, -800px) rotate(-55deg) scale(0.5);
      opacity: 0;
    }
  }
`;

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  interface Rocket {
    id: number;
    startX: number;
    delay: number;
  }

  const [rockets, setRockets] = useState<Rocket[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "projects",
        "experience",
        "education",
        "languages",
        "contact",
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;

          if (scrollPosition >= elementTop - 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "hero", icon: Home, label: "Missão" },
    { id: "about", icon: User, label: "Tripulação" },
    { id: "projects", icon: Rocket, label: "Expedições" },
    { id: "education", icon: GraduationCap, label: "Diário de Bordo" },
    { id: "languages", icon: Globe, label: "Constelação de Idiomas" },
    { id: "contact", icon: Satellite, label: "Sinal" },
  ];
  const apiUrl = import.meta.env.VITE_SERVICE_KEY;
  const templateKey = import.meta.env.VITE_TEMPLATE_KEY;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newRockets = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      startX: Math.random() * 100,
      delay: i * 0.2,
    }));
    setRockets(newRockets);

    setTimeout(() => setRockets([]), 3000);

    emailjs.sendForm(apiUrl, templateKey, e.target, publicKey).then(
      () => {
        alert("Transmissão enviada com sucesso 🚀");
        e.target.reset();
      },
      (error) => {
        console.error(error);
        alert("Falha na transmissão ❌");
      }
    );
  };

  const projects = [
    {
      title: "ShapeMeApp",
      category: "Mobile Delevelopment • Fitness App",
      description:
        "Aplicativo mobile desenvolvido em React Native, com armazenamento local via Async Storage e integração ao Firebase, focado em treinos personalizados, acompanhamento de progresso e gestão inteligente de avaliações físicas.",
      tech: ["React Native", "TypeScript", "Firebase", "Async Storage"],
      image: "https://i.imgur.com/QkyLuqn.jpeg",
      github: "https://github.com/GustavoMatoi/SMAAluno",
    },
    {
      title: "Toxoplasmose e Machine Learning",
      category: "Machine Learning aplicado à Saúde • Healthcare",
      description:
        "Proposta de classificação automatizada da toxoplasmose ocular em imagens de fundo de olho, utilizando características radiômicas e algoritmos de machine learning e deep learning, visando acurácia superior a 90% para apoio ao diagnóstico oftalmológico.",
      tech: ["Python", "Scikit Learn", "Tensorflow", "CV2"],
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20250121155050429170/non_linear_svm_polynomial_kernel.png",
      github: "https://github.com/GustavoMatoi/TCC-Grad_Ciencia_da_Comp",
    },
    {
      title: "Climate & Geo Prototype",
      category: "Mobile • Geolocalização • Dados Climáticos",
      description:
        "Protótipo experimental que combina geolocalização, consumo de APIs e visualização de dados climáticos em tempo real. O projeto explora a integração entre localização do usuário, previsão do tempo e apresentação dinâmica das informações, com foco em testar tecnologias e fluxos, não em um produto final.",
      tech: ["React Native", "Expo", "OpenWeatherMap API"],
      image: "https://i.imgur.com/B9tiGhr.jpeg",
      github: "https://github.com/GustavoMatoi/projeto_final_sig",
    },
    {
      title: "Transferência de Arquivos via Reconhecimento de Gestos",
      category: "Full Stack TypeScript • Inovação",
      description: "Em breve...",
      tech: [
        "React",
        "React Native",
        "Electron",
        "Node.js",
        "WebSocket",
        "MediaPipe Hands",
      ],
      image: "https://i.imgur.com/hLPDd7k.jpeg",
      github: "#",
    },
    {
      title: "Sistema Solar 3D Interativo",
      category: "Educação • WebGL",
      description:
        "Projeto educativo desenvolvido para adolescentes interessados em programação e astronomia. A aplicação permite explorar o sistema solar em 3D de forma interativa, enquanto os alunos aprendem conceitos de lógica, programação gráfica e computação visual, utilizando tecnologias modernas da web.",
      tech: ["JavaScript", "React", "Three.js", "WebGL", "React Three Fiber"],
      image: "https://i.imgur.com/LHcstmg.png",
      github: "#",
    },
  ];

  const experiences = [
    {
      period: "2025 - Atualmente",
      title: "Professor de Programação",
      company: "Ctrl+Play (CNA+)",
      description:
        "Atuação como professor de programação, com foco na organização de conteúdos, acompanhamento técnico dos alunos e orientação prática em projetos de desenvolvimento. ",
      active: true,
    },
    {
      period: "2022 - 2024",
      title: "Desenvolvedor Mobile Jr",
      company: "IF Sudeste MG - Campus Rio Pomba",
      description:
        "Desenvolvimento de um aplicativo para gestão da academia do IF Sudeste MG, para servidores, docentes e discentes.",
    },
    {
      period: "2023 - 2023",
      title: "Professor de Informática",
      company: "Escola Estadual Professor José Borges de Morais",
      description:
        "Ensino de ferramentas digitais essenciais, com foco em produtividade, organização e uso prático de Excel, Gmail e Google Docs.",
    },
  ];

  const education = [
    /*   {
      title: "Mestrado em Ciência da Computação",
      institution: "Universidade Federal de Viçosa",
      year: "2026 - Atualmente",
      icon: GraduationCap,
      color: "primary",
    }, */
    {
      title: "Especialização em Desenvolvimento Web e Mobile",
      institution: "IF Sudeste MG - Campus Rio Pomba",
      year: "2025 - Atualmente",
      icon: EarthIcon,
      color: "accent",
    },
    {
      title: "Inglês Avançado",
      institution: "CNA+",
      year: "2025 - Atualmente",
      icon: WholeWord,
      color: "accent",
    },
    {
      title: "Bacharel em Ciência da Computação",
      institution: "IF Sudeste MG - Campus Rio Pomba",
      year: "2020 - 2024",
      icon: GraduationCap,
      color: "primary",
    },
  ];

  return (
    <div className="flex h-screen w-full relative bg-[#0B0912] text-slate-200 overflow-hidden">
      {/* Injeta o CSS da animação */}
      <style>{styles}</style>

      {/* Rockets Animation */}
      {rockets.map((rocket: any) => (
        <div
          key={rocket.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: `${rocket.startX}%`,
            bottom: "-100px",
            animation: `rocketFly 2s ease-out ${rocket.delay}s forwards`,
          }}
        >
          <div className="relative">
            {/* Trilha de fogo */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-orange-500 via-red-500 to-transparent opacity-70 blur-sm" />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2 h-12 bg-gradient-to-b from-yellow-400 via-orange-500 to-transparent opacity-90" />

            {/* Foguete */}
            <Rocket className="w-8 h-8 text-purple-400 drop-shadow-[0_0_10px_rgba(139,92,246,0.8)] rotate-[-45deg]" />
          </div>
        </div>
      ))}

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(139,92,246,0.5) 1.5px, transparent 1.5px)",
            backgroundSize: "110px 110px",
            backgroundPosition: "20px 20px",
          }}
        />
        <div className="absolute -bottom-[20%] -right-[10%] w-[80vw] h-[80vw] md:w-150 md:h-150 rounded-full bg-gradient-to-tr from-black via-purple-900/20 to-transparent blur-3xl opacity-60" />
        <div className="absolute top-[10%] -left-[5%] w-75 h-75 rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-2xl opacity-40" />
      </div>

      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex w-72 flex-col h-full z-20 border-r border-white/5 bg-[#0B0912]/80 backdrop-blur-md shadow-[5px_0_30px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col h-full p-6 justify-between">
          <div className="flex flex-col gap-6">
            {/* Profile */}
            <div className="flex items-center gap-4">
              <div className="relative group cursor-pointer h-14 w-14">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-cyan-500 blur rounded-full opacity-60 group-hover:opacity-80 transition-opacity animate-pulse" />

                <img
                  src="https://avatars.githubusercontent.com/u/87538302?s=400&u=803a0cb53d22bd28984a5e0f847881a781092ba8&v=4"
                  alt="eu"
                  className="relative h-14 w-14 rounded-full object-cover border border-white/20"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-lg font-bold leading-tight tracking-wide">
                  Gustavo Vaz Teixeira
                </h1>
                <p className="text-cyan-500 text-sm font-medium tracking-wider">
                  Explorer & Coder
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2 mt-4">
              {navItems.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setActiveSection(id);
                  }}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeSection === id
                      ? "bg-purple-600/20 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                      : "text-slate-400 hover:bg-[#151221] hover:text-white hover:translate-x-1"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      activeSection === id
                        ? "animate-pulse text-white"
                        : "group-hover:text-cyan-500"
                    } transition-colors`}
                  />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4 pt-6 border-t border-white/5 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent" />
            <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-[0.2em] px-2 text-center">
              Frequência
            </p>
            <div className="flex justify-center gap-3 px-2">
              <a
                href="https://github.com/GustavoMatoi"
                className="p-2 rounded-lg bg-[#151221] hover:bg-purple-600/20 hover:text-purple-400 transition-all hover:-translate-y-1 text-slate-400 shadow-lg border border-white/5"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gustavo-v-6b613524b/"
                className="p-2 rounded-lg bg-[#151221] hover:bg-purple-600/20 hover:text-purple-400 transition-all hover:-translate-y-1 text-slate-400 shadow-lg border border-white/5"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 w-full z-50 bg-[#0B0912]/90 backdrop-blur-md border-b border-white/10 px-4 py-3 flex justify-between items-center shadow-lg shadow-purple-500/5">
        <span className="font-bold text-lg text-white tracking-widest uppercase">
          Gustavo Vaz Teixeira
        </span>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-white bg-[#151221] rounded-md border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Menu Mobile com animação slide */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay com blur */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Menu deslizante */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-br from-[#0B0912] via-[#151221] to-[#0B0912] shadow-2xl transition-transform duration-500 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header do menu */}
          <div className="px-6 py-8 border-b border-white/10">
            <h3 className="text-2xl font-bold text-white mb-1">Menu</h3>
            <p className="text-sm text-white/60">Navegue pelo portfólio</p>
          </div>

          {/* Items do menu */}
          <nav className="px-6 py-8 space-y-3 overflow-y-auto max-h-[calc(100vh-180px)]">
            {navItems.map(({ id, label, icon: Icon }, index) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  setMobileMenuOpen(false);
                }}
                className={`group w-full flex items-center gap-4 p-4 text-white hover:text-cyan-400 rounded-lg border border-white/10 hover:border-cyan-500/50 bg-white/5 hover:bg-cyan-500/10 transition-all duration-300 transform hover:translate-x-2 ${
                  mobileMenuOpen ? "animate-fadeInRight" : ""
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500 transition-all duration-300">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-base font-medium tracking-wide">
                  {label}
                </span>
              </button>
            ))}
          </nav>

          {/* Footer decorativo */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-white/10 bg-gradient-to-t from-[#0B0912] to-transparent">
            <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>Desenvolvido por Gustavo Vaz</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto scroll-smooth relative z-10 h-full pt-16 lg:pt-0">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center relative px-4 py-20 lg:px-20 overflow-hidden"
        >
          <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#151221]/80 border border-purple-500/30 w-fit backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)] animate-[float_8s_ease-in-out_infinite]">
                <div className="relative w-2 h-2">
                  <span className="absolute w-2 h-2 rounded-full bg-purple-500 animate-ping opacity-75" />
                  <span className="relative block w-2 h-2 rounded-full bg-purple-500" />
                </div>
                <span className="text-xs font-semibold text-purple-300 uppercase tracking-widest">
                  Sistema Operacional
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                Construindo <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-white to-purple-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                  Galáxias Digitais
                </span>
              </h1>

              <p className="text-slate-400 text-lg max-w-lg leading-relaxed border-l-2 border-purple-500/30 pl-4">
                Entre ensino, código e ciência: navegando por experiências
                digitais com método e propósito.
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href="/Gustavo_Curriculo_atualizado_2025.pdf"
                  download="Gustavo_Vaz_Teixeira_Curriculo_2025.pdf"
                  className="group relative overflow-hidden bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-1 inline-block"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="flex items-center gap-2 relative z-10">
                    <Download className="w-5 h-5" />
                    <span>Dados do Capitão</span>
                  </span>
                </a>
  
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 relative">
                <p className="text-[10px] text-slate-500 mb-4 font-mono tracking-widest uppercase">
                  Tecnologias em Órbita
                </p>
                <div className="flex gap-6 opacity-70">
                  <Code className="w-8 h-8 hover:text-cyan-500 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all " />
                  <Database className="w-8 h-8 hover:text-cyan-500 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all " />
                  <Cloud className="w-8 h-8 hover:text-cyan-500 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all " />
                  <Palette className="w-8 h-8 hover:text-cyan-500 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all " />
                </div>
              </div>
            </div>

            {/* Hero Image - Planet with Moons */}
            <div className="order-1 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-square transition-transform duration-700 hover:scale-105">
                {/* Orbit Rings */}
                <div className="absolute inset-[-10%] border border-purple-500/10 rounded-full pointer-events-none" />
                <div className="absolute inset-[-20%] border border-cyan-500/5 rounded-full pointer-events-none" />

                {/* Moon Orbits */}
                <div className="absolute inset-[-10%] border border-purple-500/20 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none">
                  {/* Moon 1 - Professor */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-purple-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" />
                      <div className="relative  w-12 h-12  rounded-full bg-gradient-to-br from-purple-600 to-purple-800 border-2 border-purple-400/50 shadow-[0_0_20px_rgba(139,92,246,0.5)] flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-[-20%] border border-cyan-500/20 rounded-full animate-[spin_25s_linear_infinite_reverse] pointer-events-none">
                  {/* Moon 2 - Developer */}
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                    <div className="relative group">
                      <div className="absolute inset-1 bg-cyan-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" />
                      <div className="relative  w-12 h-12  rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 border-2 border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-[-30%] border border-purple-400/20 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none">
                  {/* Moon 3 - Scientist */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-purple-400 blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" />
                      <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 border-2 border-purple-300/50 shadow-[0_0_20px_rgba(168,85,247,0.5)] flex items-center justify-center">
                        <Rocket className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.15)] bg-[#151221] z-10 animate-[float_8s_ease-in-out_infinite]">
                  {/* Imagem principal */}
                  <img
                    src="https://i.imgur.com/xTfVjWR.png"
                    alt="Sistema de transferência de arquivos por gestos"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />

                  {/* Glow interno */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20" />

                  {/* Sombra para profundidade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0912] via-transparent to-transparent opacity-80" />
                </div>

                {/* Status Badge */}
                <div className="absolute bottom-10 -right-4 bg-[#151221]/70 backdrop-blur-md p-4 rounded-xl border-l-2 border-cyan-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 animate-[float_8s_ease-in-out_4s_infinite] hidden md:block border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500 blur opacity-40 animate-pulse" />
                      <Check className="w-5 h-5 text-green-400 relative z-10" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                        Status do Sistema
                      </p>
                      <p className="text-sm font-bold text-white">
                        Operacional
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="relative h-32 w-full overflow-hidden pointer-events-none -my-16 z-10">
          <div className="absolute top-[60%] left-[-10%] w-[120%] h-75 rounded-[100%] border-t border-purple-500/30 shadow-[0_-2px_20px_rgba(139,92,246,0.2)] blur-px" />
        </div>

        {/* About Section */}
        <section id="about" className="py-24 px-4 lg:px-20 relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-0.5 w-12 bg-linear-to-r from-transparent to-purple-600" />
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]">
                Sobre Mim
              </h2>
              <div className="h-0.5 flex-1 bg-linear-to-r from-purple-500/30 to-transparent opacity-30" />
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2 space-y-6 text-slate-300 leading-relaxed text-lg font-light">
                <p>
                  Atuo há mais de 6 anos na área da computação, desenvolvendo
                  sistemas e experiências digitais com tecnologias como React,
                  Python, Java, entre outras. Ao longo da minha trajetória
                  acadêmica — Graduação, Pós-graduação e agora com foco no
                  Mestrado — sempre busquei aprender de forma vertical,
                  aprofundando fundamentos, e também horizontal, explorando
                  diferentes áreas e ferramentas.
                  <br />
                  No meu dia a dia profissional, tenho contato constante com
                  múltiplas tecnologias, o que me levou a estudar e aplicar
                  soluções com Unity, Construct, GameMaker, Blender, Three.js,
                  além de desenvolvimento web e mobile. Essa diversidade técnica
                  reflete meu interesse em compreender não apenas como construir
                  sistemas, mas por que e para quem eles são construídos.
                  <br />
                  Já atuei em áreas multidisciplinares como monitoria inclusiva,
                  desenvolvimento de soluções digitais voltadas à educação
                  física (incluindo aplicativos de academia), além de projetos
                  envolvendo machine learning aplicado à saúde, tema do meu TCC.
                  Atualmente, tenho direcionado meus estudos para a interseção
                  entre computação e ciências biológicas, com interesse
                  crescente em bioinformática.
                  <br />
                  Acredito que a computação é uma ponte entre áreas e pessoas —
                  e é exatamente nessa conexão que encontro motivação para
                  aprender, ensinar e criar.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-b from-purple-500/20 to-cyan-500/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                <div className="relative bg-[#151221]/80 backdrop-blur-sm p-6 rounded-xl border border-white/5 h-fit shadow-xl">
                  <h3 className="text-xs font-bold text-cyan-500 mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
                    <Rocket className="w-4 h-4" />
                    Arsenal
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Next.js",
                      "Node.js",
                      "Tailwind",
                      "React Native",
                      "Android",
                      "MongoDB",
                      "Python",
                      "Machine Learning",
                      "Firebase",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded bg-[#2E2842] border border-white/5 text-xs font-medium text-slate-300 hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_10px_rgba(139,92,246,0.2)] transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-12 bg-linear-to-r from-transparent to-cyan-500" />
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">
                  Projetos Recentes
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-xl h-full transition-transform duration-500 hover:-translate-y-2"
                >
                  <div className="absolute -inset-px rounded-xl bg-linear-to-r from-cyan-500 via-purple-600 to-purple-600 opacity-20 group-hover:opacity-100 blur-0.5 transition-opacity duration-500" />
                  <div className="relative h-full bg-[#12141d] rounded-xl overflow-hidden flex flex-col border border-white/5 shadow-2xl">
                    <div
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(white 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    <div className="h-52 relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12141d] via-transparent to-transparent" />
                    </div>

                    <div className="p-6 pt-2 flex flex-col flex-1 relative z-10">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-wide">
                          {project.title}
                        </h3>
                        <p className="text-xs text-purple-400 font-mono mt-1 tracking-wider uppercase">
                          {project.category}
                        </p>
                      </div>

                      <p className="text-slate-400 text-sm font-light leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.tech.map((tech, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] text-cyan-200 shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all"
                          >
                            <Code className="w-3.5 h-3.5" />
                            <span className="font-medium tracking-wide">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
                        <a
                          href={project.github}
                          className="group/btn relative flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                          <Github className="w-4.5 h-4.5 group-hover/btn:text-purple-400 transition-colors" />
                          <span>GitHub</span>
                          <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-600 group-hover/btn:w-full transition-all duration-300 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="py-24 px-4 lg:px-20 relative">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 relative z-10">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-0.5 w-12 bg-linear-to-r from-transparent to-purple-600" />
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]">
                  Experiência
                </h2>
              </div>

              <div className="relative border-l border-white/10 ml-3 space-y-12">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    <div
                      className={`absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-[#0B0912] border-2 ${
                        exp.active
                          ? "border-purple-500"
                          : "border-slate-600 group-hover:border-cyan-500"
                      } group-hover:scale-125 ${
                        exp.active
                          ? "shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                          : "group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                      } transition-all`}
                    />
                    <div className="flex flex-col gap-1 p-4 rounded-xl hover:bg-white/5 transition-colors">
                      <span
                        className={`text-xs font-mono mb-1 tracking-wider uppercase ${
                          exp.active ? "text-purple-400" : "text-slate-500"
                        }`}
                      >
                        {exp.period}
                      </span>
                      <h3
                        className={`text-xl font-bold text-white ${
                          exp.active
                            ? "group-hover:text-purple-400"
                            : "group-hover:text-cyan-400"
                        } transition-colors`}
                      >
                        {exp.title}
                      </h3>
                      <p className="text-sm text-slate-400">{exp.company}</p>
                      <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div id="education">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-0.5 w-12 bg-linear-to-r from-transparent to-cyan-500" />
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">
                  Educação
                </h2>
              </div>

              <div className="grid gap-6">
                {education.map((edu, idx) => {
                  const Icon = edu.icon;
                  return (
                    <div
                      key={idx}
                      className="relative group bg-[#151221] border border-white/5 p-6 rounded-xl overflow-hidden hover:border-purple-400/40 transition-all"
                    >
                      <div
                        className={`absolute inset-0 bg-linear-to-r ${
                          edu.color === "primary"
                            ? "from-purple-500/5"
                            : "from-cyan-500/5"
                        } to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                      />

                      <div className="relative flex justify-between items-start mb-2">
                        <div
                          className={`p-2 ${
                            edu.color === "primary"
                              ? "bg-purple-600/10 text-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                              : "bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                          } rounded-lg`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono py-1 px-2 bg-white/5 rounded border border-white/5">
                          {edu.year}
                        </span>
                      </div>

                      <h3
                        className={`relative text-lg font-bold text-white ${
                          edu.color === "primary"
                            ? "group-hover:text-purple-400"
                            : "group-hover:text-cyan-400"
                        } transition-colors`}
                      >
                        {edu.title}
                      </h3>
                      <p className="relative text-sm text-slate-400">
                        {edu.institution}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="relative h-24 w-full overflow-hidden pointer-events-none -my-12 z-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[100px] border-t-2 border-purple-500/20 rounded-[100%] shadow-[0_-2px_20px_rgba(139,92,246,0.1)] blur-0.5" />
        </div>
        {/* Languages Section */}
        <section id="languages" className="py-24 px-4 lg:px-20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-0.5 w-12 bg-linear-to-r from-transparent to-cyan-500" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">
                Idiomas
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { language: "Inglês", level: "Avançado" },
                { language: "Espanhol", level: "Básico-Intermediário" },
                { language: "Francês", level: "Básico" },
              ].map((lang, idx) => (
                <div
                  key={idx}
                  className="relative group bg-[#151221] border border-white/5 p-6 rounded-xl overflow-hidden hover:border-purple-400/40 transition-all"
                >
                  <div className="relative flex justify-between items-start mb-2">
                    <div className="p-2 bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] rounded-lg">
                      <WholeWord className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {lang.language}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 lg:px-20 mb-20">
          <div className="max-w-4xl mx-auto bg-[#151221]/70 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-white/10 relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-purple-500/30 transition-all duration-700" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700" />

            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]">
                  Vamos conversar?
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Estou sempre aberto a novas oportunidades e parcerias
                  interestelares. Envie uma mensagem e vamos construir algo
                  incrível.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-12 h-12 rounded-full bg-[#151221] border border-white/5 flex items-center justify-center text-purple-400 group-hover/item:text-white group-hover/item:bg-purple-600 transition-all shadow-lg">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                        Email
                      </p>
                      <a
                        href="mailto:guteixeira2001@gmail.com"
                        className="text-white hover:text-purple-400 transition-colors"
                      >
                        guteixeira2001@gmail.com{" "}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group/item">
                    <div className="w-12 h-12 rounded-full bg-[#151221] border border-white/5 flex items-center justify-center text-cyan-400 group-hover/item:text-white group-hover/item:bg-cyan-500 transition-all shadow-lg">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                        Localização
                      </p>
                      <p className="text-white">Minas Gerais, Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-slate-500 uppercase mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Comandante Fulano"
                    className="w-full bg-[#0B0912]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all placeholder-slate-600 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-slate-500 uppercase mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="fulano@nasa.com"
                    className="w-full bg-[#0B0912]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all placeholder-slate-600 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-slate-500 uppercase mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Aguardando ordens..."
                    className="w-full bg-[#0B0912]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all placeholder-slate-600 backdrop-blur-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 mt-4 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:-translate-y-1"
                >
                  <span>Enviar Transmissão</span>
                  <Send className="w-4 h-4 animate-pulse" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-slate-600 text-sm border-t border-white/5 bg-[#08060d]">
          <p>© 2026 Gustavo Vaz Teixeira.</p>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;
