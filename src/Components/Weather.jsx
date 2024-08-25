
import  { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=e3bc03b99af79ccddfbdca6d9e80fd38&units=metric&lang=ar');
        setWeatherData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>جاري تحميل البيانات...</p>;
  if (error) return <p>حدث خطأ: {error.message}</p>;

  return (
    <div className="weather-card p-4 rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-semibold mb-2">حالة الطقس في القاهرة</h2>
      <p>الوصف: {weatherData.weather[0].description}</p>
      <p>درجة الحرارة: {weatherData.main.temp}°C</p>
      <p>الرطوبة: {weatherData.main.humidity}%</p>
      <p>الرياح: {weatherData.wind.speed} م/ث</p>
    </div>
  );
};

export default Weather;
