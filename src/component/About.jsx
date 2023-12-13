import React, { useState } from 'react'

const About = () => {
    const [clicked,setClicked] = useState(false);
  return (
    <section className="about flex justify-center items-center gap-16" >
    {/* <div className="about-img wi">
        <img src="images/about.png" alt=""/>
    </div> */}

    <div className="about-content text-center">
        <h2 className="heading font-bold text-center">About <span>Me</span></h2>
        <h3 className='text-4xl font-bold'>
            Hi there, welcome to my website! I'm Priti,
            a passionate web developer who enjoys learning new technologies
            and solving problems with code!
        </h3>
        <p>
        I am a dedicated and ambitious fresher seeking a software developer role. Currently pursuing a full-stack web development course from Acciojob, I have honed my skills in Java, HTML5, CSS3, JavaScript, and React, gaining hands-on experience through project work.
        </p>
        <p>
        During my 3-month internship as an Android Developer intern, I gained practical experience and strengthened my ability to develop efficient and user-friendly application. My passion for coding and problem-solving, combined with my strong foundation in Java and web development, drives me to deliver high-quality software solutions.
        </p>
        
        {
            clicked ?
            <>
            <p> As a proactive learner, I embrace new technologies and stay updated with industry trends to ensure I can contribute effectively to projects. I am known for my strong analytical skills, attention to detail, and ability to work collaboratively in team-oriented environments.</p>
            <p> I am now eagerly seeking an opportunity to apply my skills and contribute to a dynamic software development team. With a commitment to continuous growth and a passion for crafting innovative solutions, I am confident in my ability to make a positive impact in the field of software development.</p>
            <p>Feel free to connect with me to explore potential collaborations or opportunities in software development.</p>
            </>
            :
            <></>
        }
        <div className="btn" onClick={()=>setClicked(!clicked)}>Read More</div>
    </div>
</section>
  )
}

export default About