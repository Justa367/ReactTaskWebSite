import { CardContent, Typography, Card, Stack } from '@mui/material';
import type { TaskType } from '../types/task-type';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import type { Dispatch, SetStateAction } from 'react';

type Props = {
  tasks: TaskType[];
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
};

const PriorityTypography = styled(Typography)<{ priority: TaskType['priority'] }>(
  ({ priority }) => ({
    textTransform: 'capitalize',
    fontSize: '0.8rem',
    color: '#fff',
    backgroundColor:
      priority === 'high' ? '#d32f2f' : priority === 'medium' ? '#fb8c00' : '#388e3c',
    borderRadius: '8px',
    padding: '3px 8px',
  }),
);

export const DisplayTaskCard = ({ tasks, setTasks }: Props) => {
  const handleToggle = (index: number) => () => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[index] = {
        ...newTasks[index],
        isDone: !newTasks[index].isDone,
      };
      console.log('Updated tasks:', newTasks);
      return newTasks;
    });
  };

  return (
    <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
      <Stack spacing={4}>
        <CardContent sx={{ p: 0 }}>
          <Typography variant="h6" fontWeight="bold" color="#1e3799" gutterBottom>
            Your Tasks
          </Typography>
          <List>
            {tasks.map((task, index) => (
              // Dodać border radius
              <ListItem className={task.isDone ? 'completed-task' : 'not'} key={index}>
                <ListItemButton onClick={handleToggle(index)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={task.isDone ?? false}
                      tabIndex={-1}
                      sx={{
                        color: '#1e3799',
                        '&.Mui-checked': {
                          color: '#1e3799',
                        },
                      }}
                    />
                  </ListItemIcon>
                  {/*TODO większy odstęp między wierszami*/}
                  <ListItemText
                    primary={
                      <Stack direction="row" spacing={3}>
                        <Typography fontWeight="bold" fontSize="1.1rem">
                          {task.taskDescription}
                        </Typography>
                        <PriorityTypography priority={task.priority}>
                          {task.priority}
                        </PriorityTypography>
                        {/*Zmniejszyć czcionkę*/}
                        <Typography>{`Due to: ${task.date?.format('DD/MM/YYYY')}`}</Typography>
                      </Stack>
                    }
                    secondary={`Created At: ${task.createdAt?.format('DD/MM/YYYY')}`}
                  />
                  <IconButton edge="end" sx={{ color: '#eb0e2bff' }}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Stack>
    </Card>
  );
};

//TODO: style dla completed task
//TODO: ogarnąć delete task
//TODO: jeśli due date minęło to dodać czerwony border
//TODO: Add progress overview section
//TODO: ogarnąć wyświetlanie taska jesli nie ma due date
