import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, getDocuments, increment } from '../context/actions/campaign.action';

function Campaign() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(getDocuments({}, (result) => {
            alert(result.message)
        }));
    };



    return (
        <Box display="flex" justifyContent="center" alignItems="center" margin="20px" minHeight={200}>
            <Card>
                <CardContent>
                    <Typography variant="h6" component="div">
                        Create Campaign
                    </Typography>
                    {/* <form onSubmit={handleIncrement}> */}
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
                    <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                    {/* </form> */}
                </CardContent>
            </Card>
        </Box>
    );
}

export default Campaign;
