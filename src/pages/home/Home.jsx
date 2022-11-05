import React from "react";
import logo from "../../assets/profile.png";
import github from "../../assets/Icon.png";
import slack from "../../assets/Slack_icon.png";
import share from "../../assets/Icon-share.png";
import dot from "../../assets/Icon-dot.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="linktree">
        {/* Share Button Start */}
        <div className="share-button">
          <img src={share} alt="" className="share" />
          <img src={dot} alt="" className="dot" />
        </div>
        {/* Share Button end */}

        {/* Profile Section start */}
        <div className="profile-section">
          <img src={logo} alt="" id="profile__img" />
          <h2 id="twitter">JerahmeelJamico</h2>
          <h2 id="slack" hidden>
            jamico
          </h2>
        </div>
        {/* Profile Section */}

        {/* Link section Start */}
        <div className="link-section">
          <button>
            <a href="https://twitter.com/JerahmeelJamico" rel="Twitter link">
              Twitter Link
            </a>
          </button>
          <button>
            <a href="https://training.zuri.team/" id="btn__zuri">
              Zuri Team
            </a>
          </button>
          <button>
            <a href="http://books.zuri.team" id="books">
              Zuri Books
            </a>
          </button>
          <button>
            <a
              href="https://books.zuri.team/python-for-beginners?ref_id=jamico"
              id="book__python"
            >
              Python Books
            </a>
          </button>
          <button>
            <a href="https://background.zuri.team" id="pitch">
              Background Check for Code
            </a>
          </button>
          <button>
            <a href="https://books.zuri.team/design-rules" id="book__design">
              Design Books
            </a>
          </button>
          <button>
            <a href="/contact" id="contact">
              Contact Me
            </a>
          </button>
        </div>

        <div className="social-section">
          <img src={slack} alt="" height="30" />
          <img src={github} alt="" height="30" />
        </div>
      </div>
    </>
  );
}

export default Home;
