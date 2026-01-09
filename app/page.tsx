import Contact from "./components/contact/contact";
import Profile from "./components/profile/Profile";
import WorkProcess from "./components/workprocess/WorkProcess";
import Portfolio from "./components/portfolio/Portfolio";
import WorkTogether from "./components/worktogether/WorkTogether";
import Blog from "./components/blog/blog";
import Profession from "./components/profession/Profession";
import Introduction from "./components/Introduction/Introduction";

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
