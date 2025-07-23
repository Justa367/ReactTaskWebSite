import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Divider,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SearchInput } from './search-input';
import { useTasksState } from '../task-context/task-context';

export const SearchAndFilterForm = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const { filters, setFilters } = useTasksState();

  return (
    <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
      <CardContent sx={{ p: 0 }}>
        <Stack spacing={4}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#1e3799"
              gutterBottom
              sx={{ flexGrow: 1 }}
            >
              Search & Filter Tasks
            </Typography>

            <Button
              variant="outlined"
              startIcon={<FilterListIcon />}
              endIcon={showAdvanced ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              sx={{ color: '#1e3799', borderColor: '#1e3799' }}
              onClick={() => setShowAdvanced((prev) => !prev)}
            >
              Advanced
            </Button>
          </Stack>

          <SearchInput />

          <Collapse in={showAdvanced}>
            <Divider sx={{ mb: 2 }} />
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
              }}
            >
              <TextField
                select
                label="Priority"
                value={filters.priority}
                onChange={(event) => {
                  const value = event.target.value as '' | 'low' | 'medium' | 'high';
                  setFilters((prev) => ({
                    ...prev,
                    priority: value,
                  }));
                }}
                sx={{ minWidth: 180 }}
              >
                <MenuItem value="">All Priorities</MenuItem>
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </TextField>

              <DatePicker
                label="Created Before"
                value={filters.createdBefore ?? null}
                onChange={(newValue) => {
                  setFilters((prev) => ({
                    ...prev,
                    createdBefore: newValue,
                  }));
                }}
              />
              <DatePicker
                label="Created After"
                value={filters.createdAfter ?? null}
                onChange={(newValue) => {
                  setFilters((prev) => ({
                    ...prev,
                    createdAfter: newValue,
                  }));
                }}
              />
              <MobileDateRangePicker
                value={filters.dueDateRange || [null, null]}
                onChange={(newRange) => {
                  setFilters((prev) => ({
                    ...prev,
                    dueDateRange: newRange,
                  }));
                }}
              />
            </Box>
          </Collapse>

          {/*{showAdvanced && (*/}
          {/*  <>*/}
          {/*    <Divider />*/}
          {/*    <Box*/}
          {/*      sx={{*/}
          {/*        display: 'flex',*/}
          {/*        flexWrap: 'wrap',*/}
          {/*        gap: 2,*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <TextField*/}
          {/*        select*/}
          {/*        label="Priority"*/}
          {/*        value={filters.priority}*/}
          {/*        onChange={(event) => {*/}
          {/*          const value = event.target.value as '' | 'low' | 'medium' | 'high';*/}
          {/*          setFilters((prev) => ({*/}
          {/*            ...prev,*/}
          {/*            priority: value,*/}
          {/*          }));*/}
          {/*        }}*/}
          {/*        sx={{ minWidth: 180 }}*/}
          {/*      >*/}
          {/*        <MenuItem value="">All Priorities</MenuItem>*/}
          {/*        <MenuItem value="low">Low</MenuItem>*/}
          {/*        <MenuItem value="medium">Medium</MenuItem>*/}
          {/*        <MenuItem value="high">High</MenuItem>*/}
          {/*      </TextField>*/}

          {/*      <DatePicker*/}
          {/*        label="Created after"*/}
          {/*        value={filters.createdAfter ?? null}*/}
          {/*        onChange={(newValue) => {*/}
          {/*          setFilters((prev) => ({*/}
          {/*            ...prev,*/}
          {/*            createdAfter: newValue,*/}
          {/*          }));*/}
          {/*        }}*/}
          {/*      />*/}
          {/*      <DatePicker label="Created before" />*/}
          {/*      <MobileDateRangePicker label="Due to range" />*/}
          {/*    </Box>*/}
          {/*  </>*/}
          {/*)}*/}
        </Stack>
      </CardContent>
    </Card>
  );
};
