import React from 'react';
import logo from '../Assets/logofooter.png'; // Adjust the path to your logo

const Footer = () => {
  // Placeholder image URLs
  const facebookIcon = 'https://via.placeholder.com/30';
  const twitterIcon = 'https://via.placeholder.com/30';
  const linkedinIcon = 'https://via.placeholder.com/30';
  const googlePlusIcon = 'https://via.placeholder.com/30';
  const newsImage1 = 'https://via.placeholder.com/80x50';
  const newsImage2 = 'https://via.placeholder.com/80x50';

  return (
    <div className="footer" style={{ backgroundColor: '#030915', color: 'white', padding: '80px 0', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>
      <div className="container">
        <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo and Description */}
          <div className="col-md-3" style={{ marginBottom: '30px' }}>
            <img src={logo} alt="Company Logo" style={{ maxWidth: '150px', marginBottom: '20px' }} />
            <p style={{ textAlign: 'justify', lineHeight: '1.8', fontSize: '14px',color: '#83868D' }}>
              In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien.
            </p>
            {/* Social Media Icons */}
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
              <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
              <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
              <a href="#"><img src={googlePlusIcon} alt="Google Plus" /></a>
            </div>
          </div>

         {/* Latest News Section */}
<div className="col-md-3" style={{ marginBottom: '30px', textAlign: 'left' }}>
  <h5 style={{ fontSize: '16px', marginBottom: '20px', marginLeft: '-15px' }}>Latest News</h5>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <img src={newsImage1} alt="News 1" style={{ marginBottom: '10px', width: '80px', height: '50px' }} />
      <p style={{ textAlign: 'left', margin: 0, lineHeight: '1.6', fontSize: '14px', maxWidth: '300px', marginLeft: '-15px',color: '#A0A4A8' }}>
        Did son unreserved themselves indulgence its...
      </p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <img src={newsImage2} alt="News 2" style={{ marginBottom: '10px', width: '80px', height: '50px' }} />
      <p style={{ textAlign: 'left', margin: 0, lineHeight: '1.6', fontSize: '14px', maxWidth: '300px', marginLeft: '-15px',color: '#A0A4A8' }}>
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
      <a href="#" style={{ color: '#83868D', textDecoration: 'none' }}>Home</a>
    </li>
    <li style={{ marginBottom: '5px', paddingLeft: '10px' }}>
      <a href="#" style={{ color: '#83868D', textDecoration: 'none' }}>About</a>
    </li>
    <li style={{ marginBottom: '5px', paddingLeft: '10px' }}>
      <a href="#" style={{ color: '#83868D', textDecoration: 'none' }}>Contact</a>
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
      <div style={{ textAlign: 'center', fontSize: '14px',color: '#83868D' }}>
        <p style={{ margin: 0 }}>© Copyright All rights reserved 2021.</p>
      </div>
    </div>
  );
};

export default Footer;
