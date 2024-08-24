import React from 'react';
import p1 from '../Assets/p1.png';
import p2 from '../Assets/p7.png';
import p3 from '../Assets/p1.png';
import p4 from '../Assets/p6.png';
import p5 from '../Assets/p4.png';
import p6 from '../Assets/p3.png';

const TrendingProducts = () => {
  const products = [
    { imageSrc: p1, title: "Melt Flow Indexer", description: "Melt Flow Indexer NMFI-101" },
    { imageSrc: p2, title: "Melt Flow Indexer", description: "Melt Flow Indexer NMFI-101" },
    { imageSrc: p3, title: "Melt Flow Indexer", description: "Melt Flow Indexer NMFI-101" },
    { imageSrc: p4, title: "Melt Flow Indexer", description: "Melt Flow Indexer NMFI-101" },
    { imageSrc: p5, title: "Melt Flow Indexer", description: "Melt Flow Indexer NMFI-101" },
    { imageSrc: p6, title: "Melt Flow Indexer", description: "Melt Flow Indexer NMFI-101" },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff' }}>
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
        Trending at Labnix
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // 3 cards per row
        gap: '20px', // Space between cards
        alignItems: 'start', // Align items to the start of the grid cell
      }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #2f8e94',
              backgroundColor: '#fff',
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'column',
              width: '100%', // Full width of grid cell
              height: '250px', // Reduced height for rectangular appearance
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
              boxSizing: 'border-box',
              position: 'relative',
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '10px',
              flexGrow: 1,
            }}>
              <img
                src={product.imageSrc}
                alt={product.title}
                style={{ width: '120px', height: 'auto', marginRight: '10px' }}
              />
              <div style={{ flex: '1', textAlign: 'left' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: '1em' }}>{product.title}</h3>
                <p style={{ margin: '0 0 10px', fontSize: '0.8em' }}>{product.description}</p>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0',
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
                  borderRight: '1px solid #fff',
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
                  borderRight: '1px solid #fff',
                  boxSizing: 'border-box',
                }}
              >
                Quote
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
