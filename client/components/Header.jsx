import React, { useState, useEffect } from "react";
import logo from "../assets/v_logo.png";
import {
  AppBar,
  Box,
  Button,
  Modal,
  Typography,
  TextField,
} from "@mui/material";

const Header = (props) => {
  // const [synced, setSynced] = useState(false)
  const [loginAppear, setLoginAppear] = useState(false);
  const [registerAppear, setRegisterAppear] = useState(false);

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = data;

  const changeHandler = (e) => {
    console.log("handler, ", e);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    const body = {
      username,
      password,
    };
    e.preventDefault();
    setData({
      username: "",
      password: "",
    });
    console.log("About to fetch sync");
    fetch("/api/sync", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => {
        console.log("fetched successfully to /api/sync");
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <AppBar
      sx={{
        height: "5%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        background: "lightgrey",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "20%",
          height: "90%",
          display: "flex",
          paddingLeft: "10px",
        }}
      >
        <img src={logo} width="50px" height="96%"></img>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: "10px",
          gap: "10px",
        }}
        small
      >
        <Button
          variant="contained"
          sx={{
            height: "80%",
          }}
          onClick={() => {
            setLoginAppear(true);
          }}
        >
          LOGIN
        </Button>

        <Button
          variant="contained"
          sx={{
            height: "80%",
            backgroundColor: "secondary.main",
          }}
          onClick={() => {
            setRegisterAppear(true);
          }}
        >
          REGISTER
        </Button>
      </Box>
      {loginAppear && (
        <Modal sx={{
          display: "flex",
          justifyContent: "center",
          margin: "50px"
        }}
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                height: "70%",
                width: "70%",
                backgroundColor: "white",
                padding: "50px",
                borderRadius: "10px",
              }}
            >
              <Box>
                <img src={logo} width="100px" height="100px"></img>
              </Box>
              <Typography sx={{ color: "#2d2d2d", padding: "30px" }}
                id="welcome-text" variant="h6" component="h2">
                Welcome back
              </Typography>
              <TextField id="username" placeholder="username" 
               sx={{ 
                backgroundColor: "#7068f4", 
                borderRadius: "3px",  
                '&:hover': {
                  backgroundColor: '#ececec'} 
               }}>
              </TextField>
              <br></br>
              <TextField id="password" placeholder="password" 
                sx={{ 
                  backgroundColor: "#7068f4", 
                  borderRadius: "3px",  
                  '&:hover': {
                    backgroundColor: '#ececec'} 
                  }}>
              </TextField>
              <br></br>
              <Button sx={{
                backgroundColor: "#ffd94a",
                borderRadius: "3px",
                padding:"10px"
              }}
                onClick={() => {
                  setLoginAppear(false);
            }}>Login</Button>
          </Box>
        </Modal>
      )}

      {registerAppear && (
        <Modal sx={{
          display: "flex",
          justifyContent: "center",
          margin: "50px"
        }}
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                height: "90%",
                width: "70%",
                backgroundColor: "white",
                padding: "50px",
                borderRadius: "7px",
              }}
            >
              <Box>
                <img src={logo} width="100px" height="100px"></img>
              </Box>
              <Typography sx={{ color: "#2d2d2d", padding: "30px" }}
                id="welcome-text" variant="h6" component="h2">
                Create new account
              </Typography>
              <TextField id="full-name" placeholder="Full name" 
               sx={{ 
                backgroundColor: "#7068f4", 
                borderRadius: "3px",
                '&:hover': {
                  backgroundColor: '#ececec'} 
               }}>
              </TextField>
              <br></br>
              <TextField id="username" placeholder="username" 
               sx={{ 
                backgroundColor: "#7068f4", 
                borderRadius: "3px",
                '&:hover': {
                  backgroundColor: '#ececec'} 
               }}>
              </TextField>
              <br></br>
              <TextField id="password" placeholder="password" 
                sx={{ 
                  backgroundColor: "#7068f4",
                  borderRadius: "3px",  
                  '&:hover': {
                    backgroundColor: '#ececec'} 
                  }}>
              </TextField>
              <br></br>
              <Button sx={{
                backgroundColor: "#ffd94a",
                borderRadius: "3px",
                padding:"10px"
              }}
                onClick={() => {
                  setRegisterAppear(false);
            }}>Register</Button>
            <br></br>
            <Button sx={{
                backgroundColor: "#ffd94a",
                borderRadius: "3px",
                padding:"10px"
              }}
                onClick={() => {
                  setRegisterAppear(false);
            }}>Google</Button>
          </Box>
        </Modal>
      )}
    </AppBar>
  );
};

export default Header;
