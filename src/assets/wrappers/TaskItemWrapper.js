import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9375rem; /* 15px */
  margin: 0.625rem 0; /* 10px 0 */
  border: 0.0625rem solid #ddd; /* 1px */
  border-radius: 0.5rem; /* 8px */
  background: #fff;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1); /* 0 1px 3px */
  position: relative;
  &:hover {
    border-color: #007bff;
    box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.2); /* 0 2px 5px */
  }
  &:hover .task-actions {
    visibility: visible; /* Show the icons on hover */
    opacity: 1;
  }
`;

export const StatusIndicator = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'status',
})`
  position: absolute;
  top: 0.9375rem; /* 15px */
  right: 0.9375rem; /* 15px */
  font-size: 0.75rem; /* 12px */
  color: #231f20;
  display: flex;
  align-items: center;
  gap: 0.3125rem; /* 5px */

  &::before {
    content: '';
    width: 0.625rem; /* 10px */
    height: 0.625rem; /* 10px */
    border-radius: 50%;
    background-color: ${(props) =>
      props.status === 'In Progress'
        ? '#ffa500'
        : props.status === 'Completed'
        ? '#28a745'
        : '#dc3545'};
  }
`;

export const TaskTitle = styled.h4`
  font-size: 1rem; /* 16px */
  color: #034ea2;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

export const TaskDescription = styled.p`
  font-size: 0.75rem; /* 12px */
  color: #231f20;
  margin: 0.3125rem 0; /* 5px 0 */
`;

export const TaskDate = styled.small`
  font-size: 0.625rem; /* 10px */
  color: #767676;
`;

export const TaskDetails = styled.div`
  flex: 1;
`;

export const TaskAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem; /* 40px */
  height: 2.5rem; /* 40px */
  background-color: #e9f3ff;
  color: #034ea2;
  font-size: 1.125rem; /* 18px */
  font-weight: bold;
  border-radius: 50%;
  margin-right: 0.9375rem; /* 15px */
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 0.625rem; /* 10px */
  visibility: hidden; /* Initially hidden */
  opacity: 0; /* Transparent */
  transition: visibility 0s, opacity 0.3s ease; /* Smooth fade-in effect */
  position: absolute;
  bottom: 0.9375rem; /* 15px */
  right: 0.9375rem; /* 15px */
`;

export const ActionButton = styled.img`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.125rem; /* 18px */
`;
