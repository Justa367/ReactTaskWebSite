import { Stack } from '@mui/material';
import { AddTaskForm } from '../add-task-form/add-task-form';
import { SearchAndFilterForm } from '../search-and-filters/search-and-filter-form';
import { QuickFilterForm } from '../quick-filters/quick-filter-form';
import { DisplayTaskCard } from '../display-tasks/display-task-form';
import { ProgressOverviewForm } from '../prorgress-overview/progess-overview-form';

export default function HomePage() {
  return (
    <Stack spacing={4}>
      <AddTaskForm />
      <SearchAndFilterForm />
      <QuickFilterForm />
      <DisplayTaskCard />
      <ProgressOverviewForm />
    </Stack>
  );
}
