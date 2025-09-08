// components/NewsGrid.js
import Image from "next/image";

const articles = [
  {
    id: 1,
    image: "/images/rema.png", // put this inside public/images
    title: "Rema Scores New Certification With Efforts On Victony’s ‘Stubborn’",
    author: "IAM NOONE",
    category: "MUSIC",
    time: "5 MINS AGO",
  },
  {
    id: 2,
    image: "/images/wizkid.png",
    title: "Wizkid Makes Surprise Nativeland Appearance",
    author: "49TH STREET",
    category: "MUSIC",
    time: "20 MINS AGO",
  },
  {
    id: 3,
    image: "/images/minz.png",
    title: "Minz Stuns For Orange",
    author: "TEMPLE EGEMESI",
    category: "FASHION",
    time: "23 MINS AGO",
  },
  {
    id: 4,
    image: "/images/rema.png", // put this inside public/images
    title: "Rema Scores New Certification With Efforts On Victony’s ‘Stubborn’",
    author: "IAM NOONE",
    category: "MUSIC",
    time: "5 MINS AGO",
  },
  {
    id: 5,
    image: "/images/wizkid.png",
    title: "Wizkid Makes Surprise Nativeland Appearance",
    author: "49TH STREET",
    category: "MUSIC",
    time: "20 MINS AGO",
  },
  {
    id: 6,
    image: "/images/minz.png",
    title: "Minz Stuns For Orange",
    author: "TEMPLE EGEMESI",
    category: "FASHION",
    time: "23 MINS AGO",
  },
];

export default function NewsGrid() {
  return (
    <section className="mx-[110px] ">
        <div className="py-[32px]">
            <p className="text-[14px] uppercase mb-[8px] tracking-widest text-[#FFFFFF80]">/// LATEST</p>
            <p className="text-[16px] uppercase font-[800]">fresh of the press</p>
        </div>
        <div className=" grid grid-cols-3 ">
        
      {articles.map((article) => (
        <div key={article.id} className="flex flex-col w-[414px] h-[302px] overflow-hidden">
          {/* Image */}
          <div className="relative w-[414px] h-[200px]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Text */}
          <div className="bg-[#fff] p-[16px] w-[414px] h-[102px]">
            <p className="text-[14px] line-clamp-1 mb-[15px] text-[#000] font-[700] hover:underline cursor-pointer leading-snug">
              {article.title}
            </p>
            <p className="text-[12px] text-[#00000080] mt-[4px]">
              {article.author} • {article.category} • {article.time}
            </p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}


