import React from 'react';
import p1 from '../Assets/p1.png';
import p2 from '../Assets/p2.png';
import p3 from '../Assets/p3.png';

const SuggestedProducts = () => {
  const products = [
    { src: p1, title: "Haze Measurement Devices", description: "Color & Haze meter NHM-101 is used for haze and transmittance measurement..." },
    { src: p2, title: "Melt Flow Indexer", description: "Melt Flow Indexer NMFI-101" },
    { src: p3, title: "Melt Flow Indexer", description: "Melt Flow Indexer NMFI-101" },
    { src: p1, title: "Additional Product", description: "Additional product description for the fourth item" }
  ];

  // Set a fixed height for all cards
  const cardHeight = '320px'; // Adjust as needed
  const firstCardWidth = '520px'; // Width for the first card
  const otherCardWidth = '200px'; // Width for the other cards

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', width: '100%' }}>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '1.5em',
          marginTop: '20px',
          marginBottom: '20px',
          fontWeight: 'bold',
          color: '#000',
        }}
      >
        Suggested Products
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'nowrap', // Keep all cards in a single line
        overflowX: 'auto', // Allow horizontal scrolling if needed
        gap: '20px', // Space between cards
        alignItems: 'flex-start', // Align cards to the top of the container
      }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #2f8e94',
              backgroundColor: '#fff',
              borderRadius: '5px',
              display: 'flex',
              flexDirection: index === 0 ? 'row' : 'column', // Adjust layout for first card
              width: index === 0 ? firstCardWidth : otherCardWidth, // Adjust width of first card
              height: cardHeight, // Fixed height for all cards
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
              boxSizing: 'border-box',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center', // Center-align items vertically
              padding: '10px',
              flexDirection: index === 0 ? 'row' : 'column', // Adjust layout for first card
              flex: '1', // Allow content to take available space
              overflow: 'hidden', // Ensure content doesn't overflow
            }}>
              <img
                src={product.src}
                alt={product.title}
                style={{ width: '120px', height: 'auto', marginRight: index === 0 ? '10px' : '0', marginBottom: index !== 0 ? '10px' : '0', borderRadius: '5px' }}
              />
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: '1em', color: product.title === "Haze Measurement Devices" ? '#2f8e94' : '#000' }}>
                  {product.title}
                </h3>
                <p style={{ margin: '0', fontSize: '0.8em', color: '#555' }}>{product.description}</p>
              </div>
            </div>
            {index === 0 ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: 'auto',
                  padding: '10px',
                  borderTop: '1px solid #2f8e94',
                  justifyContent: 'center', // Center the button
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
                    boxSizing: 'border-box',
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
