import Intro from "./sections/intro"
import Passions from "./sections/passions"
import Projects from "./sections/projects"
import Resume from "./sections/resume"
import Contact from "./sections/contact"

export default function Page(){
  return(
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      <Intro />
      <Passions />
      <Projects />
      <Resume />
      <Contact />
    </div>

  )
}