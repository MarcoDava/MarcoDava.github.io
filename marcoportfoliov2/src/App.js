
import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import ProjectList from './Components/ProjectList';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
// import { BubbleBackground } from '@/components/ui/shadcn-io/bubble-background';

function App() {
  return (
    <div className="portfolio-container">
      {/* <BubbleBackground interactive className="absolute inset-0 flex items-center justify-center rounded-xl"> */}
      <div className="formatting-div">
      <Header/>
      <Profile/>
      <ProjectList/>
      <Skills/>
      <Footer/>
      </div>
      {/* </BubbleBackground> */}
    </div>
  );
}

export default App;
