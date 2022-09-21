import { FC, useState } from "react";
import { SkillsProps } from "./skills.types";

const Skills: FC<SkillsProps> = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
        {isLoggedIn ? (
          <button>Start learning</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </ul>
    </>
  );
};

export default Skills;
