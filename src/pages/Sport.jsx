import { Link } from "react-router-dom";

function Sport() {
  const sportsNews = [
    {
      id: 9,
      headline: "فوز منتخب مصر في تصفيات كأس العالم",
      summary:
        "حقق منتخب مصر فوزًا هامًا في تصفيات كأس العالم بعد أداء رائع أمام منتخب نيجيريا. المباراة شهدت تألق العديد من اللاعبين المصريين، ومن المتوقع أن يعزز هذا الفوز فرص المنتخب في التأهل إلى البطولة.",
      date: "2024-08-25",
      Journalist: "كتبه الصحفي محمد عبد الله",
      imageUrl: "Sport1.jfif",
    },
    {
      id: 10,
      headline: "الأهلي يفوز بالدوري المصري للمرة الـ 42",
      summary:
        "توج النادي الأهلي بلقب الدوري المصري الممتاز للمرة الـ 42 في تاريخه بعد فوزه على نادي الزمالك في مباراة حاسمة. شهدت المباراة أداءً قوياً من لاعبي الأهلي، واحتفل الفريق باللقب مع جماهيره في استاد القاهرة.",
      date: "2024-08-24",
      Journalist: "كتبه الصحفي أحمد سالم",
      imageUrl: "sport2.jpg",
    },
    {
      id: 11,
      headline: "إطلاق بطولة جديدة لألعاب القوى في مصر",
      summary:
        "أعلنت الاتحاد المصري لألعاب القوى عن إطلاق بطولة جديدة تهدف إلى تعزيز رياضة ألعاب القوى في مصر. ستشمل البطولة مسابقات في الجري، القفز، والرمي، ومن المتوقع أن تشهد مشاركة واسعة من الرياضيين من مختلف أنحاء البلاد.",
      date: "2024-08-23",
      Journalist: "كتبه الصحفي علي رشاد",
      imageUrl: "sport3.jpg",
    },
    {
      id: 12,
      headline: "إبراهيموفيتش يزور القاهرة لدعم تطوير كرة القدم المصرية",
      summary:
        "قام النجم السويدي زلاتان إبراهيموفيتش بزيارة القاهرة للقاء المسؤولين المصريين والمساهمة في تطوير كرة القدم في البلاد. إبراهيموفيتش أعرب عن إعجابه بالبنية التحتية الرياضية في مصر وأكد على أهمية دعم المواهب الشابة.",
      date: "2024-08-22",
      Journalist: "كتبه الصحفي سامي يوسف",
      imageUrl: "sport4.jpg",
    },
    {
      id: 13,
      headline: "الزمالك يتعاقد مع مدرب عالمي جديد",
      summary:
        "أعلن نادي الزمالك عن تعاقده مع المدرب العالمي خورخي جيسوس لقيادة الفريق في الموسم القادم. يعتبر جيسوس من أفضل المدربين في العالم، ومن المتوقع أن يعزز قدومه من فرص الزمالك في المنافسة على البطولات المحلية والقارية.",
      date: "2024-08-21",
      Journalist: "كتبه الصحفي مصطفى خالد",
      imageUrl: "sport5.jpg",
    },
    {
      id: 14,
      headline: "عودة الجماهير للملاعب في مصر بعد غياب طويل",
      summary:
        "أعلنت وزارة الرياضة المصرية عن السماح بعودة الجماهير للملاعب بعد غياب طويل بسبب جائحة كورونا. من المتوقع أن تشهد المباريات حضوراً جماهيرياً كبيراً، مما سيعزز من الأجواء الرياضية في البلاد.",
      date: "2024-08-20",
      Journalist: "كتبه الصحفي خالد محمود",
      imageUrl: "sport6.jpg",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="content grid grid-cols-1 md:grid-cols-2 gap-4" dir="rtl">
        {sportsNews.map((item) => (
          <div key={item.headline} className="p-8 rounded-lg shadow-2xl m-3">
            <h2 className="text-xl font-semibold mb-2">{item.headline}</h2>
            <img
              src={
                item.imageUrl.startsWith("http")
                  ? item.imageUrl
                  : `/src/assets/images/${item.imageUrl}`
              }
              alt={item.headline}
              className="w-full h-[15rem] mb-2"
            />
            <p className="mb-2">{item.summary}</p>
            <p className="text-lg text-green-800 mb-2">{item.date}</p>
            <p className="text-sm text-gray-500 mb-2">{item.Journalist}</p>
            <Link
              to={"/news/" + item.id}
              className="text-blue-500 hover:underline"
            >
              اقرأ المزيد
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sport;
