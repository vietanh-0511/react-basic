import { Autocomplete, Box, Chip, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

function UserDetail() {

    const location = useLocation()

    const [user, setUser] =  useState(location.state.user ?? {})
    const [roles, setRoles] =  useState([])
    const [selectedRoles, setSelectedRoles] = useState([])

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 }
      ];

    useEffect(() => {
         axios.get('roles').then(response =>{
            setRoles(response.data.data)
        })
        
    }, [])

    useEffect(() => {
        const selectedRoles = roles.filter((role) => {
            return user.role_ids.includes(role.id)
        })
        setSelectedRoles(selectedRoles)
        
    }, [roles])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user)
        user.roles = selectedRoles.map(role => role.id)
        axios.post(`/users/${user.id}`, user).then((response) => {
            console.log(response);
        })
    }

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };

    return(
        <>
            UserDetail
            <form onSubmit={(event) => handleSubmit(event)}>
                <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                    
                    <div>
                        <TextField
                        disabled
                        id="standard-read-only-input"
                        label="Employee ID"
                        value={user.employee_id}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="standard"
                        />
                        <TextField
                        required
                        id="standard-required"
                        label="Name"
                        value={user.name}
                        variant="standard"
                        onChange={(e) => setUser({...user, name: e.target.value})}
                        />
                        <TextField
                        required
                        id="standard-required"
                        label="Email"
                        value={user.email}
                        variant="standard"
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        />
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={user.status}
                                onChange={(e) => setUser({...user, status: e.target.value})}
                            >
                                <FormControlLabel value="0" control={<Radio />} label="Intern" />
                                <FormControlLabel value="1" control={<Radio />} label="Probation" />
                                <FormControlLabel value="2" control={<Radio />} label="Official" />
                                <FormControlLabel value="3" control={<Radio />} label="Left" />
                                <FormControlLabel value="4" control={<Radio />} label="Ex Official" />
                                <FormControlLabel value="5" control={<Radio />} label="RM Official" />
                            </RadioGroup>
                        </FormControl>
                        <Stack spacing={3} sx={{ width: 500 }}>
                            <Autocomplete
                                multiple
                                id="tags-standard"
                                options={roles}
                                getOptionLabel={(option) => option.name}
                                value={selectedRoles}
                                onChange={(event, newValue) => {
                                    setSelectedRoles(newValue);
                                }}
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    label="Multiple values"
                                    placeholder="Favorites"
                                />
                                )}
                            />
                        </Stack>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Controlled picker"
                                value={dayjs(user.join_date)}
                                onChange={(newValue) => setUser({...user, join_date: newValue})}
                            />
                        </LocalizationProvider>
                    </div>
                </Box>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default UserDetail;