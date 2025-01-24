import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
`;

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #034ea2;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

export const SearchBarContainer = styled.div`
  position: relative;
  margin-bottom: 20px;

  img {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 35px 10px 40px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;
