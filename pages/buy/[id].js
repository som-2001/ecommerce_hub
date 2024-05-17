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
import {
  productDetailDesc,
  productDetailWithLimit,
} from "@/api/functions/Product.api";
import { useQuery } from "react-query";
import FAQ from "@/components/FAQ";
import { useRouter } from "next/router";

export default function detailPage({ result }) {
  
  const router = useRouter();

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
            className="justify-center"
          >
            <img
              src={result.image}
              alt=""
              className="lg:h-[80vh] h-[60vh] mt-5 w-full object-contain"
              style={{
                display: "fixed",
                top: "6%",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="lg:overflow-scroll overflow-hidden"
            sx={{
              height: { lg: "90%", sm: "100%", md: "100%", xs: "100%" },
              overflowX: "hidden",
              marginTop:"16px"
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

            <Box className="flex justify-between">
              <Typography variant="p" className="text-xl font-medium">
                Total Amount
              </Typography>
              <Typography variant="p" className="text-red-500">
                $: {result.price}
              </Typography>
            </Box>
            <Box className="mt-2">
              <Typography variant="p">
                Description: {result.description}
              </Typography>
            </Box>
            <Box>
              <Typography variant="p">Category: {result.category}</Typography>
            </Box>
            <Box>
              <Typography variant="p" className="font-bold">
                Deliver to:
              </Typography>
              <Box className="flex gap-2">
                <Typography variant="p" className="text-xl">
                  Someswar Gorai
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip label={"Home"} />
                </Stack>
              </Box>
              <Box>
                <Typography variant="p">
                  Near State Bank,Katjuridanga,bankura,722102{" "}
                </Typography>
              </Box>
              <Typography variant="p">7718456257</Typography>
              <Box>
                <Typography variant="p">Delivery by Tommorow </Typography>
              </Box>
            </Box>
            <Box className="mt-3 mb-3">
              <Button variant="contained" id="button" onClick={(e)=>router.push('/success')}>
                Continue
              </Button>
            </Box>

            <Typography variant="p" className="text-sm mt-10">
              <ShieldIcon className="text-green-500"/>
              Safe and Secure Payments.Easy returns.100% Authentic products.
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const id = context.params.id;
    const result = await productDetailWithLimit(id);

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
