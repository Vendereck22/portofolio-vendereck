// ... fais de même pour les autres

import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Introduction from "./components/Introduction/Introduction";
import Portfolio from "./components/Portfolio/Portfolio";
import Profession from "./components/Profession/Profession";
import Profile from "./components/Profile/Profile";
import WorkProcess from "./components/WorkProcess/WorkProcess";
import WorkTogether from "./components/WorkTogether/WorkTogether";

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
