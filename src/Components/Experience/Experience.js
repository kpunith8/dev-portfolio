import React from "react";
import { uuid } from "uuidv4";
import LaptopIcon from "@material-ui/icons/Laptop";
import Content from "../../utils/content";
import { experiences } from "../../utils/static-data";

const Experience = () => (
  <>
    <div style={{ display: "flex", alignItems: "center" }}>
      <p className="title-header experience">Experience</p>
      <LaptopIcon className="s-icon experience-icon" style={{ fontSize: 40 }} />
    </div>
    {experiences.map((exp) => (
      <Content
        key={uuid()}
        style={{ marginBottom: 20, marginLeft: -10 }}
        header={exp.company}
        role={exp.role}
        period={exp.period}
        className="experience-item"
      />
    ))}
    <hr className="line-break" />
  </>
);

export default Experience;
