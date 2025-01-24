import { useState } from 'react';
import TaskItem from './TaskItem';
import Arrow from '../assets/images/down_arrow.svg';
import {
  Accordion,
  AccordionHeader,
  AccordionContent,
} from '../assets/wrappers/TaskListWrapper';

const TaskList = ({ tasks }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  // Group tasks by status
  const groupedTasks = {
    Pending: tasks.filter((task) => task.status === 'Pending'),
    'In Progress': tasks.filter((task) => task.status === 'In Progress'),
    Completed: tasks.filter((task) => task.status === 'Completed'),
  };

  const toggleAccordion = (status) => {
    setOpenAccordion(openAccordion === status ? null : status);
  };

  return (
    <div>
      {Object.keys(groupedTasks).map((status) => (
        <Accordion key={status}>
          <AccordionHeader
            onClick={() => toggleAccordion(status)}
            openaccordion={openAccordion}
          >
            <span>
              {status} <strong>({groupedTasks[status].length})</strong>
            </span>

            <img src={Arrow} alt="arrow" />
          </AccordionHeader>
          <AccordionContent isopen={openAccordion === status || ''}>
            {groupedTasks[status].length > 0 ? (
              groupedTasks[status].map((task) => (
                <TaskItem key={task.id} task={task} />
              ))
            ) : (
              <p>No tasks in this category.</p>
            )}
          </AccordionContent>
        </Accordion>
      ))}
    </div>
  );
};

export default TaskList;
