import styled from 'styled-components';

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
`;

const ItemTitle = styled.h3`
  font-size: 17px;
  color: white;
`;

const ItemTitleNumber = styled.span`
  color: aquamarine;
`;

const ItemCheckbox = styled.input``;

export { ItemContainer, ItemTitle, ItemCheckbox, ItemTitleNumber };
