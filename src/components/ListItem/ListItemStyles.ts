import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
`;

const ItemTitle = styled.h3<{ $completed: boolean }>`
  font-size: 17px;
  color: white;
  text-decoration: ${(props) => (props.$completed ? 'line-through' : 'none')};
`;

const ItemTitleNumber = styled.span`
  color: aquamarine;
`;

const ItemCheckbox = styled.input``;

const ItemButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export { ItemContainer, ItemTitle, ItemCheckbox, ItemTitleNumber, ItemButtonsContainer };
