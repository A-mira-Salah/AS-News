
import { FaFacebookF, FaTwitter, FaInstagram  } from "react-icons/fa";

import { useEffect, useState } from 'react'
import Weather from '../Components/Weather';


function Footer() {
  const contact = [
    { icon: "icon-phone.svg", text: "+2012121212" },
    { icon: "icon-email.svg", text: "example@fylo.com" },
  ];

  const links = [
    "Contact Us",
    "About Us",
    "Jobs",
    "Terms",
    "Privacy",
    "Blog",
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
  ];

  //--------------------------api ---------------------------------------

  // مواقيت الصلاه
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [rate, setRate] = useState(null);

  useEffect(() => {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=5')
      .then(response => response.json())
      .then(data => setPrayerTimes(data.data.timings));
  }, []);


  // سعر الدولار 

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => setRate(data.rates.EGP));
 }, []);
  







  return (
    <section className="bg-[#0c1524] pt-[100px] md:pt-[100px] pb-[100px] text-white">
      <div className="container">
    
    {/*------------------ el sidebar in mobile api section ----------------------  */}


    <div className=" p-4 text-white  block  md:hidden " >
      <div className="mx-auto" dir="rtl">
      
        <ul>
    
      {/* الطقس */}
       <Weather/>
       
      {/* سعر الدولار */}
         
        <div className='mb-8 mt-8 p-4 rounded-lg shadow-md' >
      <li  className=" font-semibold mb-3 text-2xl ">سعر الدولار مقابل الجنيه المصري</li>
      {rate ? (
        <p className='text-white'>1 دولار أمريكي = {rate} جنيه مصري</p>
      ) : (
        <p className='text-white'>جارٍ تحميل سعر الدولار...</p>
      )}
    </div>


      {/*---------------- مواقيت الصلاة -------------------*/}
     <div className=' p-4 rounded-lg shadow-md'>
      <li className='pb-3 text-2xl font-semibold'>مواقيت الصلاة في القاهرة</li>
      {prayerTimes ? (
        <ul>
          <li>الفجر: {prayerTimes.Fajr}</li>
          <li>الظهر: {prayerTimes.Dhuhr}</li>
          <li>العصر: {prayerTimes.Asr}</li>
          <li>المغرب: {prayerTimes.Maghrib}</li>
          <li>العشاء: {prayerTimes.Isha}</li>
        </ul>
      ) : (
        <p>جارٍ تحميل مواقيت الصلاة...</p>
      )}
    </div>
      </ul>
      
      </div>
    </div>






    {/*------------------nehaet  el sidebar in mobile api section ----------------------  */}

    {/* --------------------start footer--------------------------- */}
        
        <a href="/">
        <h1 className='text-[30px] w-[175px] h-[66px]'>AS-News</h1>

          
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px] ">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src="/src/assets/images/icon-location.svg"
              alt="location"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur assumenda deserunt architecto beatae modi eius
              eligendi!
            </p>
          </div>
          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
              >
                <img
                  src={`/src/assets/images/${item.icon}`}
                  alt={item.icon.replace('.svg', '')}
                  className="w-[18px] h-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-[20px]">
           
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-primary transition-colors duration-200 text-base"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[15px] mt-[20px] w-full justify-center md:w-auto">
            {socialIcons.map((item, index) => (
              <li key={index}>
                <a href={item.href} target="_blank" rel="noopener noreferrer " className="group">
                  <div className="w-[40px] h-[40px] flex justify-center items-center hover:text-primary transition-colors duration-200 border border-white rounded-full" >
                    {item.icon}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
