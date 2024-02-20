import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#9048AF", // Cambia el color aquí
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#BBBBBB", // Cambia el color aquí
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #9048AF #9048AF", // Cambia el color aquí
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "#9048AF", // Cambia el color aquí
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#BB60E1", // Cambia el color aquí
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#BB60E1",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "#BBBBBB", // Cambia el color aquí
  },
  subtitle1: {
    color: "#fff", // Cambia el color aquí
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Experiencia Laboral
      </Typography>
      <Box component="div" className={classes.timeLine}>
        {/* Añade nuevas entradas para cada experiencia laboral */}
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Acerca de mí
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Juliana Escobar
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Estudiante de Ingeniería en TI - Universidad de las Fuerzas Armadas ESPE
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Tengo 22 años y soy originaria de Quito, Ecuador.
          </Typography>
        </Box>

        {/* Repite el bloque anterior para cada experiencia laboral */}
        {/* ... */}

        <Typography
          variant="h1"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Experiencia
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Desarrollo Web y Tecnologías
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            He acumulado conocimientos en una variedad de tecnologías, tales como Vue.js, React, Java, .NET, PHP, CSS, JS y HTML. Mi experiencia abarca tanto el desarrollo del frontend como del backend, participando en la creación de aplicaciones web dinámicas. He jugado un papel activo en la concepción y ejecución de soluciones tecnológicas eficientes, destacándome por mi capacidad para asimilar rápidamente nuevos conceptos y enfrentar desafíos complejos.
          </Typography>
        </Box>

        {/* ... */}
      </Box>
    </Box >
  );
};

export default Resume;
