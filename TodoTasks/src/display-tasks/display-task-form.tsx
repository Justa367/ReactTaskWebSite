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
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#fff',
    backgroundColor:
      priority === 'high' ? '#d32f2f' : priority === 'medium' ? '#fb8c00' : '#388e3c',
    borderRadius: '8px',
    padding: '2px 8px',
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
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" sx={{ color: '#eb0e2bff' }}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemButton onClick={handleToggle(index)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={task.isDone}
                      tabIndex={-1}
                      sx={{
                        color: '#1e3799',
                        '&.Mui-checked': {
                          color: '#1e3799',
                        },
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Stack direction="row" spacing={3}>
                        <Typography fontWeight="bold" fontSize="1.1rem">
                          {task.taskDescription}
                        </Typography>
                        <PriorityTypography priority={task.priority}>
                          {task.priority}
                        </PriorityTypography>
                        <Typography>{`Due to: ${task.date?.format('DD/MM/YYYY')}`}</Typography>
                      </Stack>
                    }
                    secondary={`Created At: ${task.createdAt?.format('DD/MM/YYYY')}`}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Stack>
    </Card>
  );
};
