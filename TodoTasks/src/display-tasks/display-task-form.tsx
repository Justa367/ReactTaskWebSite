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
  //{tasks, setTasks} = useTasksState(); - wtedy juz nie potrzebne propsy

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

  const handleDelete = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
      <Stack spacing={4}>
        <CardContent sx={{ p: 0 }}>
          <Typography variant="h6" fontWeight="bold" color="#1e3799" gutterBottom>
            Your Tasks
          </Typography>
          {/*Jeśli pusta lista to wyświetl "No tasks yet" + add task icon*/}
          <List>
            {tasks.map((task, index) => {
              const isOverdue = task.date ? task.date.isBefore(new Date(), 'day') : false;

              return (
                <ListItem
                  key={index}
                  className={task.isDone ? 'completed-task' : 'not'}
                  sx={{
                    border: isOverdue ? '2px solid red' : 'none',
                    borderRadius: 4,
                    mb: 2,
                  }}
                >
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

                    {/*TODO większy odstęp między wierszami done*/}
                    <ListItemText
                      primary={
                        <Stack
                          direction="row"
                          spacing={3}
                          alignItems="center"
                          sx={{ opacity: task.isDone ? 0.5 : 1 }}
                        >
                          <Typography
                            fontWeight="bold"
                            fontSize="1.1rem"
                            sx={{
                              textDecoration: task.isDone ? 'line-through' : 'none',
                            }}
                          >
                            {task.taskDescription}
                          </Typography>

                          <PriorityTypography priority={task.priority}>
                            {task.priority}
                          </PriorityTypography>

                          <Typography fontSize="0.85rem">
                            {task.date
                              ? `Due to: ${task.date.format('DD/MM/YYYY')}`
                              : 'No due date'}
                          </Typography>
                        </Stack>
                      }
                      secondary={
                        <Typography sx={{ opacity: task.isDone ? 0.5 : 1 }}>
                          {`Created At: ${task.createdAt?.format('DD/MM/YYYY')}`}
                        </Typography>
                      }
                    />

                    <IconButton
                      edge="end"
                      sx={{ color: '#eb0e2bff' }}
                      onClick={(event) => {
                        event.stopPropagation();
                        handleDelete(index);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Stack>
    </Card>
  );
};

//TODO: style dla completed task done
//TODO: ogarnąć delete task done
//TODO: jeśli due date minęło to dodać czerwony border done
//TODO: Add progress overview section done
//TODO: ogarnąć wyświetlanie taska jesli nie ma due date done
