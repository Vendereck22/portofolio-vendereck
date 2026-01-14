// ... fais de même pour les autres

import Contact from "./components/a/Contact";
import Blog from "./components/blog/Blog";
import Introduction from "./components/c/Introduction";
import Portfolio from "./components/d/Portfolio";
import Profession from "./components/e/Profession";
import Profile from "./components/f/Profile";
import WorkProcess from "./components/i/WorkProcess";
import WorkTogether from "./components/j/WorkTogether";

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
