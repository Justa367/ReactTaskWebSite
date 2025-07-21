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
import { useTasksState } from '../task-context/task-context';
import AddTaskIcon from '@mui/icons-material/AddTask';

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

export const DisplayTaskCard = () => {
  const { tasks, setTasks, filteredTasks } = useTasksState();

  const handleToggle = (id: string) => () => {
    const changingTaskIndex = tasks.findIndex((x) => x.id === id);

    if (changingTaskIndex < 0) return;

    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[changingTaskIndex] = {
        ...newTasks[changingTaskIndex],
        isDone: !newTasks[changingTaskIndex].isDone,
      };
      return newTasks;
    });
  };

  const handleDelete = (id: string) => {
    const changingTaskIndex = tasks.findIndex((x) => x.id === id);

    //GUARD
    if (changingTaskIndex < 0) return;

    const newTasks = [...tasks];
    newTasks.splice(changingTaskIndex, 1);
    setTasks(newTasks);
  };

  return (
    <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
      <Stack spacing={4}>
        <CardContent sx={{ p: 0 }}>
          <Typography variant="h6" fontWeight="bold" color="#1e3799" gutterBottom>
            Your Tasks
          </Typography>

          {filteredTasks.length === 0 && (
            <Stack spacing={1} justifyContent="center" alignItems="center" sx={{ p: 2 }}>
              <AddTaskIcon color="action" />
              <Typography>No tasks found</Typography>
            </Stack>
          )}

          <List>
            {filteredTasks.map((task) => {
              const isOverdue = task.date ? task.date.isBefore(new Date(), 'day') : false;

              return (
                <ListItem key={task.id} className={task.isDone ? 'completed-task' : 'not'}>
                  <ListItemButton
                    onClick={handleToggle(task.id)}
                    dense
                    sx={{
                      padding: '8px 16px',
                      borderRadius: 4,
                      border: isOverdue ? '2px solid red' : 'none',
                    }}
                  >
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

                          <Typography fontSize="0.95rem">
                            {task.date
                              ? `Due to: ${task.date.format('DD/MM/YYYY')}`
                              : 'No due date'}
                          </Typography>
                        </Stack>
                      }
                      secondary={
                        <Typography
                          fontSize="0.85rem"
                          sx={{ opacity: task.isDone ? 0.5 : 1, mt: 1 }}
                        >
                          {`Created At: ${task.createdAt?.format('DD/MM/YYYY')}`}
                        </Typography>
                      }
                    />

                    <IconButton
                      edge="end"
                      sx={{ color: '#eb0e2bff' }}
                      onClick={(event) => {
                        event.stopPropagation();
                        handleDelete(task.id);
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
