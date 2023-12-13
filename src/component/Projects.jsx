import React from 'react'
import crypto from '../assets/cryptoTracker.png'
import financely from '../assets/financely.png'
import postoffice from '../assets/postoffice.png'
import typecat from '../assets/typecat.png'
import weatherApp from '../assets/weather-app.png'
import youTube from '../assets/youTube.png'
import 'boxicons';


const Projects = () => {
    const projectArr = [
        {
            img: crypto,
            name: 'CryptoTracker.',
            desc: 'A real-time crypto tracker for informed investment decisions and portfolio management.',
            gitlink: 'https://github.com/pritimunde1999/Crypto-Tracker-website',
            visit: 'https://crypto-tracker-website-kappa.vercel.app/'
        },
        {
            img: typecat,
            name: 'TypeCat',
            desc: 'A web-based typing speed test platform to assess and improve users keyboard proficiency.',
            gitlink: 'https://github.com/pritimunde1999/Typing-Speed-Test',
            visit: 'https://typing-speed-test-beta.vercel.app/'
        },
        {
            img: postoffice,
            name: 'PostOffice Locator',
            desc: 'Effortlessly locate nearby post offices with this user-friendly postal service locator project.',
            gitlink: 'https://github.com/pritimunde1999/Post_Office_Application',
            visit: 'https://pritimunde1999.github.io/Post_Office_Application/'
        },
        {
            img: financely,
            name: 'Financely',
            desc: 'Empower your financial journey with a streamlined personal finance tracker for efficient budgeting and wealth management.',
            gitlink: 'https://github.com/pritimunde1999/Personal-Finance-Tracker-new',
            visit: 'https://personal-finance-tracker-new.vercel.app/'
        },
        {
            img: youTube,
            name: 'YouTube Clone',
            desc: '"Craft a personalized YouTube clone for tailored video-sharing.',
            gitlink: 'https://github.com/pritimunde1999/YouTube_clone',
            visit: 'https://pritimunde1999.github.io/YouTube_clone/'
        },
        {
            img: weatherApp,
            name: 'Weather App',
            desc: 'Access real-time weather updates seamlessly with this intuitive weather app project.',
            gitlink: 'https://github.com/pritimunde1999/Weather-App',
            visit: 'https://pritimunde1999.github.io/Weather-App/'
        },
    ]
    return (
        <section className="project pb-36">
            <h2 className="heading font-bold mb-16">Latest <span>Project</span></h2>

            <div className="projects-container">

                {
                    projectArr.map(project => (
                        <div className="projects-box">
                            <img src={project.img} alt={project.name} className='hover:scale-110' />

                            <div className="projects-layer">
                                <h4>{project.name}</h4>
                                <p>{project.desc}</p>
                                <div className='flex gap-6'>
                                    <a href={project.visit} target='_blank'><box-icon name='link-external' ></box-icon></a>
                                    <a href={project.gitlink} target='_blank'><box-icon name='github' type='logo' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </section>
    )
}

export default Projects