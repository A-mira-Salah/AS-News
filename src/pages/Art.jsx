// import { ImHackernews } from "react-icons/im";
import { Link } from "react-router-dom";

function Art() {
  const artNews = [
    {
      id: 15,
      headline: "افتتاح معرض جديد للفن الحديث في القاهرة",
      // summary: "تم افتتاح معرض جديد للفن الحديث في القاهرة يضم أعمالًا لفنانين مصريين ودوليين. يشمل المعرض لوحات ومنحوتات وأعمال تركيبية تجسد تجارب فنية معاصرة. يُعد هذا المعرض فرصة للجمهور لاكتشاف الفنون الحديثة والتفاعل مع الفنانين المشاركين.",
      date: "2024-08-25",
      Journalist: "كتبه الصحفي أحمد عبد الله",
      imageUrl: "3-1.jpg",
      articleUrl:
        "https://www.artnews.com/article/2024/08/25/art-exhibition-cairo",
    },
    {
      id: 16,
      headline: "مهرجان الجونة السينمائي يكرم الفنانين الشباب",
      // summary: "شهد مهرجان الجونة السينمائي هذا العام تكريم مجموعة من الفنانين الشباب الذين أبدعوا في مختلف المجالات السينمائية. شمل التكريم أعمالهم الإخراجية والتمثيلية التي لاقت إشادة من النقاد والجمهور. يعتبر هذا المهرجان منصة هامة لعرض المواهب الشابة وتسليط الضوء على تجاربهم الفنية.",
      date: "2024-08-24",
      Journalist: "كتبه الصحفي يوسف مراد",
      imageUrl: "gona.jpg",
      articleUrl:
        "https://www.filmnews.com/article/2024/08/24/gouna-festival-honors-young-artists",
    },
    {
      id: 17,
      headline: "إطلاق فيلم جديد يستكشف تاريخ الفنون التشكيلية في مصر",
      // summary: "أُطلق فيلم جديد في دور السينما المصرية يستعرض تاريخ الفنون التشكيلية في مصر منذ العصور القديمة حتى اليوم. يقدم الفيلم تحليلًا عميقًا للأعمال الفنية والمعارض التي شكلت المشهد الفني المصري، ويشمل مقابلات مع فنانين ونقاد بارزين.",
      date: "2024-08-23",
      Journalist: "كتبه الصحفي علي حسن",
      imageUrl: "art-ta4kili.jpg",
      articleUrl:
        "https://www.cinemaegypt.com/article/2024/08/23/art-history-film",
    },
    {
      id: 18,
      headline: "الموسيقى التقليدية المصرية تحيي مهرجان عالمي",
      // summary: "شاركت فرق موسيقية مصرية في مهرجان عالمي للموسيقى التقليدية، حيث قدموا عروضًا موسيقية تعكس التراث المصري العريق. لاقت العروض إعجابًا كبيرًا من الحضور، وتمثل مشاركة مصر في هذا المهرجان تعزيزًا للتبادل الثقافي والفني بين الدول.",
      date: "2024-08-22",
      Journalist: "كتبه الصحفي سامي رشاد",
      imageUrl: "angham.jpg",
      articleUrl:
        "https://www.musicworld.com/article/2024/08/22/egyptian-traditional-music-festival",
    },
  ];
  return (
    <div className="container mx-auto p-4">
      <div className="content grid grid-cols-1 md:grid-cols-2 gap-4" dir="rtl">
        {artNews.map((item) => (
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

export default Art;
