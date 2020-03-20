import React from "react";
import Content from "../../utils/content";
import { educations } from "../../utils/static-data";

const Education = () => (
  <>
    <p className="education">Education</p>
    {educations.map(edu => (
      <Content
        style={{ marginBottom: "20px" }}
        header={edu.college}
        role={edu.course}
        period={edu.period}
      />
    ))}
  </>
);

export default Education;
