
import './Nav.css'
import  { useState, useEffect ,useRef } from 'react';



function Navbar() {
  // -----------scroll---------------
  const NAVrRef = useRef()
    useEffect(()=>{
        window.addEventListener("scroll" ,()=>{
            if (window.scrollY >100) {
              NAVrRef.current.style.background = "#0c1524b6 "
            }else{
              NAVrRef.current.style.background = "#0c1524"
            }
        })
    })
  // ---------------dark mood------------
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, []);
    
      const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', newTheme);
      };

return(
  
    <nav ref={NAVrRef} className="bg-[#0c1524]  fixed  w-full  transition-all duration-200">
        <div className='container  '>
            
        <ul className='   justify-between p-[10px] items-center grid grid-cols-3 md:grid-cols-7  '  dir='rtl' >
            
            <h1 className='text-[20px]'>AS-News</h1>
            <li><a href="/">ألاخبار</a></li>
            <li><a href="/art">الفن</a></li>
            <li><a href="/Sport">رياضه</a></li>
            {/* <li><a href="/Contact">سعر الدولار</a></li> */}
            <button  onClick={toggleTheme}
          className="px-4 py-2 text-sm font-medium bg-white rounded dark:bg-yellow-500 mr-4">  {theme === 'light' ? ' Dark Mode' : ' Light Mode'}</button>
        </ul>
        </div>

    </nav>
    
)

}

export default Navbar;
