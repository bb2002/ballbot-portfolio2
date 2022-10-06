import { Section } from "../../styles/pages/ProjectView.css";

const ProjectViewSection = ({title, children}) => {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  )
}

export default ProjectViewSection;