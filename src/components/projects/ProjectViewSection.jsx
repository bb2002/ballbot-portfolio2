import { Section } from "../../styles/pages/ProjectView.css";

const ProjectViewSection = ({title, children}) => {
  return (
    <Section>
      <h2>{title}</h2>
      <div className="custom-hr" />
      {children}
    </Section>
  )
}

export default ProjectViewSection;