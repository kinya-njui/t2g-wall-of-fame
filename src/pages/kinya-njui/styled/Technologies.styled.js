import styled from "styled-components";

export const TechnologiesSection = styled.section`
  padding: 60px 0;
  background-color: #f9f9f9;
  text-align: center;
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6rem;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TechnologiesCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 280px;
  height: 350px;
  text-align: center;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  h2 {
    font-size: 1.6rem;
    margin: 15px 0 10px 0;
  }
  p {
    font-size: 1.1rem;
    color: #666;
  }
`;

export const ImgCard = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  img {
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
