import styled from 'styled-components';

const ListContainer = styled.div`
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export { ListContainer, StyledList };
