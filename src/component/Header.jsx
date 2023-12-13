import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import 'boxicons';


const Header = () => {
    const [isSticky, setSticky] = useState(false);
    const [isDark,setIsDark] = useState(false);
    const [isActive, setIsActive] = useState('home')
    const [menuOpen, setMenuOpen] = useState(false);
    const [isNavbarActive, setNavbarActive] = useState(false);
    
    const handleScroll = () => {
        setSticky(window.scrollY > 100);
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      useEffect(() => {
        // This effect runs when the component mounts and whenever isDarkMode changes
        document.body.classList.toggle('dark-mode', isDark);
    
        // Clean up the effect by removing the class when the component unmounts
        return () => {
          document.body.classList.remove('dark-mode');
        };
      }, [isDark]);

      const handleMenuIconClick =()=>{
        setMenuOpen(!menuOpen);
        setNavbarActive(!isNavbarActive)
      }
    
    
  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <a href="#" className='logo text-main-color mr-auto font-semibold'>Portfolio.</a>

        <nav className={`navbar ${isNavbarActive ? 'active' : ''}`}>
          <ScrollLink to="home" href='#home' smooth={true} duration={200} onClick={()=>setIsActive('home')} className={isActive==='home' ? 'active' : ''}  >Home</ScrollLink>
          <ScrollLink to="about" href='#about' smooth={true} duration={200} onClick={()=>setIsActive('about')} className={isActive==='about' ? 'active' : ''} >About</ScrollLink>
          <ScrollLink to="skills" href='#skills' smooth={true} duration={200} onClick={()=>setIsActive('skills')} className={isActive==='skills' ? 'active' : ''} >Skills</ScrollLink>
          <ScrollLink to="project" href='#project' smooth={true} duration={200} onClick={()=>setIsActive('project')} className={isActive==='project' ? 'active' : ''}>Projects</ScrollLink>
          <ScrollLink to="contact" href='#contact' smooth={true} duration={200}onClick={()=>setIsActive('contact')} className={isActive==='contact' ? 'active' : ''} >Contact</ScrollLink>
        </nav>
        
        {
            isDark ? 
            <div className='dark-mode' onClick={()=>setIsDark(false)}>
                <box-icon name='sun' animation='tada' color={isSticky ? 'var(--text-color)' :'var(--white-color)'} style={{ cursor: 'pointer' }} ></box-icon>
            </div> 
            : 
            <div className='darkMode-icon' onClick={()=>setIsDark(true)}>
                <box-icon name='moon' animation='tada' color={isSticky || window.innerWidth < 768 ? 'var(--text-color)' :'var(--white-color)'} style={{ cursor: 'pointer' }} ></box-icon>
            </div>
        }


            <div className='menu-icon' onClick={handleMenuIconClick}>
                <box-icon name='menu' color='var(--text-color)' style={{ cursor: 'pointer' }} ></box-icon>
            </div> 
       
        
    </header>
  )
}

export default Header