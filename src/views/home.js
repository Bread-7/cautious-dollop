import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home</title>
        <meta property="og:title" content="Home" />
      </Helmet>
      <section className="home-hero">
        <div className="home-background">
          <img
            alt="image"
            src="/circle-background.svg"
            className="home-image"
          />
          <img alt="image" src="/line-background.svg" className="home-image1" />
        </div>
        <header data-thq="thq-navbar" className="home-navbar">
          <h2 id="home_title" className="home-text">
            Who Likes You?
          </h2>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <Link to="/" className="home-link navLink">
                Home
              </Link>
              <Link to="/search" className="home-link1 navLink">
                <span>Search</span>
                <br></br>
              </Link>
              <Link to="/profile" className="home-link2 navLink">
                Profile
              </Link>
            </nav>
            <Link to="/register" className="home-register button">
              <span>Register now</span>
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg
              id="home_menu_icon"
              viewBox="0 0 1024 1024"
              className="home-icon2"
            >
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container1">
                <h2 className="home-text04">
                  <span className="home-text05">Who Likes You?</span>
                  <br></br>
                </h2>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon4">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <Link to="/" className="home-navlink navLink">
                  Home
                </Link>
                <Link to="/search" className="home-navlink1 navLink">
                  Search
                </Link>
                <Link to="/profile" className="home-navlink2 navLink">
                  Profile
                </Link>
              </nav>
              <div className="home-button-container">
                <Link to="/register" className="home-register1 button">
                  Register
                </Link>
              </div>
              <div className="home-icon-group">
                <div className="home-icons">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon6"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/quote-background.svg"
              className="home-background1"
            />
          </div>
        </header>
        <div className="home-hero-content">
          <h1 id="home_site_title" className="home-text07">
            Would you like to know if someone has a crush on you?
          </h1>
          <div className="home-container2">
            <Link
              to="/register"
              id="home_signup_button"
              className="home-register2 button-style-1 button"
            >
              <span id="home_signup_button_text" className="home-text08">
                <span>
                  Sign Up
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>Here</span>
              </span>
            </Link>
          </div>
          <span id="home_cookie_notice" className="home-text13">
            <span className="home-text14">
              NOTE: Cookies are required to access this site. The only cookie
              collected is your email, which is used for auto-login on this
              device
            </span>
            <br className="home-text15"></br>
          </span>
        </div>
      </section>
      <div>
        <div className="home-container4">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container6">
          <Script
            html={`<style>
#scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar
{
	height: 12px;
	background-color: #F5F5F5;
	border-radius: 10px;
}

#scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
