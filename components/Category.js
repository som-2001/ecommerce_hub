import axios from "axios";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ShowCard from "./ShowCard";
import { categories } from "@/api/functions/Product.api";
import { useQuery } from "react-query";

export const Category = () => {

  const [result,setResult]=useState([]);
  const images=[
    {
        img:'https://imgs.search.brave.com/ryd7hl5vPWWh86Xv-tEl5DURTSjsD0evragcTCTFD8k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODA5ODU1/NTEwMDktMDUxMDdj/ZDI3NTJjP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVRkOGZIQm9iMjVs/ZkdWdWZEQjhmREI4/Zkh3dw'
    },
    {
        img:'https://imgs.search.brave.com/fYi_sDbAaVRJS0xoF1U3psfpACW9OEdriQLlSd1PCD4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDgwNDIzMTQ0NTMt/YWUzMzhkODBjNDI3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRGOGZH/cGxkMlZzY25sOFpX/NThNSHg4TUh4OGZE/QT0'
    },
    {
        img:'https://imgs.search.brave.com/LeAuyqOrZI2T2jRcZEfqB5KPF8pDjaeIP0NaTcxjlJc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bWVucy1idXNpbmVz/cy1mYXNoaW9uLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA'
    },
    {
        img:'https://imgs.search.brave.com/_W0VthtB3B3UxZJdmSuKk8sPDxmbQfdP3WhEdIigfiU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zdHlsZS13b21h/bi1ibGFjay1mb3Jt/YWwtZHJlc3Mtd2l0/aC1iaW5vY3VsYXIt/Y2xvdGhlcy1yYWls/Xzg3OTEwLTEyMDMw/LmpwZz9zaXplPTYy/NiZleHQ9anBn'
    }
  ]
 
  useQuery(["categories"], categories, {
    onSuccess: (data) => {
      setResult(data);
    },
  });
 
  return (
    <div className="p-6 lg:p-16 sm:p-10 md:p-10">
       <Grid container spacing={3} > 
       {result && result?.map((data,index)=>(
            <Grid item xs={12} sm={6} md={6} lg={4}>
            <ShowCard title={data} key={index} image={images[index % images.length].img} />
            </Grid>
       ))} 
     </Grid>
    </div>
  );
};