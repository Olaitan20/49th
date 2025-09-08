import Image from "next/image";

const articles = [
  {
    id: 1,
    image: "/images/rema.png",
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
    image: "/images/rema.png",
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

export default function Music() {
  return (
    <section className="mx-[110px]">
      {/* Section Header */}
      <div className="py-[32px]">
        <p className="text-[14px] uppercase mb-[8px] tracking-widest text-[#FFFFFF80]">
          /// Music
        </p>
        <p className="text-[16px] uppercase font-[800]">
          LATEST IN THE WORLD OF MUSIC
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-3 ">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-[#fff]  overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* Image Wrapper */}
            <div className="relative w-full h-[200px]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Text */}
            <div className="p-[16px]">
              <p className="text-[14px] text-[#000] mb-[8px] line-clamp-2 font-[700] hover:underline cursor-pointer leading-snug">
                {article.title}
              </p>
              <p className="text-[12px] text-[#00000080]">
                {article.author} • {article.category} • {article.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="text-center capitalize text-[14px] my-[20px] font-[500]">
        <p className="cursor-pointer hover:underline">view more</p>
      </div>
    </section>
  );
}
