// ... fais de même pour les autres

import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Introduction from "./components/introduction/Introduction";
import Portfolio from "./components/portfolio/Portfolio";
import Profession from "./components/profession/Profession";
import Profile from "./components/profile/Profile";
import WorkProcess from "./components/workprocess/WorkProcess";
import WorkTogether from "./components/worktogether/WorkTogether";

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
