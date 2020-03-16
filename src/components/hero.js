import React from "react"

export default class HeroComponent extends React.Component {
  render () {
    return (
      <>
        <div id='header-wrapper'>
          <div id='header' className='container'>
            {/* Logo */}
            <h1 id='logo'>
              <a>Covid19 India</a>
            </h1>
            {/* Nav */}
            <nav id='nav'>
              <ul>
                <li>
                  <a href='#HelplineNos'>Helpline</a>
                </li>
                <li>
                  <a href='#Symptoms'>Symptoms</a>
                </li>
                <li className='break'>
                  <a href='#Statistics'>Statistics</a>
                </li>
                <li>
                  <a href='#News'>News</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Hero */}
          <section id='hero' className='container' style={{height:"50vh"}}>
            <ul className='actions'>
              <li>
                <a href='https://www.google.com/maps/search/hospitals/' className='button button1  '>
                  Locate Nearest Hospital
                </a>
              </li>
              <li>
                <a href='tel:+91-11-23978046' className='button button2  '>
                  Call National Helpline
                </a>
              </li>
            </ul>
            <p>
              <strong>Let us Fight it together</strong>
            </p>
          </section>
        </div>
      </>
    )
  }
}
