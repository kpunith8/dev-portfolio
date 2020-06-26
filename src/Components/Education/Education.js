import React from "react";
import { uuid } from "uuidv4";
import SchoolIcon from "@material-ui/icons/School";
import Content from "../../utils/content";
import { educations } from "../../utils/static-data";

const Education = () => (
  <>
    <div style={{ display: "flex", alignItems: "center" }}>
      <p className="title-header education">Education</p>
      <SchoolIcon className="s-icon" style={{ fontSize: 40 }} />
    </div>
    {educations.map((edu) => (
      <Content
        key={uuid()}
        style={{ marginBottom: 20, marginLeft: -10 }}
        header={edu.college}
        role={edu.course}
        period={edu.period}
      />
    ))}
    <hr className="line-break" />
  </>
);

export default Education;
