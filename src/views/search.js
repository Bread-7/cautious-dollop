import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Speaker from '../components/speaker'
import './search.css'

const Search = (props) => {
  return (
    <div className="search-container">
      <Helmet>
        <title>Search</title>
        <meta property="og:title" content="Search" />
      </Helmet>
      <section className="search-speakers">
        <header data-thq="thq-navbar" className="search-navbar">
          <h2 id="search_heading" className="search-text">
            Search
          </h2>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="search-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="search-nav"
            >
              <Link to="/" className="search-link navLink">
                Home
              </Link>
              <Link to="/search" className="search-link1 navLink">
                Search
              </Link>
              <Link to="/profile" className="search-link2 navLink">
                Profile
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="search-burger-menu">
            <svg viewBox="0 0 1024 1024" className="search-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="search-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="search-nav1"
            >
              <div className="search-container1">
                <h2 className="search-text1">
                  <span className="search-text2">Who Likes You?</span>
                  <br></br>
                </h2>
                <div data-thq="thq-close-menu" className="search-menu-close">
                  <svg viewBox="0 0 1024 1024" className="search-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="search-nav2"
              >
                <Link to="/" className="search-navlink navLink">
                  Home
                </Link>
                <Link to="/search" className="search-navlink1 navLink">
                  Search
                </Link>
                <Link to="/profile" className="search-navlink2 navLink">
                  Profile
                </Link>
              </nav>
              <div className="search-button-container">
                <Link to="/register" className="search-register button">
                  Register
                </Link>
              </div>
              <div className="search-icon-group">
                <div className="search-icons">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="search-icon4"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/quote-background.svg"
              className="search-background"
            />
          </div>
        </header>
        <select id="search_hair_drop" className="search-select">
          <option id="hair_default_option" value="Hair Color">
            Hair Color
          </option>
          <option id="black_hair_option" value="Black">
            Black
          </option>
          <option id="brown_hair_option" value="Brown">
            Brown
          </option>
          <option id="blonde_hair_option" value="Blonde">
            Blonde
          </option>
          <option id="red_hair_option" value="Red">
            Red
          </option>
          <option id="green_hair_option" value="Green">
            Green
          </option>
          <option id="blue_hair_option" value="Blue">
            Blue
          </option>
          <option id="purple_hair_option" value="Option 2">
            Option 2
          </option>
        </select>
        <select id="search_clubs_teams_drop" className="search-select1">
          <option id="club_default_option" value="Club/Team">
            Club/Team
          </option>
        </select>
        <select id="search_school_drop" className="search-select2">
          <option id="school_default_option" value="School">
            School
          </option>
          <option id="ghc_option" value="Granada Hills HS">
            Granada Hills HS
          </option>
        </select>
        <select id="search_race_drop" className="search-select3">
          <option id="race_default_option" value="Race">
            Race
          </option>
          <option id="black_option" value="Black">
            Black
          </option>
          <option id="white_option" value="White">
            White
          </option>
          <option id="hispanic_option" value="Hispanic">
            Hispanic
          </option>
          <option id="indian_option" value="Indian">
            Indian
          </option>
          <option id="asian_option" value="Asian">
            Asian
          </option>
          <option id="middle_eastern_option" value="Middle Eastern">
            Middle Eastern
          </option>
        </select>
        <select id="search_color_drop" className="search-select4">
          <option id="color_default_option" value="Favorite Color">
            Favorite Color
          </option>
          <option id="red_color_option" value="Red">
            Red
          </option>
          <option id="green_color_option" value="Green">
            Green
          </option>
          <option id="blue_color_option" value="Blue">
            Blue
          </option>
          <option id="yellow_color_option" value="Yellow">
            Yellow
          </option>
          <option id="orange_color_option" value="Orange">
            Orange
          </option>
          <option id="purple_color_option" value="Purple">
            Purple
          </option>
          <option id="pink_color_option" value="Pink">
            Pink
          </option>
          <option id="white_color_option" value="White">
            White
          </option>
          <option id="black_color_option" value="Black">
            Black
          </option>
        </select>
        <select id="search_subject_drop" className="search-select5">
          <option id="subject_default_option" value="Favorite Subject">
            Favorite Subject
          </option>
          <option id="english_subject_option" value="English">
            Englilsh
          </option>
          <option id="history_subject_option" value="History">
            History
          </option>
          <option id="politics_subject_option" value="Politics">
            Politics
          </option>
          <option id="math_subject_option" value="Math">
            Math
          </option>
          <option id="biology_subject_option" value="Biology">
            Biology
          </option>
          <option id="chemistry_subject_option" value="Chemistry">
            Chemistry
          </option>
          <option id="physics_subject_option" value="Physics">
            Physics
          </option>
          <option id="comp_sci_subject_option" value="Computer Science">
            Computer Science
          </option>
          <option id="music_subject_option" value="Music">
            Music
          </option>
          <option id="intl_language_subject_option" value="Foreign Language">
            Foreign Language
          </option>
        </select>
        <button
          id="search_search_button"
          type="button"
          className="search-button button"
        >
          <span>
            <span>Search</span>
            <br></br>
          </span>
        </button>
        <div className="search-list">
          <div className="search-row">
            <div className="speaker">
              <Speaker rootClassName="speaker-root-class-name56"></Speaker>
              <Speaker
                image="/speakers-2-1500w.png"
                rootClassName="speaker-root-class-name57"
              ></Speaker>
            </div>
            <div className="search-row2 speaker">
              <Speaker
                image="/speakers-3-1500w.png"
                rootClassName="speaker-root-class-name58"
              ></Speaker>
              <Speaker
                image="/speakers-4-1500w.png"
                rootClassName="speaker-root-class-name59"
              ></Speaker>
            </div>
          </div>
          <div className="search-row3">
            <div className="search-row4 speaker">
              <Speaker
                image="/speakers-4-1500w.png"
                rootClassName="speaker-root-class-name60"
              ></Speaker>
              <Speaker
                image="/speakers-3-1500w.png"
                rootClassName="speaker-root-class-name61"
              ></Speaker>
            </div>
            <div className="search-row5 speaker">
              <Speaker rootClassName="speaker-root-class-name62"></Speaker>
              <Speaker
                image="/speakers-2-1500w.png"
                rootClassName="speaker-root-class-name63"
              ></Speaker>
            </div>
          </div>
        </div>
        <button
          id="search_next_button"
          type="button"
          className="search-button1 button"
        >
          <span>Next</span>
        </button>
        <button
          id="search_prev_button"
          type="button"
          className="search-button2 button"
        >
          <span>Prev</span>
        </button>
      </section>
      <div>
        <div className="search-container3">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="search-container5">
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

export default Search
