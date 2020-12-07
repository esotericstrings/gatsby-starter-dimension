import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import acrobatadobe from '../images/acrobatadobe.jpg'
import heartlandshops from '../images/heartlandshops.jpg'
import kavencore from '../images/kavencore.jpg'
import hegenppsu from '../images/hegenppsu.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>I've learned a lot from years of professional work experience in the web field. I'm confident in my ability pick up new languages, tackle new challenges, and serve in a variety of roles as needed to best support my team.</p>
          <p>Here's a highlight of a few of the varied projects I've worked on throughout my career:</p>
          <h3>Kav Encore - Wordpress</h3>
          <span className="image main">
          <a href="https://www.kavencore.com/" target="_blank" rel="noreferrer noopener">
            <img src={kavencore} alt="Kav Encore - Custom Wordpress Site" />
            </a>
          </span>
          <p>
          <strong>ROLE:</strong> Frontend Developer
            <br/>
            <strong>TOOLS:</strong> Bitbucket, Sourcetree, Sublime Text, Wordpress
            <br/>
            <strong>LANGUAGES:</strong> HTML, CSS/SCSS, JS/jQuery, PHP
            <br/>
            Kav Encore is a simple e-catalog site built on Wordpress with product sliders and parallax banners. As the sole developer on the Kav Encore project, I developed the entirety of custom theme for the site.
            <br/>
            <a href="https://www.kavencore.com/" target="_blank" rel="noreferrer noopener">See Custom Wordpress E-Catalog Site</a> 
          </p>
          <h3>Heartland Shops - Magento</h3>
          <span className="image main">
          <a href="https://www.heartlandshops.com/" target="_blank" rel="noreferrer noopener">
            <img src={heartlandshops} alt="Heartland Shops - Custom Magento Site" />
            </a>
          </span>
          <p>
          <strong>ROLE:</strong> Frontend Developer
            <br/>
            <strong>TOOLS:</strong> Bitbucket, Sourcetree, Sublime Text, Google Maps API, Magento 1.9
            <br/>
            <strong>LANGUAGES:</strong> HTML, CSS/SCSS, JS/jQuery, PHP, CSV
            <br/>
            Heartland Shops is a multi-lingual e-commerce website with localization support for 2 additional languages, a custom store location page with embedded Google maps, and a sticky navigation.
            <br/>
            As the lead developer on the Heartland Shops project, I developed the bulk of custom theme for the site and coordinated with the client to manage a bulk CSV product import.
            <br/>
            <a href="https://www.heartlandshops.com/" target="_blank" rel="noreferrer noopener">See Custom Magento E-Commerce Site</a> 
          </p>
          <h3>Hegen US - Shopify</h3>
          <span className="image main">
            <a href="https://www.hegen.us/pages/ppsu" target="_blank" rel="noreferrer noopener">
              <img src={hegenppsu} alt="Hegen US Custom Page - Practical Soft Square Bottle Design" />
            </a>
          </span>
          <p>
          <strong>ROLE:</strong> Freelance Shopify Developer
            <br/>
            <strong>TOOLS:</strong> Shopify, Adobe XD
            <br/>
            <strong>LANGUAGES:</strong> HTML, CSS, Javascript, Liquid, SVG
            <br/>
            As a freelance developer, I helped Hegen develop unique custom pages to highlight their product information and extend/tweak their existing theme. 
            <br/>
            <a href="https://www.hegen.us/pages/ppsu" target="_blank" rel="noreferrer noopener">See Custom Shopify Page</a> 
          </p>
          <h3>Adobe Document Cloud - Adobe Experience Manager</h3>
          <span className="image main">
          <a href="https://acrobat.adobe.com/us/en/" target="_blank" rel="noreferrer noopener">
            <img src={acrobatadobe} alt="Adobe Document Cloud - Quality and Automation Engineer" />
            </a>
          </span>
          <p>
            <strong>ROLE:</strong> Quality and Automation Engineer
            <br/>
            <strong>TOOLS:</strong> Jenkins, Cucumber, Selenium Webdriver, MongoDB, SQL Workbench, Git, AEM 6.4/6.5
            <br/>
            <strong>LANGUAGES:</strong> Ruby, Python, Javascript/React, Java, XML, JSON, HTML, CSS
            <br/>
            As the lead quality engineer on the engineering team for Acrobat.adobe.com, I worked together with an international team to support continuous development releases and the occasional content campaign launch. I helped validate and monitor business critical features for the global website through the development and maintenance of a variety of automated tools. 
            <br/>
            <a href="https://acrobat.adobe.com/us/en/" target="_blank" rel="noreferrer noopener">See Site</a> 
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            I’m a self-taught developer with a passion for information and functional design.
            I took up web development in order to help learn how to push the boundaries of data visualization for my college newspaper and discovered a love of programming along the way. 
            <br/>
            <br/>
            I'm currently working through a B.S. of Computer Science at WGU, but I'm a passionate lifelong learner and creator. The web is a powerful tool for people to connect with the world and empower themselves, and I'm honored to play a part in that.
            <br/>
            <br/>
            My years of professional work in web development and quality+automation engineering have only fueled my passion for learning, growing, teaching, and enabling greater effiency and collaboration in the world through the power of code.
            <br/>
            <br/>
            Aside from coding, I also love dogs, musicals, illustrations, data visualization and in depth journalism.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>A peaceful observer of the world. <br/> 
          I don't have much to share here, but I'd love to listen. <br/>
          Let's chat!</p>
          <ul className="icons">
            <li>
              <a
                href="mailto:esotericstrings@gmail.com"
                className="icon fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/esotericstrings"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/esotericstrings"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
