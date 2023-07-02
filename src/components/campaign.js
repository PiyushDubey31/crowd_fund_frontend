import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';

function Campaign() {
  const handleSubmit = (event) => {
    // event.preventDefault();
    alert("hiii")
    // Handle form submission logic here
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" margin="20px" minHeight={200}>
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          Create Campaign
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Subject"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Description"
            variant="outlined"
            margin="normal"
            fullWidth
          />
           <TextField
            label="Account No"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
    </Box>
  );
}

export default Campaign;
