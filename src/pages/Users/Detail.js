import {
  Autocomplete,
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

function UserDetail() {
  const location = useLocation();

  const [user, setUser] = useState(location?.state?.user ?? {});
  const [roles, setRoles] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);

  useEffect(() => {
    axios.get("roles").then((response) => {
      setRoles(response.data.data);
    });
  }, []);

  useEffect(() => {
    if (location?.state?.user) {
      const selectedRoles = roles.filter((role) => {
        return user.role_ids.includes(role.id);
      });
      setSelectedRoles(selectedRoles);
    }
  }, [roles, location?.state?.user, user.role_ids]);

  const handleSubmit = async () => {
    console.log(user);
    user.roles = selectedRoles.map((role) => role.id);
    const response = user?.id
      ? await axios.post(`/users/${user.id}`, user)
      : axios.post(`/users`, user);
    console.log(response);
  };

  const deleteUser = async (user) => {
    console.log(user.id);
    const response = await axios.post(`/users/delete`, user);
    console.log(response);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          UserDetail
        </Typography>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          {user?.id && (
            <FormControl>
              <FormLabel id="employee-id">Employee ID</FormLabel>
              <TextField
                disabled
                id="employee-id"
                value={user.employee_id}
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </FormControl>
          )}
          <FormControl fullWidth>
            <FormLabel id="name">Name</FormLabel>
            <TextField
              required
              id="name"
              value={user.name}
              variant="standard"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel id="email">Email</FormLabel>
            <TextField
              required
              id="email"
              value={user.email}
              variant="standard"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </FormControl>
          {!user?.id && (
            <FormControl fullWidth>
              <FormLabel id="password">Password</FormLabel>
              <TextField
                id="password"
                type="password"
                value={user.password}
                autoComplete="current-password"
                variant="standard"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </FormControl>
          )}
          <FormControl>
            <FormLabel id="gender">Status</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={user.status}
              onChange={(e) => setUser({ ...user, status: e.target.value })}
            >
              <FormControlLabel value="0" control={<Radio />} label="Intern" />
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Probation"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Official"
              />
              <FormControlLabel value="3" control={<Radio />} label="Left" />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="Ex Official"
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="RM Official"
              />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth>
            <FormLabel id="gender">Roles</FormLabel>
            <Stack spacing={3} fullWidth>
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
                    placeholder="Select Roles"
                  />
                )}
              />
            </Stack>
          </FormControl>
          <FormControl fullWidth>
            <FormLabel id="joined-date">Joined Date</FormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                slotProps={{ textField: { variant: "standard" } }}
                value={dayjs(user.join_date)}
                onChange={(newValue) =>
                  setUser({ ...user, join_date: newValue })
                }
              />
            </LocalizationProvider>
          </FormControl>
        </Box>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        {user?.id && (
          <Button
            variant="contained"
            onClick={() => {
              deleteUser(user);
            }}
          >
            Delete
          </Button>
        )}
      </Container>
    </>
  );
}

export default UserDetail;