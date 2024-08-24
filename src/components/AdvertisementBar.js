// src/components/AdvertisementBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const AdvertisementBar = () => {
  return (
    <div className="advertisement-bar" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '5px 10px', /* Adjusted padding */
      backgroundColor: '#358d96', /* Ensure background color consistency */
      color: 'white',
      textAlign: 'center',
      fontSize: '16px' /* Adjusted font size if needed */
    }}>
      <div style={{ 
        flex: '1', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', /* Center align icons vertically */
        gap: '10px',
        position: 'relative', /* Enable relative positioning */
        left: '-50px' /* Move icons a bit left */
      }}>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
      <div style={{ 
        flex: '1', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
      }}>
        <p style={{ margin: 0, display: 'inline-flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} />
          +245 124586 414
        </p>
      </div>
      <div style={{ 
        flex: '1', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
      }}>
        <p style={{ margin: 0 }}>
          My Account
        </p>
      </div>
    </div>
  );
};

export default AdvertisementBar;
