import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  color: white;
`;

const HeaderDivider = styled.hr`
  max-width: 800px;
  color: blueviolet;
  margin-bottom: 50px;
`;

export { HeaderContainer, Title, HeaderDivider };
