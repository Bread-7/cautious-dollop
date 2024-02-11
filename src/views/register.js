import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Register</title>
        <meta property="og:title" content="Register" />
      </Helmet>
      <section className="register-notes">
        <div className="register-first">
          <div data-aos="fade-up-right" className="register-content">
            <header data-thq="thq-navbar" className="register-navbar">
              <h2 id="register_heading" className="register-text">
                Register
              </h2>
              <div
                data-thq="thq-navbar-nav"
                data-role="Nav"
                className="register-desktop-menu"
              >
                <nav
                  data-thq="thq-navbar-nav-links"
                  data-role="Nav"
                  className="register-nav"
                >
                  <Link to="/" className="register-link navLink">
                    Home
                  </Link>
                  <Link to="/register" className="register-link1 navLink">
                    Register
                  </Link>
                </nav>
              </div>
              <div data-thq="thq-burger-menu" className="register-burger-menu">
                <svg
                  id="register_menu_icon"
                  viewBox="0 0 1024 1024"
                  className="register-icon"
                >
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="register-mobile-menu">
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="register-nav1"
                >
                  <div className="register-container1">
                    <h2 id="register_nav_site_title" className="register-text1">
                      <span className="register-text2">Who Likes You?</span>
                      <br></br>
                    </h2>
                    <div
                      data-thq="thq-close-menu"
                      className="register-menu-close"
                    >
                      <svg viewBox="0 0 1024 1024" className="register-icon2">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="register-nav2"
                  >
                    <Link
                      to="/"
                      id="register_nav_home"
                      className="register-navlink navLink"
                    >
                      Home
                    </Link>
                    <Link
                      to="/register"
                      id="register_nav_register"
                      className="register-navlink1 navLink"
                    >
                      Register
                    </Link>
                  </nav>
                  <div className="register-button-container">
                    <Link
                      to="/register"
                      id="register_nav_register_button"
                      className="register-register button"
                    >
                      Register
                    </Link>
                  </div>
                  <div className="register-icon-group">
                    <div className="register-icons">
                      <svg
                        id="register_nav_insta_icon"
                        viewBox="0 0 877.7142857142857 1024"
                        className="register-icon4"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/quote-background.svg"
                  className="register-background"
                />
              </div>
            </header>
            <input
              type="text"
              id="register_name_input"
              placeholder="Name"
              className="input register-textinput"
            />
            <input
              type="text"
              id="register_email_input"
              placeholder="Email"
              className="input register-textinput1"
            />
            <select id="register_sexuality_dop" className="register-select">
              <option id="sexuality_default_option" value="Select Sexuality">
                Select Sexuality
              </option>
              <option id="gay_sexuality_option" value="Not Straight">
                Not Straight
              </option>
              <option id="straight_sexuality_option" value="Straight">
                Straight
              </option>
            </select>
            <select id="register_school_drop" className="register-select1">
              <option value="Option 1">Select School</option>
              <option value="Option 1">Select School</option>
              <option value="Option 1">Select School</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <span id="register_face_upload_label" className="register-text4">
              Upload a picture of your face
            </span>
            <div>
              <div className="register-container3">
                <Script
                  html={`<script src="https://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js">
</script>
<canvas id= "canv1" ></canvas>
<style>
    canvas {
        height: 175px;
        border-style: solid;
        border-width: 1px;
        border-color: black;
    }
</style>
<p>
Filename:
<input type="file" multiple="false" accept="image/*" id=finput onchange="upload()">
</p>
<script>
    function upload(){
        var imgcanvas = document.getElementById("canv1");
        var fileinput = document.getElementById("finput");
        var image = new SimpleImage(fileinput);
        image.drawTo(imgcanvas);
    }
</script>`}
                ></Script>
              </div>
            </div>
            <span
              id="register_answer_separate_label"
              className="register-text5"
            >
              Use commas to separate multiple answers. Leave blank if no answer
            </span>
            <input
              type="text"
              id="register_clubs_teams_input"
              placeholder="Club(s)/Team(s) you're in"
              className="input register-textinput2"
            />
            <input
              type="text"
              id="register_subjects_input"
              placeholder="Favorite subject(s)"
              className="input register-textinput3"
            />
            <input
              type="text"
              id="register_colors_input"
              placeholder="Favorite color(s)"
              className="input register-textinput4"
            />
            <button
              id="register_create_acc_button"
              type="button"
              className="register-button button"
            >
              Create Account
            </button>
          </div>
        </div>
      </section>
      <div>
        <div className="register-container5">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="register-container7">
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

export default Register
