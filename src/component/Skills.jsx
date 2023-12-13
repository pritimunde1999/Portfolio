import React from 'react'
import java from "../assets/java.png"
import html from "../assets/html.png"
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import vsCode from '../assets/vsCode.png'
import github from '../assets/github.png'
import springboot from '../assets/spring-boot.png'
import tailwind from '../assets/Tailwind.png'
import IntelliJ from '../assets/IntelliJ.png'
import firebase from '../assets/firebase.png'
import mysql from '../assets/mysql.png'
import materialUi from '../assets/material-ui.png'


const Skills = () => {
    const skillArr = [
        {img : java,name : "Java"},
        {img : js,name : "JavaScript"},
        {img : html,name : "HTML5"},
        {img : css,name : "CSS3"},
        {img : react,name : "React.js"},
        {img : springboot,name : "Spring Boot"},
        {img : vsCode,name : "Visual Studio"},
        {img : IntelliJ,name : "IntelliJ"},
        {img : materialUi,name : "Material Ui"},
        {img : tailwind,name : "Tailwind CSS"},
        {img : mysql, name: "MySQL"},
        {img : github,name : "GitHub"},
        {img : firebase,name : "Firebase"},
        
        

    ]
    return (
        <section className="skills" >
            <h2 className="heading font-bold mb-16">My <span>Skills</span></h2>

            <div className="skills-container w-3/4 m-auto flex flex-wrap gap-12 justify-center items-center">
               
                {
                    skillArr.map(skill =>(
                        <div className='image'>
                             <img className='skill-logo' src={skill.img} alt={skill.name} />
                             <h4 className='text-3xl font-semibold'>{skill.name}</h4>
                        </div>
                    ))
                }
                
            </div>
        </section>
    )
}

export default Skills