import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#black", // Cambia el color aquí
    height: "100vh",
    padding: "2rem",
  },
  heading: {
    color: "#BB60E1", // Cambia el color aquí
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "2rem",
  },
  contactInfo: {
    color: "#fff", // Cambia el color aquí
    textAlign: "center",
    marginBottom: "2rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "#fff", // Cambia el color aquí
    borderColor: "#BB60E1", // Cambia el color aquí
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#fff", // Cambia el color aquí
    },
    "& label": {
      color: "#fff", // Cambia el color aquí
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#BB60E1", // Cambia el color aquí
      },
      "&:hover fieldset": {
        borderColor: "#BB60E1", // Cambia el color aquí
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "#ffb6c1", // Cambia el color aquí
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="div" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            CONTACTO
          </Typography>
          
          {/* Información de contacto */}
          <Typography variant="body1" className={classes.contactInfo}>
            Email: jsescobar2@espe.edu.ec | Teléfono: +593 99 505 9684
          </Typography>

          {/* Formulario de contacto */}
          <InputField
            fullWidth={true}
            label="Nombre"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
            fullWidth={true}
            label="Mensaje"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
          >
            Contacto
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
