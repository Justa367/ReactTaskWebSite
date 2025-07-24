import { Stack, styled } from '@mui/material';
import Button from '@mui/material/Button';
import { useTasksState } from '../task-context/task-context';

// //1. sposób
// const FilterButtonStyle = {
//   width: 150,
//   color: '#1e3799',
//   borderColor: '#1e3799',
//   backgroundColor: '#ffffff',
//   height: 50,
//   fontWeight: 'bold',
//   borderRadius: 20,
//   '&:hover': {
//     backgroundColor: '#e6f0ff',
//     borderColor: '#1e3799',
//   },
// };

//2. sposób - używajmy tego sposobu, bo jest bardziej czytelny
const FilterButton = styled(Button)`
  width: 150px;
  color: #1e3799;
  border-color: #1e3799;
  background-color: #ffffff;
  height: 50px;
  font-weight: bold;
  border-radius: 20px;

  &:hover {
    background-color: #e6f0ff;
    border-color: #1e3799;
  }

  &.MuiButton-contained {
    background-color: #1e3799;
    color: #ffffff;

    &:hover {
      background-color: #154a86;
      border-color: #154a86;
    }
  }
`;

export const QuickFilterButtons = () => {
  const { filteredTasks, filters, setFilters } = useTasksState();

  const allCount = filteredTasks.length;
  const activeCount = filteredTasks.filter((task) => !task.isDone).length;
  const completedCount = filteredTasks.filter((task) => task.isDone).length;

  const handleFilterChange = (value: boolean | null) => () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      showDone: value,
    }));
  };
  return (
    <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
      <FilterButton
        variant={filters.showDone === null ? 'contained' : 'outlined'}
        disableElevation
        onClick={handleFilterChange(null)}
      >
        All ({allCount})
      </FilterButton>
      <FilterButton
        variant={filters.showDone === false ? 'contained' : 'outlined'}
        disableElevation
        onClick={handleFilterChange(false)}
      >
        Active ({activeCount})
      </FilterButton>
      <FilterButton
        variant={filters.showDone === true ? 'contained' : 'outlined'}
        disableElevation
        onClick={handleFilterChange(true)}
      >
        Completed ({completedCount})
      </FilterButton>
    </Stack>
  );
};
