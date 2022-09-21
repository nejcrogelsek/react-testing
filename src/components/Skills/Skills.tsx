import { FC, useEffect, useState } from "react";
import { SkillsProps } from "./skills.types";

const Skills: FC<SkillsProps> = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1500);
  }, []);

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
