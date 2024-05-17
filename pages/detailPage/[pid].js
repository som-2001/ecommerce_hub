import { Navbar } from "@/components/Navbar";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import SellIcon from "@mui/icons-material/Sell";
import { MainCard } from "@/components/MainCard";
import { useEffect, useState } from "react";
import ShieldIcon from "@mui/icons-material/Shield";
import { Footer } from "@/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setBody, storeId } from "@/Redux/slice";
import { productDetailDesc, productDetailWithLimit } from "@/api/functions/Product.api";
import { useQuery } from "react-query";
import FAQ from "@/components/FAQ";
import { useRouter } from "next/router";

export default function detailPage({ result }) {
  const [result1, setResult1] = useState([]);
  const [buttonTxt,setButtonTxt]=useState();
  const { id } = useSelector((state) => state.ecom);
  const dispatch = useDispatch();
  const router=useRouter();

  useEffect(() => {
    id?.includes(Number(localStorage.getItem('pid')))?setButtonTxt('Added to cart'):setButtonTxt('Add to cart');

  }, [id,result.id]);

  useQuery(["products"], productDetailDesc, {
    onSuccess: (data) => {
      setResult1(data);
    },
  });

  const addtoCart = () => {
    if(!id?.includes(result?.id)){
    dispatch(
      setBody({
        id: result.id,
        price: result.price,
        rating:{
          rate: result.rating.rate
        },
        title: result.title,
        image: result.image,
        count:1
      })
    );
    setButtonTxt('Added to cart');
   
  }else{
    alert('already in cart')
  }
  };
  return (
    <div>
      <Navbar />
      <div className="detailPage">
        <Grid container className="lg:px-28 px-6 sm:px-10 md:px-24" spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            style={{ justifyContent: "center" }}
          >
            <img
              src={result.image}
              alt=""
              className="lg:h-[80vh] h-[60vh]"
              style={{
                display: "fixed",
                width: "100%",
                objectFit: "contain",
                top: "6%",
                marginTop: "5px",
              }}
            />
            <Box style={{ textAlign: "-webkit-center" }}>
              
              <Button
                id={buttonTxt!=='Added to cart' ? 'button':''}
                variant="contained"
                style={{
                  marginTop: "15px",
                  height: "auto",
                  marginRight: "5px",
                  borderRadius: "25px",
                  fontSize: "1rem",
                }}
                onClick={(e) => {
                  addtoCart(result.id);
                }}
              >
                {buttonTxt}
              </Button>
              <Button
               id="button"
                variant="contained"
                style={{
                  marginTop: "15px",
                  width: { lg: "20%", md: "20%", sm: "20%", xs: "50%" },
                  height: "auto",
                  borderRadius: "25px",
                  fontSize: "1rem",
                 
                }}
                onClick={(e)=>router.push(`/buy/${result.id}`)}
              >
                Buy now
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="mt-16"
            sx={{
              height: { lg: "90%", sm: "100%", md: "100%", xs: "100%" },
              overflowY: {
                lg: "scroll",
                md: "hidden",
                sm: "hidden",
                xs: "hidden",
              },
              overflowX: "hidden",
            }}
          >
            <Box>
              <Typography variant="p" className="text-2xl">
                {result.title}
              </Typography>
            </Box>
            <Box style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
              <Stack direction="row" spacing={1}>
                <Chip
                  icon={<StarIcon style={{ color: "yellowgreen" }} />}
                  label={result?.rating?.rate}
                />
              </Stack>
              <Typography variant="p" color="secondary">
                {" "}
                {result?.rating?.rate} Ratings & {result?.rating?.count} Reviews
              </Typography>
            </Box>
            <Box>
              <Typography variant="p" color="Primary">
                Available offers
              </Typography>
              <Box variant="p" color="Primary">
                <SellIcon style={{ color: "green" }} /> Bank Offer 5% Cashback
                on Flipkart Axis Bank CardT&C
              </Box>
              <Box variant="p" color="Primary">
                <SellIcon style={{ color: "green" }} /> Bank Offer Get $5
                instant discount on first Flipkart UPI txn on
              </Box>
              <Box variant="p" color="Primary">
                <SellIcon style={{ color: "green" }} /> FreebieFlat $10 off on
                Cleartrip hotels booking along with 300 supercoins on bookingT&C
              </Box>
              <Box variant="p" color="Primary">
                <SellIcon style={{ color: "green" }} /> Special PriceGet extra
                $7 off (price inclusive of cashback/coupon)T&C
              </Box>
            </Box>
            <Box
              style={{ display: "flex", alignItems: "baseline", gap: "15px" }}
            >
              <Typography variant="span" color="Primary">
                Delivery
              </Typography>
              <TextField
                id="standard-basic"
                label="Enter Delivery Address"
                variant="standard"
              />
            </Box>
            <Box>
              <Typography variant="p">$: {result.price}</Typography>
            </Box>
            <Box className="mt-5">
              <Typography variant="p">
                Description: {result.description}
              </Typography>
            </Box>
            <Box>
              <Typography variant="p">Category: {result.category}</Typography>
            </Box>

            <Box style={{ border: "1px solid black" }} className="mt-5">
              <Grid container spacing={2} className="p-3">
                <Grid item xs={6} md={6} lg={6} sm={6}>
                  <p
                    style={{
                      textAlign: "start",
                      fontSize: "1.3rem",
                      width: "100vw",
                    }}
                  >
                    Ratings & Reviews
                  </p>
                </Grid>
              </Grid>
              <Divider />
              <Box className="p-5">
                <Box className="m-2">
                  <Typography variant="p">
                    Best value for money. Based on price Performance -5/5 Back
                    Camera-3/5 Front camera-2.5/5 Battery -4.5/5 Charging-3/5
                    Display-4.5/5 Software-2/5( bloatware) Speed-4/5 Design-4/5
                  </Typography>
                </Box>
                <Divider />
                <Box>
                  <Typography variant="p">
                    Best value for money. Based on price Performance -5/5 Back
                    Camera-3/5 Front camera-2.5/5 Battery -4.5/5 Charging-3/5
                    Display-4.5/5 Software-2/5( bloatware) Speed-4/5 Design-4/5
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Typography
              variant="p"
              className="text-lg mt-10"
            >
              <ShieldIcon
                style={{ color: "yellowgreen", fontSize: "2.0rem" }}
              />
              Safe and Secure Payments.Easy returns.100% Authentic products.
            </Typography>
          </Grid>
        </Grid>
        <Box className='mb-3 mt-3'>
          <FAQ/>
        </Box>
        <Box className="lg:ml-5 mb-5 mt-5">
          <Typography variant="p" className="text-2xl mt-2">You might be interested in</Typography>
          <Grid
            container
            className="lg:p-28 p-1 sm:p-10 md:p-24"
            spacing={2}
            textAlign="-webkit-center"
          >
            {result1 &&
              result1?.slice(0, 6)?.map((data, index) => (
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <MainCard key={index} item={data} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const pid = context.params.pid;
    const result = await productDetailWithLimit(pid)
  
    return {
      props: { result },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { result: {} },
    };
  }
}
