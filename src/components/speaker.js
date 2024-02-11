import React from 'react'

import PropTypes from 'prop-types'

import './speaker.css'

const Speaker = (props) => {
  return (
    <div className={`speaker-speaker ${props.rootClassName} `}>
      <img
        id="speaker_profile_pic"
        alt="image"
        src={props.image}
        className="speaker-image"
      />
      <div className="speaker-container">
        <div className="speaker-container1">
          <div className="speaker-container2">
            <div className="speaker-deails">
              <h3 id="speaker_name" className="speaker-name">
                {props.name}
              </h3>
              <h3 id="speaker question" className="speaker-name1">
                {props.name1}
              </h3>
            </div>
          </div>
        </div>
        <input
          type="checkbox"
          id="speaker_is_liked"
          className="speaker-checkbox"
        />
      </div>
    </div>
  )
}

Speaker.defaultProps = {
  image: '/speakers-1-1500w.png',
  name: 'Samantha Johnson',
  detail: 'CEO, Opary',
  rootClassName: '',
  name1: 'Do you like me?',
}

Speaker.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  detail: PropTypes.string,
  rootClassName: PropTypes.string,
  name1: PropTypes.string,
}

export default Speaker
