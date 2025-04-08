import React from "react";
import "./style.css";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };
  
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

      {/* Fana AI menu section */}

      <section
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: isMobile ? "center" : "flex-start",
        backgroundImage: "url('/images/banner-image-7.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "black",
        gap: "15%",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      {/* Left Info Block */}
      <div
        style={{
          flex: "1 1 400px",
          position: isMobile ? "static" : "sticky",
          top: isMobile ? "auto" : "20vh",
          alignSelf: isMobile ? "center" : "flex-start",
          maxWidth: "600px",
          width: "100%",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: "12px",
          textAlign: "left",
        }}
      >
        <h2 className="section-title">AI Enabled Menu</h2>
        <p className="section-title" style={{ fontSize: 20, color: "#888888" }}>
          Smart end-to-end menu
        </p>
        <div>
          <h4><strong>What do we provide:</strong></h4>
          <h5>Dynamic menu where customers can check and order food.</h5>
          <h5>Pay bills directly from the menu.</h5>
          <h5>Ask anything about the food.</h5>
          <h5>Get top recommendations based on taste preferences.</h5>
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
            backgroundColor: "#211c36",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          🚀 Start 2-Month Free Trial
        </button>
      </div>

      {/* Right Scrollable iframe */}
      <div
        style={{
          flex: "2 1 600px",
          maxWidth: "500px",
          width: "100%",
          height: isMobile ? "70vh" : "120vh",
          backgroundColor: "white",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <iframe
          src="https://resturants.getfana.com/"
          title="Fana Demo Restaurant"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>
      </section>
  

      {/* Fana Smart Pad */}

      <section style={{ width: "100%" }}>
  {/* Wrapper */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      position: "relative",
    }}
  >
    {/* Description Box */}
    <div
      className="callpad-description"
      style={{
        width: "100%",
        maxWidth: "450px",
        padding: "20px",
        paddingRight: "5%",
        textAlign: "left",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        borderRadius: "12px",
        position: "absolute",
        top: "50%",
        right: "5%",
        transform: "translateY(-50%)",
        zIndex: 2,
      }}
    >
      <h2 className="section-title">Fana Call Pad</h2>
      <p className="section-title" style={{ fontSize: 20, color: "#888888" }}>
        Calls waiter whenever needed.
      </p>
      <div className="col">
        <h4><strong>Helps in high footfall days</strong></h4>
        <h4><strong>🤖 Ensures that calling a waiter is not a hassle for customers</strong></h4>
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
          backgroundColor: "#211c36",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        🚀 Start 2-Month Free Trial
      </button>
    </div>

    {/* Background Image */}
    <img
      src="/images/callbuttonanim.gif"
      alt="Call Pad Background"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        zIndex: 1,
      }}
    />
  </div>

  {/* Responsive Behavior */}
  <style>
    {`
      @media (max-width: 768px) {
        .callpad-description {
          position: static !important;
          transform: none !important;
          text-align: left !important;
          padding: 20px !important;
          paddingLeft: 20px !important;
          }
      }
    `}
  </style>
</section>


      {/* Free Trial Form Section */}
      <section
        id="free-trial-form"
        style={{
          padding: "60px 20px",
          backgroundColor: "#f4f4f4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh", // makes it vertically centered on screen
        }}
      >
        <form
          style={{
            backgroundColor: "white",
            padding: "30px 40px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <h2 style={{ marginBottom: 20, fontSize: 28, textAlign: "center" }}>🚀 Get Your Free Trial</h2>

          <label>🍽️ Restaurant Name</label>
          <input type="text" placeholder="Enter restaurant name" style={inputStyle} />

          <label>👤 Contact Person</label>
          <input type="text" placeholder="Your name" style={inputStyle} />

          <label>📧 Email</label>
          <input type="email" placeholder="you@example.com" style={inputStyle} />

          <label>📞 Phone Number</label>
          <input type="tel" placeholder="1234567890" style={inputStyle} />

          <label>📍 Restaurant Location</label>
          <input type="text" placeholder="City / Address" style={inputStyle} />

          <label style={{ marginTop: 20, fontWeight: "bold" }}>
            ✅ What would you like to try?
          </label>

          <div style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}>
            <label><input type="checkbox" style={{ marginRight: 8 }} /> Robot Waiter</label>
            <label><input type="checkbox" style={{ marginRight: 8 }} /> AI Menu</label>
            <label><input type="checkbox" style={{ marginRight: 8 }} /> FanaCall</label>
          </div>

          <button
            type="submit"
            style={{
              padding: "12px 24px",
              fontSize: 16,
              backgroundColor: "#211c36",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Submit
          </button>
        </form>
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
