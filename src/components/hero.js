import React from "react"

export default class HeroComponent extends React.Component {
  render() {
    return (
      <>
        <div id="header-wrapper">
          <div id="header" className="container">
            {/* Logo */}
            <h1 id="logo"><a>Covid19 India</a></h1>
            {/* Nav */}
            <nav id="nav">
              <ul>
                <li>
                  <a href="#">Dropdown</a>
                  <ul>
                    <li><a href="#">Lorem ipsum dolor</a></li>
                    <li><a href="#">Magna phasellus</a></li>
                    <li><a href="#">Etiam dolore nisl</a></li>
                    <li>
                      <a href="#">Phasellus consequat</a>
                      <ul>
                        <li><a href="#">Lorem ipsum dolor</a></li>
                        <li><a href="#">Phasellus consequat</a></li>
                        <li><a href="#">Magna phasellus</a></li>
                        <li><a href="#">Etiam dolore nisl</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Veroeros feugiat</a></li>
                  </ul>
                </li>
                <li><a href="left-sidebar.html">Left Sidebar</a></li>
                <li className="break"><a href="right-sidebar.html">Right Sidebar</a></li>
                <li><a href="no-sidebar.html">No Sidebar</a></li>
              </ul>
            </nav>
          </div>
          {/* Hero */}
          <section id="hero" className="container">
            <header>
              <h2>
                {/*Telephasic is a responsive*/}
                <br />
                {/*site template by <a href="http://html5up.net">HTML5 UP</a>*/}
              </h2>
            </header>
            <button id = "button1">Locate Nearest Hospital</button>
            <br />
            <p></p>
            <button id="button2" >Call National Helpline </button>
            <p></p>
            <p>
              Designed and built by <a href="http://twitter.com/ajlkn">AJ</a> and released for free under
              <br />
              the <a href="http://html5up.net/license">Creative Commons Attribution 3.0 license</a>.
            </p>
            <ul className="actions">
              <li><a href="#" className="button">Get this party started</a></li>
            </ul>
          </section>
        </div>

      </>
    )
  }
}
