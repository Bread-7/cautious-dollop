import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile</title>
        <meta property="og:title" content="Profile" />
      </Helmet>
      <section className="profile-schedule">
        <header data-thq="thq-navbar" className="profile-navbar">
          <h2 id="profile_heading" className="profile-text">
            Profile
          </h2>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="profile-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="profile-nav"
            >
              <Link to="/" className="profile-link navLink">
                Home
              </Link>
              <Link to="/search" className="profile-link1 navLink">
                Search
              </Link>
              <Link to="/profile" className="profile-link2 navLink">
                Profile
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="profile-burger-menu">
            <svg
              id="profile_menu_icon"
              viewBox="0 0 1024 1024"
              className="profile-icon"
            >
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="profile-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="profile-nav1"
            >
              <div className="profile-container1">
                <h2 id="profile_nav_site_title" className="profile-text1">
                  <span className="profile-text2">Who Likes You?</span>
                  <br></br>
                </h2>
                <div data-thq="thq-close-menu" className="profile-menu-close">
                  <svg
                    id="profile_nav_close_icon"
                    viewBox="0 0 1024 1024"
                    className="profile-icon2"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="profile-nav2"
              >
                <Link
                  to="/"
                  id="profile_nav_home"
                  className="profile-navlink navLink"
                >
                  Home
                </Link>
                <Link
                  to="/search"
                  id="profile_nav_search"
                  className="profile-navlink1 navLink"
                >
                  Search
                </Link>
                <Link
                  to="/profile"
                  id="profile_nav_profile"
                  className="profile-navlink2 navLink"
                >
                  Profile
                </Link>
              </nav>
              <div className="profile-button-container">
                <button
                  id="profile_nav_register_button"
                  type="button"
                  className="button profile-register"
                >
                  Register
                </button>
              </div>
              <div className="profile-icon-group">
                <div className="profile-icons">
                  <svg
                    id="profile_nav_insta_icon"
                    viewBox="0 0 877.7142857142857 1024"
                    className="profile-icon4"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/quote-background.svg"
              className="profile-background"
            />
          </div>
        </header>
        <div className="profile-container2">
          <div className="profile-container3">
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
Update Photo (Current Profile Pic Shown):
<input type="file" multiple="false" accept="image/*" id=finput onchange="upload()">
</p>
<style>
    p {
        color: white;
    }
</style>
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
        <span id="profile_current_subjects" className="profile-text4">
          Current Favorite Subjects:
        </span>
        <span id="profile_current_subjects" className="profile-text5">
          Current Clubs/Teams:
        </span>
        <span id="profile_current_colors" className="profile-text6">
          Current Favorite Colors:
        </span>
        <span id="profile_person_liked_count" className="profile-text7">
          00 people like you
        </span>
        <a
          href="https://checkout.stripe.com/c/pay/cs_test_a1bEgZyY3mkKCawcB5oFr7qr2arr1RxnxkPtYMZ8vRvB3SeynnO8QPCjqA#fidkdWxOYHwnPyd1blpxYHZxWjA0SmFsQ31BNXVxfGBHN0ZDTEtOfGZDVlB3QG5yR3NXPXZJQE1LTEZRMjFBTzUxS0Nfdlc9dTddUGFuTkJja1N1UG9KT0tUZjZRX1NAQzMzaE1maTI8MFVgNTV%2FM2dtPE5qYicpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVowbkQ3Z3c3YjJmZ1IwZm48REQneCUl"
          id="profile_see_who_button"
          target="_blank"
          rel="noreferrer noopener"
          className="profile-link3 button"
        >
          See Who ($2)
        </a>
        <input
          type="text"
          id="profile_info_update_input"
          placeholder="New Info"
          className="profile-textinput input"
        />
        <button
          id="profile_info_update_button"
          type="button"
          className="profile-button button"
        >
          Update
        </button>
        <select id="profile_info_update_drop" className="profile-select">
          <option id="default_option" value="Update Info">
            Update Info
          </option>
          <option id="name_option" value="Name">
            Name
          </option>
          <option id="email_option" value="Email">
            Email
          </option>
          <option id="sexuality_option" value="Sexuality (Type 'S' or 'NS')">
            Sexuality (Type &apos;S&apos; or &apos;NS&apos;)
          </option>
          <option id="clubs_teams_option" value="Clubs/Teams">
            Clubs/Teams
          </option>
          <option id="subjects_option" value="Favorite Subjects">
            Favorite Subjects
          </option>
          <option id="colors_option" value="Favorite Colors">
            Favorite Colors
          </option>
        </select>
      </section>
      <div>
        <div className="profile-container5">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="profile-container7">
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

export default Profile
