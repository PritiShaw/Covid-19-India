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
            <ul className="actions">
              <li><a href="#" className="button button1  ">Locate Nearest Hospital</a></li>
              <li><a href="#" className="button button2  ">Call National Helpline</a></li>
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
