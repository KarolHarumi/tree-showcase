import styled from 'styled-components';


export const CardContainer = styled.div`
  width: 400px;
  background-color: #fff;
  color: #000;
  padding: 20px;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const Title = styled.h2`
    font-size: 21px;
    margin: 0 0 10px;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const Subtitle = styled.h3`
    font-size: 16px;
    margin: 0;
    font-style: italic;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const Image = styled.span`
    border: 1px solid #000;
    width: 400px;
    height: 400px;
    display: inline-block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 10px 0;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const Button = styled.a`
    display: block;
    font-size: 16px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    padding: 10px 5px;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
