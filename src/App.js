import React from "react";
import "./style.css";

export default function HomePage() {
  return (
    <div>
      {/* Banner Section */}
      <header id="banner" className="scrollto clearfix">
        <div id="header" className="nav-collapse">
          <div className="row clearfix">
            <div className="col-1">
              {/* Logo */}
              <div id="logo">
                <img src="images/logo.png" id="navigation-logo" alt="Fana Logo" />
              </div>
              {/* Navigation */}
              <nav>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="fanaCall.html">FanaCall</a></li>
                  <li><a href="fanaBot.html">FanBot</a></li>
                  <li><a href="aiMenu.html">AiMenu</a></li>
                </ul>
              </nav>
              <div id="nav-trigger"><span></span></div>
            </div>
          </div>
        </div>

        {/* Banner Content */}
        <div id="banner-content" className="row clearfix">
          <div className="col-38">
            <img src="images/logo.png" id="banner-logo" alt="Banner Logo" style={{ width: 200 }} />
            <div className="section-heading">
              <h1>Fana</h1>
              <h2>Elevating Customer Experience Through Innovation</h2>
            </div>
            <a href="#" className="button">Check our ecosystem</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="introduction scrollto">
        <div className="row clearfix about-container">
          <div className="about-text">
            <div className="section-heading">
              <h2 className="section-title">Problem We Are Fixing</h2>
              <h3>Inflexible and Costly Workforce in Restaurants</h3>
            </div>
          </div>
          <div className="about-text">
            <p className="section-subtitle">
              Restaurants struggle to scale their workforce efficiently, facing staff shortages during peak hours and excess labor costs during slow periods.
            </p>
            <p className="section-subtitle">
              Reliance on permanent staff leads to fixed expenses, making it difficult to adapt to changing business demands and increasing financial risk.
            </p>
          </div>
        </div>
      </section>


      <section id="products" style={{ margin: "0 auto", padding: "20px" }}>
        <h2 className="section-title" style={{ textAlign: "left" }}>How we are fixing this?..</h2>

        <div className="cards-wrapper">
          {/* FanaCall */}
          <div className="card col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
            <div className="icon"><i className="fa fa-robot fa-2x"></i></div>
            <div className="icon-block-description">
              <h4 style={{ fontSize: "1.8rem", color: "#211c36", fontWeight: "bold" }}>FanaCall</h4>
              <p style={{ fontSize: "1.1rem", color: "#433d5e" }}>Revolutionizing restaurant service with smart call buttons.</p>
              <ul style={{ listStyle: "none" }}>
                <li><span style={{ color: "#5a496e", fontWeight: "bold" }}>✓</span> Customers can request a waiter with just a tap.</li>
                <li><span style={{ color: "#5a496e", fontWeight: "bold" }}>✓</span> No need for waiters to hover around tables.</li>
                <li><span style={{ color: "#5a496e", fontWeight: "bold" }}>✓</span> Helps handle peak-hour rush smoothly.</li>
              </ul>
            </div>
          </div>

          {/* FanBot */}
          <div className="card col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
            <div className="icon"><i className="fa fa-robot fa-2x"></i></div>
            <div className="icon-block-description">
              <h4 style={{ fontSize: "1.8rem", color: "#211c36", fontWeight: "bold" }}>FanBot</h4>
              <p style={{ fontSize: "1.1rem", color: "#433d5e" }}>A restaurant bot capable of moving on any terrain and even climbing stairs.</p>
              <ul style={{ listStyle: "none" }}>
                <li><span style={{ color: "#5a496e", fontWeight: "bold" }}>✓</span> Taking orders from customers.</li>
                <li><span style={{ color: "#5a496e", fontWeight: "bold" }}>✓</span> Serving food efficiently.</li>
                <li><span style={{ color: "#5a496e", fontWeight: "bold" }}>✓</span> Cleaning tables after customers leave.</li>
              </ul>
            </div>
          </div>

          {/* AI Menu */}
          <div className="card col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
            <div className="icon"><i className="fa fa-mobile-alt fa-2x"></i></div>
            <div className="icon-block-description">
              <h4 style={{ fontSize: "1.8rem", color: "#211c36", fontWeight: "bold" }}>AI Menu</h4>
              <p style={{ fontSize: "1.1rem", color: "#433d5e" }}>Online menu for restaurants.</p>
              <ul style={{ listStyle: "none" }}>
                <li><span style={{ color: "#5a496e", fontWeight: "bold" }}>✓</span> Browse the menu on their smartphones.</li>
                <li><span style={{ color: "#5a496e", fontWeight: "bold" }}>✓</span> Place orders seamlessly.</li>
                <li><span style={{ color: "#5a496e", fontWeight: "bold" }}>✓</span> Get AI-powered recommendations based on their preferences.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FanaBot Section */}
     <section>

        <section 
          style={{
            margin: "0 auto",
            paddingTop: 50,
            paddingBottom: 50,
            backgroundImage: "url('/images/banner-image-5.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "black",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              padding: "20px",
              paddingRight: "5%",
              textAlign: "left",
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              borderRadius: "12px",
            }}
          >
            <h2 className="section-title">Robot Waiters on Rent</h2>
            <p className="section-title" style={{ fontSize: 20, color: "#888888" }}>
              Hassle-free, Smart & Cost-effective Robots for Restaurants
            </p>
            <div className="col" data-wow-delay="0.3s">
              <h4><strong>🔄 Adaptable Functions:</strong></h4>
              <h5>Can take orders, serve food, or clean tables based on restaurant needs.</h5>
              <h4><strong>💰 Flexible Rental Model:</strong></h4>
              <h5>Available on-demand, reducing labor costs and adjusting to seasonal demand.</h5>
              <h4><strong>🤖 24/7 Autonomous Service:</strong></h4>
              <h5>Operates independently with remote assistance for uninterrupted workflow.</h5>
            </div>

            <button
              onClick={() => {
                const formSection = document.getElementById("free-trial-form");
                if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                marginTop: 20,
                padding: "12px 24px",
                fontSize: 16,
                fontWeight: "bold",
                backgroundColor: "#211c36", // Dark blue
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              🚀 Start 2-Month Free Trial
            </button>
          </div>
        </section>



        {/* How it works Section for FanaBot */}
        <section className="fanabot-how-it-works-wrapper">
          <div className="fanabot-how-it-works-container">

            {/* Left Section */}
            <div className="fanabot-how-it-works-left">
              <h2> <strong> How Will It Work? </strong></h2>
              <p>
                Experience the Future of Dining with Our Robot Waiter
              </p>
              <p>
                We will place a robot in your restaurant for 30 days to bring food from the kitchen to tables.
                A dedicated remote assistant will monitor the robot in real-time and intervene if necessary.
                If the assistant cannot resolve the issue, the restaurant manager will be notified for full control.
              </p>
            </div>

            {/* Right Section - Flow */}
            <div className="fanabot-how-it-works-right">
              🛠️ Robot operates autonomously<br />
              ↓<br />
              🆘 Robot detects an issue & calls dedicated support<br />
              ↓<br />
              🎮 Support operator remotely controls the robot<br />
              ↓<br />
              👨‍💼 Manager can view/take control anytime<br />
              ↓<br />
              📢 If unresolved, manager is alerted
            </div>

          </div>
        </section>

      </section>


      {/* Contact Section */}
      <section id="contact" style={{ backgroundColor: "#211c36", color: "#F5DEB3", padding: "40px 20px", textAlign: "center" }}>
        <h2 className="section-title">Contact Us</h2>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, fontSize: "1.2rem" }}>
          <p><i className="fa fa-map-marker-alt" style={{ marginRight: 10 }}></i> Maosmic Fana Limited, Pimple Nilakh, Pune</p>
          <p><i className="fa fa-phone" style={{ marginRight: 10 }}></i> +91-6203200626</p>
          <p><i className="fa fa-envelope" style={{ marginRight: 10 }}></i> <a href="mailto:jayantanand2001@gmail.com" style={{ color: "#F5DEB3", textDecoration: "none" }}>jayantanand2001@gmail.com</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer id="landing-footer" style={{ textAlign: "center" }}>
        <div style={{ alignItems: "center", paddingTop: 10 }} className="row">
          <ul className="social-icons">
            <li><a target="_blank" title="Facebook" href="https://www.facebook.com/username"><i className="fa fa-facebook fa-1x"></i>Facebook</a></li>
            <li><a target="_blank" title="Google+" href="http://google.com/+username"><i className="fa fa-google-plus fa-1x"></i>Google+</a></li>
            <li><a target="_blank" title="Twitter" href="http://www.twitter.com/username"><i className="fa fa-twitter fa-1x"></i>Twitter</a></li>
            <li><a target="_blank" title="Instagram" href="http://www.instagram.com/username"><i className="fa fa-instagram fa-1x"></i>Instagram</a></li>
            <li><a target="_blank" title="behance" href="http://www.behance.net"><i className="fa fa-behance fa-1x"></i>Behance</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
