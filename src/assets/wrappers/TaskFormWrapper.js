import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 1.25rem; /* 20px */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem; /* 15px */
  margin-bottom: 1.25rem; /* 20px */
`;

export const Input = styled.input`
  padding: 0.625rem; /* 10px */
  font-size: 0.75rem; /* 12px */
  border: 1px solid #ddd;
  border-radius: 0.3125rem; /* 5px */
`;

export const Textarea = styled.textarea`
  padding: 0.625rem; /* 10px */
  font-size: 0.75rem; /* 12px */
  border: 1px solid #ddd;
  border-radius: 0.3125rem; /* 5px */
`;

export const DropdownContainer = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 0.3125rem; /* 5px */
  cursor: pointer;
  padding: 0.625rem; /* 10px */
`;

export const SelectedOption = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'openaccordion',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem; /* 16px */

  img {
    transform: ${(props) => (props.openaccordion ? 'rotate(180deg)' : null)};
  }
`;

export const OptionsList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 0.3125rem; /* 5px */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1); /* 0 2px 4px */
  z-index: 10;
  margin-top: 0.3125rem; /* 5px */
`;

export const Option = styled.div`
  padding: 0.625rem; /* 10px */
  font-size: 1rem; /* 16px */
  display: flex;
  align-items: center;
  gap: 0.625rem; /* 10px */
  cursor: pointer;
  &:hover {
    background: #f9f9f9;
  }
`;

export const StatusDot = styled.span`
  width: 0.625rem; /* 10px */
  height: 0.625rem; /* 10px */
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.25rem; /* 20px */
`;

export const Button = styled.button`
  padding: 0.625rem 1.25rem; /* 10px 20px */
  font-size: 0.875rem; /* 14px */
  border-radius: 0.3125rem; /* 5px */
  cursor: pointer;
  transition: all 0.3s;

  &.cancel {
    background: transparent;
    color: #034ea2;
    border: 1px solid #034ea2;

    &:hover {
      background: #f0f8ff;
    }
  }

  &.update {
    background: #034ea2;
    color: white;
    border: none;

    &:hover {
      background: #0056b3;
    }
  }
`;
