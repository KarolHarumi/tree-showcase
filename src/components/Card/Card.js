import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 21px;
  margin: 0 0 10px;
  color: #e01a4f;
  text-align: left;
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  margin: 0;
  font-style: italic;
  font-weight: normal;
  text-align: left;
`;

export const Image = styled.span`
  display: inline-block;
  width: 100%;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ccc;
`;

export const Button = styled.button`
  font-size: 14px;
  background-color: #e01a4f;
  color: #fff;
  border-radius: 10px;
  padding: 8px 10px;
  border: 0;
  outline: none;
  white-space: nowrap;
`;
