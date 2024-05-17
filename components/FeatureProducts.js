import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { MainCard } from "./MainCard";
import { productDetailLimit } from "@/api/functions/Product.api";
import { useQuery } from "react-query";

export const FeatureProducts = () => {
  const [result, setResult] = useState([]);

  useQuery(["products"], productDetailLimit, {
    onSuccess: (data) => {
      setResult(data);
    },
  });
  return (
    <div>
      <h1 className="text-center text-4xl mt-4 mb-4">Feature Products</h1>
      <Grid container className="lg:p-28 pl-1 sm:p-10 md:p-24" spacing={2} textAlign="-webkit-center">
      {result && result?.slice(0,6)?.map((data, index) => 
       <Grid item xs={12} sm={6} md={6} lg={4}>
      <MainCard key={index} item={data} />
      </Grid>
      )}
      </Grid>
    </div>
  );
};
