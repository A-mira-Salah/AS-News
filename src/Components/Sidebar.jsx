
import { useEffect, useState } from 'react'
import Weather from '../Components/Weather';

function Sidebar() {

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
    <div className="w-64 h-full   bg-[#0c1524] dark:bg-gray-800 p-4 text-black dark:text-white " >
      <div className="mx-auto" dir="rtl">
      
        <ul>
          <img src="/src/assets/images/" alt="" />
    
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
  );
}

export default Sidebar;
