import React from "react"

export default class SymptomsComponent extends React.Component {
  render () {
    return (
      <>
        <div className='wrapper'>
          <section className='container'>
            <header className='major'>
              <div className='col-12'>
                <h2>Symptoms</h2>
              </div>
            </header>
            <div className='row warning-tab'>
              <div className='col-1'>
                <i className='fas fa-phone'></i>
              </div>
              <div className='col-10'>
                <b>Call your doctor:</b> If you think you have been exposed to
                COVID-19 and develop a fever and symptoms, such as{" "}
                <b>cough or difficulty breathing</b>, call your healthcare
                provider for medical advice.
              </div>
            </div>
            <div className='row features'>
              <section className='col-12'>
                <br />
                <p>
                  Based on what has been seen previously as the incubation
                  period of MERS-CoV viruses,
                  <strong>
                    the following symptoms may appear 2-14 days after exposure:
                  </strong>
                </p>
              </section>
              <section className='col-4 col-12-narrower feature'>
                <div className='image-wrapper'>
                  <a className='image featured'>
                    <img
                      src='https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-cough.jpg'
                      alt='Cough'
                    />
                  </a>
                </div>
              </section>
              <section className='col-4 col-12-narrower feature'>
                <div className='image-wrapper'>
                  <a className='image featured'>
                    <img
                      src='https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-fever.jpg'
                      alt='Fever'
                    />
                  </a>
                </div>
              </section>
              <section className='col-4 col-12-narrower feature'>
                <div className='image-wrapper'>
                  <a className='image featured'>
                    <img
                      src='https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-shortness-breath.jpg'
                      alt='Shortness of breath'
                    />
                  </a>
                </div>
              </section>
            </div>

            <div className='row danger-tab'>
              <div className='col-12'>
                <h2>
                  <b>Emergency Warnings</b>
                </h2>
              </div>
              <div className='col-1'>
                <i className='fas fa-warn'></i>
              </div>
              <div className='col-10'>
                <p>
                  If you develop <strong>emergency warning signs</strong> for
                  COVID-19 get <strong>medical attention immediately</strong>.
                  Some of Emergency warning signs include*:
                </p>
                <ul>
                  <li>Difficulty breathing or shortness of breath</li>
                  <li>Persistent pain or pressure in the chest</li>
                  <li>New confusion or inability to arouse</li>
                  <li>Bluish lips or face</li>
                </ul>
                <p>
                  Please consult your medical provider for any other symptoms
                  that are severe or concerning.
                </p>
              </div>
            </div>
            {/* <ul className='actions major'>
              <li>
                <a href='#' className='button'>
                  
                </a>
              </li>
            </ul> */}
          </section>
        </div>
      </>
    )
  }
}
