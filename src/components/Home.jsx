import profile_img from "../assets/profile_img.svg";
import slack from "../assets/slack.svg";
import github from "../assets/github.svg";

const Home = () => {
  return (
    <>
      <div className="home">
        <img className="profile_img" src={profile_img} alt="profile_img" />
        <div className="name">Jerahmeel Princewill</div>
        <div className="links-section">
          <div className="link-background">
            <a
              href="https://twitter.com/JerahmeelJamico"
              className="links"
              id="twitter"
            >
              Twitter Link
            </a>
          </div>
          <button className="link-background">
            <a
              href="https://training.zuri.team/"
              className="links"
              id="btn__zuri"
            >
              Zuri Team
            </a>
          </button>
          <button className="link-background">
            <a href=" http://books.zuri.team" className="links" id="books">
              Zuri Books
            </a>
          </button>
          <button className="link-background">
            <a
              href=" https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
              className="links"
              id="book__python"
            >
              Python Books
            </a>
          </button>
          <button className="link-background">
            <a href="https://background.zuri.team" className="links" id="books">
              Background Check for Coders
            </a>
          </button>
          <button className="link-background">
            <a
              href="https://books.zuri.team/design-rules"
              className="links"
              id="book__design"
            >
              Design Books
            </a>
          </button>
          <div className="logo-section">
            <img src={slack} alt="slack_img" className="slack" />
            <img src={github} alt="github_img" className="github" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
