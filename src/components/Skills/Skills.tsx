import { FC } from "react";
import { SkillsProps } from "./skills.types";

const Skills: FC<SkillsProps> = (props: SkillsProps) => {
  const { skills } = props;
  return (
    <>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
