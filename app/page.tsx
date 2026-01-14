// ... fais de même pour les autres

import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Introduction from "./components/Introduction";
import Portfolio from "./components//Portfolio";
import Profession from "./components//Profession";
import Profile from "./components/Profile";
import WorkProcess from "./components//WorkProcess";
import WorkTogether from "./components/WorkTogether";

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
