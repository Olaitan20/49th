import TopBar from '@/components/TopBar';
import './globals.css';
import Navbar from '@/components/NavBar';
import HeadlineTicker from '@/components/Headline';
import Slideshow from '@/components/SlideShow';
import NewsGrid from '@/components/NewsGrid';
import Stores from '@/app/Stores/page';
import Music from '@/components/Music';
import Magazine from '@/components/Magazine';
export default function Home() {
  return (
    <>
     <TopBar />
     <Navbar />
     <HeadlineTicker />
     <Slideshow />
     <NewsGrid />
     <Stores />
     <Music />
     <Magazine />
    </>
  );
}
