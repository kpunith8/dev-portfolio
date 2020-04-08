import React from "react";
import { uuid } from "uuidv4";
import Content from "../../utils/content";
import { experiences } from "../../utils/static-data";

const Experience = () => (
  <>
    <p className="title-header experience">Experience</p>
    {experiences.map((exp) => (
      <Content
        key={uuid()}
        style={{ marginBottom: "20px" }}
        header={exp.company}
        role={exp.role}
        period={exp.period}
      />
    ))}
  </>
);

export default Experience;
