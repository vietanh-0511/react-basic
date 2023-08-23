import { Autocomplete, Box, Chip, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";

function UserDetail() {

    const location = useLocation()

    const [user, setUser] =  useState(location.state.user ?? {})
    const [roles, setRoles] =  useState([])

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
        console.log(user);
        axios.get('roles').then(response =>{
            console.log(response.data.data);
            setRoles(response.data.data)
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    const onChangeHandle = (e) => {
        console.log('e of role', e.target.value);
        const {
            target: { value },
          } = e;

          setUser(
            {
                target: { value },
              } = e
            // On autofill we get a stringified value.
            // typeof value === 'string' ? value.split(',') : value,
          );
        //   console.log(user);
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
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                            <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={user.role_ids}
                            onChange={(e) => onChangeHandle(e)}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    console.log(value),
                                    <Chip key={value} label={value} />
                                ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                            >
                            {roles.map((role, index) => (
                                <MenuItem
                                key={index}
                                value={role.id}
                                >
                                {role.name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                        <TextField
                        required
                        id="standard-required"
                        label="Date Joined"
                        value={user.join_date}
                        variant="standard"
                        onChange={(e) => setUser({...user, join_date: e.target.value})}
                        />
                    </div>
                </Box>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default UserDetail;