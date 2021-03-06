import React, { Component } from 'react';

export const SkillButtons = (props) => {
  const { skills, populateSkillDescription, active } = props;
  console.log(active);
  return (
    <div id="skill-list" className="skill-list col-md-6 col-sm-12">
    	{Object.keys(skills).map((key) =>
    		<div id={key + "-block"} className={"skill-block col-lg-4 " + (active===key ? "active-skill" : "")}>
    			<button type="button" 
    				onClick={(e) => populateSkillDescription(key)}
    				className={"btn skill-code-" + skills[key].rating}>
    				<span className="button-text">{key}</span>
    			</button>
    		</div>
    	)}
	</div>
  )
}

export default SkillButtons;