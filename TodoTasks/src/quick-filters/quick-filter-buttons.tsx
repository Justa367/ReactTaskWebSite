import { Stack, styled } from '@mui/material';
import Button from '@mui/material/Button';

//2. sposób - używajmy tego sposobu, bo jest bardziej czytelny
//TODO: podmienić resztę buttonów na ten styl - jeśli w sx jest wiecej niż 4
const FilterButton = styled(Button)`
    width: 150px;
    color: #1e3799;
    border-color: #1e3799;
    background-color: #ffffff;
    height: 50px;
    font-weight: bold;
    border-radius: 20px;
    '&:hover': {
        background-color: #e6f0ff;
        border-color: #1e3799;
    },
`;

export const QuickFilterButtons = () => {
  //1. sposób
  const buttonStyle = {
    width: 150,
    color: '#1e3799',
    borderColor: '#1e3799',
    backgroundColor: '#ffffff',
    height: 50,
    fontWeight: 'bold',
    borderRadius: 20,
    '&:hover': {
      backgroundColor: '#e6f0ff',
      borderColor: '#1e3799',
    },
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
      <Button variant="outlined" disableElevation sx={buttonStyle}>
        All
      </Button>
      <FilterButton variant="outlined" disableElevation>
        Active
      </FilterButton>
      <Button
        variant="outlined"
        disableElevation
        sx={{
          width: 150,
          color: '#1e3799',
          borderColor: '#1e3799',
          backgroundColor: '#ffffff',
          borderRadius: 20,
          fontWeight: 'bold',
          height: 50,
          '&:hover': {
            backgroundColor: '#e6f0ff',
            borderColor: '#1e3799',
          },
        }}
      >
        Completed
      </Button>
    </Stack>
  );
};
