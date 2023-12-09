import React from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Stack, Typography } from "@mui/material/";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useTheme } from "@mui/material";
export default function Profile() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    handleClick();
  };

  const currencies = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      value: "User",
      label: "User",
    },
  ];

  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const regNumber = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const theme = useTheme();

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack mb={5}>
        <Typography
          variant="body"
          sx={{ fontSize: 30 }}
          color={theme.palette.primary.main}
        >
          CREATE USER
        </Typography>

        <Typography variant="body" sx={{ fontSize: 15 }}>
          Create a New User Profile
        </Typography>
      </Stack>

      <Stack direction="row" spacing={3}>
        <TextField
          helperText={
            errors.firstName ? "This Field is required & min 3 cahracter" : null
          }
          error={errors.firstName}
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flexGrow: 1 }}
          label="First Name"
          variant="filled"
        />

        <TextField
          sx={{ flexGrow: 1 }}
          label="Last Name"
          variant="filled"
          {...register("lastName", { required: true, minLength: 3 })}
          error={errors.lastName}
          helperText={
            errors.lastName ? "This Field is required & min 3 cahracter" : null
          }
        />
      </Stack>
      <TextField
        label="Email"
        variant="filled"
        {...register("email", { required: true, pattern: regEmail })}
        error={errors.email}
        helperText={
          errors.email ? "Please provide a valid email address" : null
        }
      />
      <TextField
        label="Contact Number"
        variant="filled"
        {...register("number", { required: true, pattern: regNumber })}
        error={Boolean(errors.number)}
        helperText={
          Boolean(errors.number) ? "Please provide a valid Phone number" : null
        }
      />
      <TextField label="Adress 1" variant="filled" />
      <TextField label="adress 2" variant="filled" />
      <TextField label="adress 2" variant="filled" />

      <TextField
        id="filled-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ ml: "auto" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
