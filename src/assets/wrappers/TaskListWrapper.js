import styled from 'styled-components';

export const Accordion = styled.div`
  margin: 0.625rem 0;
`;

export const AccordionHeader = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'openaccordion',
})`
  display: flex;
  justify-content: space-between;
  padding: 0.625rem;
  background-color: #f3f6f9;
  border: 1px solid #f3f6f9;
  border-radius: 0.3125rem;
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: #e9ecef;
  }

  img {
    transform: ${(props) => (props.openaccordion ? 'rotate(180deg)' : null)};
  }
`;

export const AccordionContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isopen',
})`
  border-bottom: 1px solid #ddd;
  border-top: none;
  padding: 0.625rem;
  display: ${(props) => (props.isopen ? 'block' : 'none')};
  background-color: #fff;
`;
