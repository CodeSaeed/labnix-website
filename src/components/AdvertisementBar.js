// src/components/AdvertisementBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const AdvertisementBar = () => {
  return (
    <div className="advertisement-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div style={{ flex: '1', display: 'flex', gap: '5px', marginLeft: '130px' }}>
        <FontAwesomeIcon icon={faFacebookF} style={{ color: 'white' }} />
        <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} />
        <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} />
        <FontAwesomeIcon icon={faLinkedinIn} style={{ color: 'white' }} />
      </div>
      <div style={{ flex: '1', textAlign: 'center', marginLeft: '-50px' }}>
        <p style={{ margin: 0, display: 'inline-flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faPhone} style={{ color: 'white', marginRight: '8px' }} />
          +245 124586 414
        </p>
      </div>
      <div style={{ flex: '1', textAlign: 'right', marginRight: '90px' }}> {/* Adjusted marginRight */}
        <p style={{ margin: 0, color: 'white', marginLeft: '-20px' }}> {/* Added marginLeft */}
          My Account
        </p>
      </div>
    </div>
  );
};

export default AdvertisementBar;
