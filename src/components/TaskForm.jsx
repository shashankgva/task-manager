import Arrow from '../assets/images/down_arrow.svg';
import {
  FormContainer,
  Form,
  Input,
  Textarea,
  DropdownContainer,
  SelectedOption,
  Option,
  OptionsList,
  StatusDot,
  Button,
  ButtonGroup,
} from '../assets/wrappers/TaskFormWrapper';

const TaskForm = ({
  title,
  description,
  setTitle,
  setDescription,
  onSubmit,
  type = 'add',
  onCancel = () => {},
  status,
  handleSelectStatus,
  isDropdownOpen,
  toggleDropdown,
}) => {
  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value || '')}
        />
        <Textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value || '')}
        />
        {type === 'edit' ? (
          <DropdownContainer onClick={toggleDropdown}>
            <SelectedOption openaccordion={isDropdownOpen}>
              <div>
                <StatusDot
                  color={
                    status === 'Pending'
                      ? '#ccc'
                      : status === 'In Progress'
                      ? '#ffa500'
                      : '#28a745'
                  }
                />
                {status}
              </div>
              <img src={Arrow} alt="arrow" />
            </SelectedOption>
            {isDropdownOpen && (
              <OptionsList>
                <Option onClick={() => handleSelectStatus('Pending')}>
                  <StatusDot color="#ccc" />
                  Pending
                </Option>
                <Option onClick={() => handleSelectStatus('In Progress')}>
                  <StatusDot color="#ffa500" />
                  In Progress
                </Option>
                <Option onClick={() => handleSelectStatus('Completed')}>
                  <StatusDot color="#28a745" />
                  Completed
                </Option>
              </OptionsList>
            )}
          </DropdownContainer>
        ) : null}
        <ButtonGroup>
          {type === 'edit' ? (
            <Button className="cancel" type="button" onClick={onCancel}>
              Cancel
            </Button>
          ) : null}
          <Button className="update" type="submit">
            {type === 'edit' ? 'Update' : 'Add'}
          </Button>
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};

export default TaskForm;
