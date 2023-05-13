import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Box, InputLabel } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";
import HomeIcon from "@material-ui/icons/Home";
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "linear-gradient(to right, #512da8, #711e72)",
      flexGrow: 1,
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    gridStyle: {
      position: "absolute",
      margin: "10px",
    },
    cardStyle: {
      background: "#fff",
      maxWidth: "451px",
      borderRadius: "0.25rem",
      border: "1px solid rgba(0,0,0,.125)",
    },
    checkstyle: {
      color: "rgba(0,0,0,.25)",
      "&.MuiCheckbox-colorSecondary.Mui-checked": {
        color: "#FB3E3E",
      },
    },
    rememberStyle: {
      color: "#212529",
      fontSize: "15px",
      fontFamily: '"Rubik", sans-serif',
    },

    linkStyle: {
      marginTop: "24px",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      fontSize: "16px",
      fontFamily: '"Rubik", sans-serif',
      color: "#272a33",
    },

    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#fff",
      padding:'1rem'
    },

    homeStyle: {
      "@media (max-width:574px)": {
        display: "none",
      },
    },

    formStyle: {
      padding: "1rem",
    },
    inputstyle: {
      color: "#212529",
      fontSize: "15px",
      fontFamily: '"Rubik", sans-serif',
    },
    textfieldStyle: {
      fontSize: "15px",
      fontFamily: '"Rubik", sans-serif',
      marginBottom: "14px",
      "& .MuiOutlinedInput-input": {
        padding: "13px 14px",
      },
    },
    btnStyles: {
      marginTop: "16px",
      padding: "10px 20px",
      "& .MuiButton-root": {
        textTransformation: "none",
      },
    },

    alertStyle: {
      textAlign: "center",
      fontSize: "14px",
      borderRadius: "0.25rem",
      padding: "16px",
      marginTop: "16px",
    },

    headingStyle: {
      color: "#272a33",
      fontSize: "24px",
      fontWeight: 700,
      fontFamily: '"Poppins", sans-serif',
      lineHeight: "56px",
      paddingTop: "4px",
    },

    linkstyleSign: {
      marginTop: "24px",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      fontFamily: '"Rubik", sans-serif',
      color: "#272a33",
    },
  })
);

const ContentText = styled(Typography)({
  color: "#95a0ab",
  fontSize: "14.4px",
  fontFamily: '"Rubik", sans-serif',
  lineHeight: "24px",
  paddingBottom: "16px",
});

export default function Login() {
  const classes = useStyles();
  const [data, setData] = useState([
    {
      type: "signUp",
      heading: "DORSIN",
      alertDetail: "",
      subHeading: " Sign up for a new account .",
      buttonName: "Sign In",
      switchTo: " Sign in ",
      switchSubhead: "Don't have an account ? ",
      details: [
        {
          inputField: "First Name",
          placeHolder: "First Name",
        },
        {
          inputField: "Email ",
          placeHolder: "Enter Email",
        },
        {
          inputField: "Password",
          placeHolder: "Enter password",
        },
      ],
    },
  ]);

  const loginData = [
    {
      type: "login",
      heading: "DORSIN",
      alertDetail: "",
      subHeading: " Sign in to continue to Dorsin",
      buttonName: "Login In",
      switchTo: "Forgot your password?",
      switchSubhead: "",
      details: [
        {
          inputField: "Username",
          placeHolder: "Enter username",
        },
        {
          inputField: "Password",
          placeHolder: "Enter password",
        },
      ],
    },
  ];

  const resetData = [
    {
      type: "reset",
      heading: "DORSIN",
      alertDetail:
        "Enter your email address and we'll send you an email with instructions to reset your password.",
      subHeading: "Reset Password",
      buttonName: "Reset your Password",
      switchTo: "",
      switchSubhead: "",
      details: [
        {
          inputField: "Email ",
          placeHolder: "Enter Email",
        },
      ],
    },
  ];

  const resetClick = () => {
    setData(resetData);
  };

  const loginClick = () => {
    setData(loginData);
  };

  return (
    <>
      <Grid className={classes.root}>
        <Box
          style={{ position: "absolute", top: "18px", right: "28px" }}
          className={classes.homeStyle}
        >
          <Link style={{ textDecoration: "none" }} variant="body1" href="#">
            <HomeIcon style={{ color: "white" }} fontSize="large" />
          </Link>
        </Box>

        <Grid className={classes.gridStyle}>
          <Container className={classes.cardStyle}>
            <div className={classes.paper}>
              <Link
                href="#"
                style={{ textDecoration: "none" }}
                variant="body1"
                className={classes.headingStyle}
              >
                {data[0].heading}
              </Link>
              <ContentText>{data[0].subHeading}</ContentText>
              {data[0].type === "reset" && (
                <>
                  <Alert
                    severity="warning"
                    icon={false}
                    className={classes.alertStyle}
                  >
                    {data[0].alertDetail}
                  </Alert>
                </>
              )}
              <form noValidate className={classes.formStyle}>
                {data[0].details &&
                  data[0].details.map((item, index) => {
                    return (
                      <>
                        <InputLabel
                          htmlFor="my-input"
                          className={classes.inputstyle}
                        >
                          {item.inputField}
                        </InputLabel>
                        <TextField
                          className={classes.textfieldStyle}
                          placeholder={item.placeHolder}
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name={item.inputField}
                          type={item.inputField}
                          id={item.inputField}
                          required
                        />
                      </>
                    );
                  })}
                {data[0].type === "login" || data[0].type === "signUp" ? (
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="remember"
                        className={classes.checkstyle}
                      />
                    }
                    label="Remember me"
                    className={classes.rememberStyle}
                  />
                ) : (
                  <></>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#FB3E3E", color: "white" }}
                  className={classes.btnStyles}
                >
                  {data[0].buttonName}
                </Button>
                <Grid container>
                  <Grid item xs>
                    {data[0].type === "login" && (
                      <Link
                        style={{ textDecoration: "none" }}
                        variant="body2"
                        className={classes.linkStyle}
                        onClick={() => resetClick()}
                        href="#"
                      >
                        <LockIcon
                          fontSize="small"
                          style={{ color: "#272A33" }}
                        />{" "}
                        {data[0].switchTo}
                      </Link>
                    )}
                    {data[0].type === "signUp" && (
                      <>
                        <Typography className={classes.linkstyleSign}>
                          {data[0].switchSubhead}
                          <Link
                            style={{
                              textDecoration: "none",
                              color: "rgb(251, 62, 62)",
                            }}
                            href="#"
                            variant="body2"
                            className={classes.linkstyleSign}
                            onClick={() => loginClick()}
                          >
                            {data[0].switchTo}
                          </Link>
                        </Typography>
                      </>
                    )}
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}