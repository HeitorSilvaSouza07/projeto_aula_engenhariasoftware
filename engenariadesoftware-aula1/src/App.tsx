// src/App.tsx

import {
  GraduationCap,
  UserRound,
  School,
  BookOpen,
  UsersRound,
  LogIn,
} from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Heitor Silva",
    role: "Estudante",
  },
  {
    name: "Matheus Terra",
    role: "Software Developer",
  },
  {
    name: "Arthur Souza",
    role: "Web Developer",
  },
];

function App() {
  return (
    <main className="page">
      <header className="header">
        <a href="/" className="logo">
          <GraduationCap size={18} />
          <span>Pro Siga</span>
        </a>

        <nav className="header-actions">
          <a href="#sobre" className="button button-primary button-small">
            O que é o ProSiga?
          </a>

          <a href="/login" className="button button-outline button-small">
            <LogIn size={12} />
            Entrar
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-image-wrapper">
          <div className="hero-icons">
            <GraduationCap size={72} strokeWidth={1.5} />
            <BookOpen size={52} strokeWidth={1.5} />
          </div>
        </div>

        <div className="hero-content">
          <h1>
            Feito para o <span>aluno</span> e para <br />
            o <span>professor</span>
          </h1>

          <p>
            O ProSiga é uma ferramenta ágil, moderna e intuitiva, pensada para
            criar praticidade. Com uma interface limpa e funcional, facilita a
            gestão de provas e tarefas, mantendo o aluno por dentro das
            atividades.
          </p>

          <a href="/cadastro" className="button button-primary">
            Experimente já
          </a>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="google-box">
          <div className="google-title">Google</div>

          <div className="testimonials">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="testimonial-icon">
                  <UserRound size={22} strokeWidth={1.7} />
                </div>

                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-heading">
          <h2>
            Pensado em <span>agilidade</span> e <span>facilidade</span>
            <br />
            no caminho da informação
          </h2>

          <p>
            Centralize tarefas, recursos e atualizações em
            <br />
            um só lugar, com acesso simples para
            <br />
            professores e alunos.
          </p>
        </div>

        <div className="features">
          <article className="feature">
            <div className="feature-image-wrapper">
              <School size={82} strokeWidth={1.4} />
            </div>

            <h3>O professor</h3>

            <p>
              Organiza conteúdos, acompanha a
              <br />
              turma e simplifica a rotina acadêmica.
            </p>
          </article>

          <article className="feature">
            <div className="feature-image-wrapper">
              <UsersRound size={82} strokeWidth={1.4} />
            </div>

            <h3>O aluno</h3>

            <p>
              Recebe avisos, acompanha informações
              <br />
              importantes e se mantém conectado.
            </p>
          </article>
        </div>

        <a href="/sobre" className="button button-primary about-button">
          Saiba mais aqui
        </a>
      </section>

      <footer className="footer" />
    </main>
  );
}

export default App;