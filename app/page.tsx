import Contact from "./Components/Contact/Contact";
import Profile from "./Components/Profile/Profile";
import WorkProcess from "./Components/WorkProcess/WorkProcess";
import Portfolio from "./Components/Portfolio/Portfolio";
import WorkTogether from "./Components/WorkTogether/WorkTogether";
import Blog from "./Components/Blog/Blog";
import Profession from "./Components/Profession/Profession";
import Introduction from "./Components/Introduction/Introduction";

// ... fais de même pour les autres

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
        </div>
        <div className="profile-section">
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div>
      <Portfolio />
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <div className="blog-background">
        <Blog />
      </div>
      <div className="bg-soft-white">
        <Profession />
      </div>

      <Contact />
    </div>
  );
};

export default Home;
