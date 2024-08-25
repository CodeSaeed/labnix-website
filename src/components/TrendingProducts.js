import React from 'react';
import styled from 'styled-components'; // Import styled-components
import p1 from '../Assets/p1.png';
import p2 from '../Assets/p7.png';
import p3 from '../Assets/p1.png';
import p4 from '../Assets/p6.png';
import p5 from '../Assets/p4.png';
import p6 from '../Assets/p3.png';

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5em;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #000;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Default to 3 columns
  gap: 20px; // Space between cards
  align-items: start; // Align items to the start of the grid cell

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); // 2 columns for medium screens
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // 1 column for small screens
  }
`;

const ProductCard = styled.div`
  border: 1px solid #2f8e94;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%; // Full width of grid cell
  height: 250px; // Adjust height for rectangular appearance
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: relative;
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  flex-grow: 1;
`;

const ProductImage = styled.img`
  width: 120px;
  height: auto;
  margin-right: 10px;
`;

const ProductInfo = styled.div`
  flex: 1;
  text-align: left;
`;

const ProductTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1em;
`;

const ProductDescription = styled.p`
  margin: 0 0 10px;
  font-size: 0.8em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
  margin-top: auto;
  border-top: 1px solid #2f8e94;
`;

const Button = styled.button`
  background-color: #2f8e94;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 0.9em;
  flex: 1;
  border-right: 1px solid #fff;
  box-sizing: border-box;

  &:last-child {
    border-right: none;
  }
`;

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
    <Container>
      <Title>Trending at Labnix</Title>
      <Grid>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductContent>
              <ProductImage
                src={product.imageSrc}
                alt={product.title}
              />
              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
              </ProductInfo>
            </ProductContent>
            <ButtonContainer>
              <Button>View</Button>
              <Button>Quote</Button>
              <Button>Catalog</Button>
            </ButtonContainer>
          </ProductCard>
        ))}
      </Grid>
    </Container>
  );
};

export default TrendingProducts;
