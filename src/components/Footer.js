import React from 'react';
import logo from '../Assets/logofooter.png'; // Adjust the path to your logo
import facebookIcon from '../Assets/FB.png'; // Adjust the path to your Facebook icon
import twitterIcon from '../Assets/Twitter.jpg'; // Adjust the path to your Twitter icon
import linkedinIcon from '../Assets/In.png'; // Adjust the path to your LinkedIn icon
import googlePlusIcon from '../Assets/G+.png'; // Adjust the path to your Google Plus icon
import newsImage1 from '../Assets/news.jpg'; // Adjust the path to your first news image
import newsImage2 from '../Assets/news1.jpg'; // Adjust the path to your second news image

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: '#030915', color: 'white', padding: '80px 0', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>
      <div className="container">
        <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo and Description */}
          <div className="col-md-3" style={{ marginBottom: '30px' }}>
            <img src={logo} alt="Company Logo" style={{ maxWidth: '150px', marginBottom: '20px' }} />
            <p style={{ textAlign: 'justify', lineHeight: '1.8', fontSize: '14px', color: '#83868D' }}>
              In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien.
            </p>
            {/* Social Media Icons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'flex-start' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
                <img src={facebookIcon} alt="Facebook" style={{ width: '24px', height: '24px', objectFit: 'cover' }} />
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
                <img src={twitterIcon} alt="Twitter" style={{ width: '24px', height: '24px', objectFit: 'cover' }} />
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
                <img src={linkedinIcon} alt="LinkedIn" style={{ width: '24px', height: '24px', objectFit: 'cover' }} />
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
                <img src={googlePlusIcon} alt="Google Plus" style={{ width: '24px', height: '24px', objectFit: 'cover' }} />
              </a>
            </div>
          </div>

          {/* Latest News Section */}
          <div className="col-md-3" style={{ marginBottom: '30px', textAlign: 'left' }}>
            <h5 style={{ fontSize: '16px', marginBottom: '20px', marginLeft: '-15px' }}>Latest News</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <img src={newsImage1} alt="News 1" style={{ marginBottom: '10px', width: '80px', height: '50px' }} />
                <p style={{ textAlign: 'left', margin: 0, lineHeight: '1.6', fontSize: '14px', maxWidth: '300px', marginLeft: '-15px', color: '#A0A4A8' }}>
                  Did son unreserved themselves indulgence its...
                </p>
              </div><br></br>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <img src={newsImage2} alt="News 2" style={{ marginBottom: '10px', width: '80px', height: '50px' }} />
                <p style={{ textAlign: 'left', margin: 0, lineHeight: '1.6', fontSize: '14px', maxWidth: '300px', marginLeft: '-15px', color: '#A0A4A8' }}>
                  Rapturous am eagerness it as resolving household...
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2" style={{ marginBottom: '30px', textAlign: 'left' }}>
            <h5 style={{ fontSize: '16px', marginBottom: '20px' }}>Quick Links</h5>
            <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '1.8', fontSize: '14px' }}>
              <li style={{ marginBottom: '5px', paddingLeft: '10px' }}>
                <a href="#home" style={{ color: '#83868D', textDecoration: 'none' }}>Home</a>
              </li>
              <li style={{ marginBottom: '5px', paddingLeft: '10px' }}>
                <a href="#about-us" style={{ color: '#83868D', textDecoration: 'none' }}>About</a>
              </li>
              <li style={{ marginBottom: '5px', paddingLeft: '10px' }}>
                <a href="#contact-us" style={{ color: '#83868D', textDecoration: 'none' }}>Contact</a>
              </li>
              <li style={{ marginBottom: '5px', paddingLeft: '10px' }}>
                <a href="#" style={{ color: '#83868D', textDecoration: 'none' }}>Privacy</a>
              </li>
              <li style={{ marginBottom: '5px', paddingLeft: '10px' }}>
                <a href="#" style={{ color: '#83868D', textDecoration: 'none' }}>Skills</a>
              </li>
              <li style={{ paddingLeft: '10px' }}>
                <a href="#" style={{ color: '#83868D', textDecoration: 'none' }}>Career</a>
              </li>
            </ul>
          </div>

          {/* Best Seller */}
          <div className="col-md-3" style={{ marginBottom: '30px' }}>
            <h5 style={{ fontSize: '16px', marginBottom: '20px', textAlign: 'left' }}>Best Seller</h5>
            <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '1.8', fontSize: '14px', textAlign: 'left' }}>
              <li style={{ marginBottom: '5px', paddingLeft: '10px' }}>
                <a href="#" style={{ color: '#83868D', textDecoration: 'none' }}>Flow Indexer NMFI</a>
              </li>
              <li style={{ marginBottom: '5px', paddingLeft: '10px' }}>
                <a href="#" style={{ color: '#83868D', textDecoration: 'none' }}>Melt Flow Indexer NMFI-101</a>
              </li>
              <li style={{ marginBottom: '5px', paddingLeft: '10px' }}>
                <a href="#" style={{ color: '#83868D', textDecoration: 'none' }}>NMF-101 Melt Flow Indexer</a>
              </li>
              <li style={{ marginBottom: '5px', paddingLeft: '10px' }}>
                <a href="#" style={{ color: '#83868D', textDecoration: 'none' }}>Videohive</a>
              </li>
              <li style={{ marginBottom: '5px', paddingLeft: '10px' }}>
                <a href="#" style={{ color: '#83868D', textDecoration: 'none' }}>Melt Flow Indexer</a>
              </li>
              <li style={{ paddingLeft: '10px' }}>
                <a href="#" style={{ color: '#83868D', textDecoration: 'none' }}>Melt Flow Indexer</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <hr style={{ border: '1px solid white', margin: '30px 0' }} />
      <div style={{ textAlign: 'center', fontSize: '14px', color: '#83868D' }}>
        <p style={{ margin: 0 }}>© Copyright All rights reserved 2021.</p>
      </div>
    </div>
  );
};

export default Footer;
