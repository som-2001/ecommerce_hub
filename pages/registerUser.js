import {
    Box,
    Button,
    Divider,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import GoogleIcon from "@mui/icons-material/Google";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import { useForm } from "react-hook-form";
  import * as yup from "yup";
  import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
  
  function registerUser() {
    const [responsive, setResponsive] = useState(false); 
  
    useEffect(() => {

      const resize = () => {
        setResponsive(window.innerWidth < 900 ? true : false);
      };

      resize();
      
      window.addEventListener("resize", resize);
  
      return () => {
        window.removeEventListener("resize", resize);
      };
    }, []);
    
    const schema = yup.object().shape({
      firstname: yup.string().required("firstname is required"),
      lastname: yup.string().required("lastname is required"),
      email: yup.string().email("email is invalid").required("email is required"),
      password: yup
        .string()
        .min(8, "password must be at least 8 characters")
        .max(15, "password cannot exceed 24 characters")
        .required("password is required"),
    });
  
    const {
      reset,
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
  
    const onSubmit = async (data) => {
      console.log(data);
      reset();
    };
  
    return (
      <div className="App">
        {responsive && (
          <div className="parentdiv_small_screen">
            <img
              src="../images/logo.png"
              alt=""
              style={{ height: "auto", width: "70px" }}
            />
            <div className="children1_small_screen">
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={9}
                  lg={9}
                  className="parentGrid_small_screen"
                >
                  <h2 className="mb-3 mt-20 text-xl text-purple-600" style={{marginRight:"28%"}}> Sign up</h2>
  
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid
                      container
                      spacing={1}
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <Grid item xs={12} sm={3} md={3} lg={3}>
                        <TextField
                          type="text"
                          label="first name *"
                          placeholder="john"
                          
                          sx={{
                            width: {
                              md: "100%",
                              lg: "100%",
                              sm: "100%",
                              xs: "80%",
                            },
                          }}
                          {...register("firstname")}
                          helperText={errors.firstname?.message}
                          FormHelperTextProps={{ sx: { color: 'red' } }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={3} md={3} lg={3}>
                        <TextField
                          type="text"
                          label="last name *"
                          placeholder="doe"
                          
                          sx={{
                            width: {
                              md: "100%",
                              lg: "100%",
                              sm: "100%",
                              xs: "80%",
                            },
                          }}
                          {...register("lastname")}
                          helperText={errors.lastname?.message}
                          FormHelperTextProps={{ sx: { color: 'red' } }}
                        />
                      </Grid>
                    </Grid>
                    <Box>
                      <TextField
                        type="text"
                        label="Email *"
                        placeholder="johndoe@gmail.com"
                        
                        sx={{
                          width: { lg: "50%", md: "50%", sm: "50%", xs: "80%" },
                          marginTop: "12px",
                        }}
                        {...register("email")}
                        helperText={errors.email?.message}
                        FormHelperTextProps={{ sx: { color: 'red' } }}
                      />
                    </Box>
                    <Box>
                      <TextField
                        type="password"
                        label="password *"
                        placeholder="password..."
                        
                        sx={{
                          width: { lg: "50%", md: "50%", sm: "50%", xs: "80%" },
                          marginBottom: "10px",
                          marginTop: "10px",
                        }}
                        {...register("password")}
                        helperText={errors.password?.message}
                        FormHelperTextProps={{ sx: { color: 'red' } }}
                      />
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        width: { xs: "85%", sm: "50%" },
                        backgroundColor: "black",
                        textAlign: "start",
                      }}
                      type="submit"
                    >
                      Create Account
                    </Button>
                  </form>
  
                  <p className="text-sm mt-1">
                    Already have an account?{" "}
                    <Link style={{ color: "violet" }} href="/loginUser"> Login</Link>
                  </p>
  
                
                </Grid>
              </Grid>
            </div>
          </div>
        )}
        {!responsive && (
          <Grid container style={{ height: "100vh", backgroundColor: "#6c42ec" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              style={{ backgroundColor: "#6c42ec" }}
            >
              <div style={{ color: "white" }}>
                <h1 className="largeScreen_typography"> Stay on top of</h1>
                <h1 className="largeScreen_typography1">time tracking</h1>
  
                <img
                  src="../images/register_page_icon.png"
                  className="img"
                  alt=""
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={9}
              lg={9}
              className="parentGrid_largeScreen"
            >
            
                <h2 className=" mb-7 mt-20 text-3xl text-purple-600" style={{marginRight:"30%"}}>
                Create Account
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
              
                <Grid
                  container
                  spacing={1}
                  style={{ textAlign: "center", justifyContent: "center" }}
                  
                >
                 
                  <Grid item xs={12} sm={12} md={3} lg={3}>
                  
                    <TextField
                      type="text"
                      label="first name *"
                      placeholder="john"
                      
                      sx={{
                        width: "100%",
                      }}
                      {...register("firstname")}
                      helperText={errors?.firstname?.message}
                      FormHelperTextProps={{ sx: { color: 'red' } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextField
                      type="text"
                      label="last name *"
                      placeholder="doe"
                      
                      sx={{
                        width: "100%",
                      }}
                      {...register("lastname")}
                      helperText={errors?.lastname?.message}
                      FormHelperTextProps={{ sx: { color: 'red' } }}
                    />
                  </Grid>
                </Grid>
                <Box>
                  <TextField
                    type="text"
                    label="Email *"
                    placeholder="johndoe@gmail.com"
                  
                    sx={{
                      width: "50%",
                      marginTop: "12px",
                    }}
                    {...register("email")}
                    helperText={errors?.email?.message}
                    FormHelperTextProps={{ sx: { color: 'red' } }}
                  />
                </Box>
                <Box>
                  <TextField
                    type="password"
                    label="password *"
                    placeholder="password..."
                   
                    sx={{
                      width: "50%",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                    {...register("password")}
                    helperText={errors?.password?.message}
                    FormHelperTextProps={{ sx: { color: 'red' } }}
                  />
                </Box>
                <Button
                  variant="contained"
                  id="button"
                  style={{
                    width: "50%",
                    backgroundColor: "black",
                    textAlign: "start",
                  }}
                  type="submit"
                >
                  Sign up
                </Button>
              </form>
  
              <p className="text-sm mt-5 mb-5 text-purple-600">
                Already have an account?{" "}
                <Link className="text-violet-700" href="/loginUser"> Login</Link>
              </p>
  
            
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
  
  export default registerUser;
  