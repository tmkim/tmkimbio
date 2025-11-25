import Intro from "./sections/intro"
import Passions from "./sections/passions"
import Projects from "./sections/projects"
import Resume from "./sections/resume"
import Contact from "./sections/contact"
import PassionsB from "./PassionsB"
import PassionsC from "./PassionsC"

export default function Page(){
  return(
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section id="intro" className="h-screen snap-start flex items-center justify-center bg-[var(--bg)]">
        <Intro />
      </section>

      <section id="passions" className="h-screen snap-start flex items-center justify-center bg-[var(--surface)]">
        <Passions />
      </section>

      <section id="projects" className="h-screen snap-start flex items-center justify-center bg-[var(--bg)]">
        <Projects />
      </section>

      <section id="resume" className="h-screen snap-start flex items-center justify-center bg-[var(--surface)]">
        <Resume />
      </section>

      <section id="contact" className="h-screen snap-start flex items-center justify-center bg-[var(--bg)]">
        <Contact />
      </section>
    </div>
  )
}
