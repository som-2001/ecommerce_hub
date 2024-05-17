import { Card, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import { Navbar } from "@/components/Navbar";
import { MainCard } from "@/components/MainCard";
import { productCategoryWithTitle } from "@/api/functions/Product.api";

export default function Categories({ result }) {
  return (
    <div >
      <Navbar />
     
      <Grid container className="lg:p-28 p-1 sm:p-10 md:p-24" spacing={2} justifyContent="center"textAlign="-webkit-center">
        {result &&
          result.map((data, index) => (
            <Grid item xs={12} sm={7} md={6} lg={4} key={index} >
              <MainCard item={data} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const title = context.query.title; 
    
    const result = await productCategoryWithTitle(title);
   
    return {
      props: { result },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { result: [] },
    };
  }
}
