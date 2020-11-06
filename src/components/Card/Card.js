import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 40%;
  background-color: #fff;
  color: #000;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
  margin: 10px 10px 10px;
  display: inline-block;
  box-sizing: border-box;
  @media (max-width: 800px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Title = styled.h2`
    font-size: 21px;
    margin: 0 0 10px;
`;

export const Subtitle = styled.h3`
    font-size: 16px;
    margin: 0;
    font-style: italic;
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
`;

export const Button = styled.button`
    display: block;
    font-size: 16px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    padding: 10px 5px;
`;
