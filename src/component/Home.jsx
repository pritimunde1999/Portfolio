import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { GrGithub } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";


const Home = () => {
  return (
    
        <section className="home flex items-center" >
        <div className="home-content">
            
            <h3 className='font-bold'>Hello, I am</h3>
            
            <h1 className='font-bold leading-2'>Priti Munde</h1>
            <p>
            As a passionate software developer, I take pride in crafting beautiful and functional websites that empower individuals and organizations to make a positive impact on the world.
            </p>
            <p>My toolkit includes expertise in HTML5, CSS3, JavaScript, and Java, and I am adept at creating dynamic and engaging user experiences. Additionally, I have a strong foundation in React.js, a powerful library for building scalable and responsive interfaces.</p>

            <div className="social-media">
                <a href="https://www.linkedin.com/in/priti-munde-822174199/" className='social-media-a' target='_blank'><FaLinkedinIn /></a>
                <a href="mailto:pritimunde0109@gmail.com" className='social-media-a' target='_blank'><MdAttachEmail /></a>
                <a href="https://github.com/pritimunde1999" className='social-media-a' target='_blank'><GrGithub/></a>
                {/* <a href="#"><i className='bx bxl-linkedin'></i></a> */}
            </div>

            <a href="https://bit.ly/priti-munde-resume" target='_blank' className="btn">Download CV</a>
        </div>

        <div className="profession-container absolute top-1/2 transform -translate-y-1/2 w-screen h-screen truncate pointer-events-none">
            <div className="profession-box absolute top-0 right-0 w-768 h-screen flex justify-center items-center animate-professionRotate">
                <div className="profession" style={{ '--i': 0 }}>
                    <FaCode className='mr-4 text-6xl'/>
                    <h3>Web Developer</h3>
                </div>
                <div className="profession" style={{ '--i': 1 }}>
                    <FaCode className='mr-4 text-6xl'/>
                    <h3>Software Developer</h3>
                </div>

                <div className="circle"></div>
            </div>

            <div className="overlay"></div>   
        </div>

        {/* <div className="home-img">
            <img src="images/home.png" alt=""/>
        </div> */}
    </section>

    
  )
}

export default Home