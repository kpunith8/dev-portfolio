import React from "react";
import Content from "../../utils/content";
import {experiences} from '../../utils/static-data';

const Experience = () => (
  <>
    <p className="experience">Experience</p>
    {experiences.map(exp => (
      <Content
        style={{ marginBottom: "20px" }}
        header={exp.company}
        role={exp.role}
        period={exp.period}
      />
    ))}
  </>
);

export default Experience;
