import React from "react";
import { uuid } from "uuidv4";
import Content from "../../utils/content";
import { educations } from "../../utils/static-data";

const Education = () => (
  <>
    <p className="title-header education">Education</p>
    {educations.map((edu) => (
      <Content
        key={uuid()}
        style={{ marginBottom: 20, marginLeft: -10 }}
        header={edu.college}
        role={edu.course}
        period={edu.period}
      />
    ))}
  </>
);

export default Education;
