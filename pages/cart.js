import { MainCard } from "@/components/MainCard";
import { Navbar } from "@/components/Navbar";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import { Roboto_Flex } from "next/font/google";
import { decreaseCount, increaseCount, removeItem } from "@/Redux/slice";
import { useRouter } from "next/router";
import CloseIcon from '@mui/icons-material/Close';

export default function cart() {
  const { body, count, total } = useSelector((state) => state.ecom);
  const dispatch = useDispatch();
  const router=useRouter();

  const remove = (id) => {
    dispatch(removeItem({ id }));
  };
  const increaseItem = (id, price) => {
    dispatch(increaseCount({ id, price }));
  };
  const decreaseItem = (id, price) => {
    dispatch(decreaseCount({ id, price }));
  };
  return (
    <div className="Cart">
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={8} justifyContent="center">
          <Box
            style={{
              display: "flex",
              gap: "10%",
              justifyContent: "center",
              padding: "2% 0% 0% 10%",
              
            }}
          >
            {body.length>0 && <p className="text-2xl">Cart Details</p>}
          </Box>
          <Box style={{
                    display: "flex",
                    padding: "2%",
                    gap: "10%",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection:"column"
                  }}> 
          {body.length===0 && <><img src="https://cdni.iconscout.com/illustration/premium/thumb/no-product-8316266-6632286.png?f=webp" style={{width:"40%",height:"auto"}} alt="" />
          <p style={{fontSize:"1.5rem"}}>Your Cart is Empty</p>
          <p className="text-purple-700">Looks like you have not made any Choice yet.</p></>}
          </Box>
          {body &&
            body?.map((data, index) => (
              <>
                <div
                  className="deals-of-day"
                  style={{
                    display: "flex",
                    padding: "2%",
                    gap: "10%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span className="cursor-pointer" onClick={(e) => remove(data.id)}><CloseIcon /></span>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={data.image}
                      alt=""
                      style={{
                        width: "70px",
                        height: "auto",
                        alignItems: "end",
                      }}
                      onClick={(e)=>{router.push(`/detailPage/${data.id}`);localStorage.setItem('pid',data.id)}}
                      
                    />
                    <Box style={{ display: "flex", textAlign: "center" }}>
                      <Button className="cursor-pointer"
                        onClick={(e) => decreaseItem(data.id, data.price)}
                      >
                        -
                      </Button>
                      <span>{data.count}</span>
                      <Button className="cursor-pointer"
                        onClick={(e) => increaseItem(data.id, data.price)}
                      >
                        +
                      </Button>
                    </Box>
                  </Box>
                  <Box style={{ width: "20%" }}>
                    <p>
                      {data.title.slice(0, 20)}
                      {data.title.length > 20 && <span>...</span>}
                    </p>
                    <p className="text-red-700">$ {data.price}</p>
                   
                      <Stack direction="row" spacing={1}>
                        <Chip
                          icon={<StarIcon style={{ color: "yellowgreen" }} />}
                          label={data.rating.rate}
                        />
                      </Stack>
                
                  </Box>
                </div>
                <Divider className="w-90 mr-24" />
              </>
            ))}
        </Grid>
         <Grid item xs={12} sm={12} md={12} lg={4} textAlign="-webkit-center">
          <Box className="border border-white p-4 w-80 mt-8" >
            <p className="text-2xl mb-4">Cart totals</p>
            <Box  className="flex text-xl mb-4">
              <p>Bill Summery</p>
              
            </Box>
            <Divider />
            <p className="mb-2">Shipping</p>
            <p className="mb-2">Flat rate: $1.00</p>
            <p className="mb-2">Shipping to 123,Bankura 722102,West Bengal</p>
            <Divider />
            <Box
              className=" flex justify-between text-xl mb-4 mt-4"
            >
              <p>GST 10%</p>
              <p>$5.00</p>
            </Box>
            <Divider />
            <Box className="flex justify-between text-2xl mb-4 mt-4"
            >
              <p>Total</p>
              <p className="text-red-700">${total}</p>
            </Box>
            <Button variant="contained" id="button" onClick={(e)=>router.push('/success')}>PROCEED TO CHECKOUT</Button>
          </Box>

        </Grid>
        
      </Grid>
    </div>
  );
}
