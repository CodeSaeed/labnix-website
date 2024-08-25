import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const AdvertisementBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 15px',
        backgroundColor: '#358d96',
        color: '#ffffff',
        fontSize: '16px',
        flexWrap: 'wrap', // Allow wrapping for smaller screens
      }}
    >
      <div
        style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '5px', // Space below this section on smaller screens
          marginLeft: '10px', // Add margin to align icons slightly to the right
        }}
      >
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
      <div
        style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '5px', // Space below this section on smaller screens
        }}
      >
        <p
          style={{
            margin: 0,
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '18px',
            textAlign: 'center', // Center the text
          }}
        >
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px', fontSize: '20px' }} />
          <span style={{ fontSize: '20px' }}>
            <span style={{ transform: 'translateY(0px)', display: 'inline-block' }}>+24</span>
            <span style={{ transform: 'translateY(2px)', display: 'inline-block' }}>5</span>&nbsp;
            <span style={{ transform: 'translateY(0px)', display: 'inline-block' }}>124</span>
            <span style={{ transform: 'translateY(2px)', display: 'inline-block' }}>5</span>
            <span style={{ transform: 'translateY(-2px)', display: 'inline-block' }}>86</span>&nbsp;
            <span style={{ transform: 'translateY(1px)', display: 'inline-block' }}>4</span>
            <span style={{ transform: 'translateY(0px)', display: 'inline-block' }}>1</span>
            <span style={{ transform: 'translateY(1px)', display: 'inline-block' }}>4</span>
          </span>
        </p>
      </div>
      <div
        style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: '5px', // Space below this section on smaller screens
          marginRight: '10px', // Add margin to align "My Account" slightly to the left
        }}
      >
        <p style={{ margin: 0 }}>
          My Account
        </p>
      </div>
    </div>
  );
};

export default AdvertisementBar;
