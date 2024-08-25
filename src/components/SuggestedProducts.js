import React from 'react';
import p1 from '../Assets/p1.png';
import p2 from '../Assets/p1.png';
import p3 from '../Assets/p7.png';

const SuggestedProducts = () => {
  const products = [
    { 
      src: p1, 
      title: "Haze Measurement Devices", 
      description: (
        <>
          <strong>Color & Haze meter NH-M-101 <br /></strong> Color & Haze meter NH-M-101 is used for haze and transmittance measurement. It has an open measurement area with no limit on sample size and can carry out vertical measurements as well.
        </>
      )
    },
    { src: p2, title: "", description: "Melt Flow Indexer NMFI-101" },
    { src: p3, title: "", description: "Melt Flow Indexer NMFI-101" },
    { src: p1, title: "", description: "Melt Flow Indexer NMFI-101" }
  ];

  const cardHeight = '290px'; // Fixed height for all cards
  const firstCardWidth = '520px'; // Width for the first card
  const otherCardWidth = '200px'; // Width for the other cards

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', width: '100%' }}>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '1.5em',
          marginTop: '0px',
          marginBottom: '20px',
          fontWeight: 'bold',
          color: '#000',
        }}
      >
        Suggested Products
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'nowrap', // Keep all cards in a single line for web view
        overflowX: 'auto', // Allow horizontal scrolling if needed
        gap: '20px', // Space between cards
        alignItems: 'flex-start', // Align cards to the top of the container
        justifyContent: 'flex-start', // Align items to the start of the container
        '@media (max-width: 768px)': {
          flexDirection: 'column', // Stack cards vertically on small screens
          overflowX: 'visible', // Remove horizontal scrolling on small screens
        },
      }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #2f8e94',
              backgroundColor: '#fff',
              borderRadius: '5px',
              display: 'flex',
              flexDirection: index === 0 ? 'row' : 'column', // Adjust layout for the first card
              width: index === 0 ? firstCardWidth : otherCardWidth, // Adjust width of the first card
              height: cardHeight, // Fixed height for all cards
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
              boxSizing: 'border-box',
              position: 'relative', // Ensure positioning context for button
              overflow: 'hidden', // Ensure content does not overflow
              '@media (max-width: 768px)': {
                width: '100%', // Full width of container on small screens
                marginBottom: '20px', // Add space between stacked cards
                flexDirection: 'column', // Stack cards vertically
              },
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center', // Center-align items vertically
              padding: '10px',
              flexDirection: index === 0 ? 'row' : 'column', // Adjust layout for the first card
              flex: '1', // Allow content to take available space
              overflow: 'hidden', // Ensure content doesn't overflow
              position: 'relative', // For positioning the image
              '@media (max-width: 768px)': {
                flexDirection: 'column', // Stack image and content vertically
              },
            }}>
              <img
                src={product.src}
                alt={product.title}
                style={{ 
                  width: index === 0 ? '140px' : '100px', // Adjust the width of the images
                  height: 'auto', 
                  borderRadius: '5px',
                  marginRight: index === 0 ? '10px' : '0',
                  marginTop: index === 0 ? '-8px' : '40px', // Push image up in the first card only; push down in others
                  '@media (max-width: 768px)': {
                    marginTop: '0', // Remove margin on small screens
                    width: '100%', // Full width of the card on small screens
                    marginBottom: '10px', // Add space below image on small screens
                  },
                }}
              />
              <div style={{ 
                flex: '1', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'flex-start', // Align content to the top
                marginLeft: index === 0 ? '10px' : '0',
                marginTop: index === 0 ? '-40px' : '0', // Push content up for the first card
                position: 'relative', // For positioning the content
                zIndex: 1 // Ensure content is above the image
              }}>
                <h3 style={{ margin: '0 0 5px', fontSize: '1em', color: product.title === "Haze Measurement Devices" ? '#2f8e94' : '#000' }}>
                  {product.title}
                </h3>
                <p style={{ 
                  margin: '0', 
                  fontSize: '0.8em', 
                  color: '#555',
                  whiteSpace: index === 0 ? 'normal' : 'nowrap', // Prevent wrapping for the second, third, and fourth cards
                  overflow: 'hidden', // Hide overflow if text is too long
                  textOverflow: 'ellipsis' // Add ellipsis if text overflows
                }}>
                  {product.description}
                </p>
              </div>
            </div>
            {index === 0 ? (
              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)', // Center the button
                  width: 'calc(100% - 20px)', // Full width minus padding
                  display: 'flex',
                  justifyContent: 'center', // Center the button
                  zIndex: 2 // Ensure button is above the content
                }}
              >
                <button
                  style={{
                    backgroundColor: '#2f8e94',
                    color: 'white',
                    border: 'none',
                    padding: '6px 20px',
                    cursor: 'pointer',
                    fontSize: '1em',
                    boxSizing: 'border-box',
                    width: '30%',
                    position: 'relative', // Add this to enable positioning
                    top: '-40px', // Move the button upward
                    '@media (max-width: 768px)': {
                      width: '100%', // Full width of button on small screens
                      top: 'auto', // Reset top positioning on small screens
                      bottom: '10px', // Position button at the bottom on small screens
                    },
                  }}
                >
                  View
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: 'auto',
                  borderTop: '1px solid #2f8e94',
                }}
              >
                <button
                  style={{
                    backgroundColor: '#2f8e94',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    cursor: 'pointer',
                    fontSize: '0.9em',
                    flex: '1',
                    borderRight: '1px solid #fff', // White line between buttons
                    boxSizing: 'border-box',
                    '@media (max-width: 768px)': {
                      padding: '8px', // Adjust padding on small screens
                    },
                  }}
                >
                  View
                </button>
                <button
                  style={{
                    backgroundColor: '#2f8e94',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    cursor: 'pointer',
                    fontSize: '0.9em',
                    flex: '1',
                    boxSizing: 'border-box',
                    '@media (max-width: 768px)': {
                      padding: '8px', // Adjust padding on small screens
                    },
                  }}
                >
                  Catalog
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProducts;
