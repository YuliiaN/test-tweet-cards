import styled from '@emotion/styled';

export const Button = styled.button`
  width: 150px;
  height: 40px;
  margin: 30px auto 0;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.follow};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
`;
