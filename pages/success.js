import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function success() {
  return (
    <Box className="w-full h-auto">
        <Navbar/>
      <Box className="text-center mt-20">
        <img src="../images/success.png" alt="" className="lg:w-[39vw] w-[100vw] sm:w-[80vw] h-auto m-auto" />
        <Box>
          <Typography variant="p">Your Payment is Successfull</Typography>
        </Box>
        <Box class="mb-6">
          <Typography variant="p">
            Thank you for your payment.An automated payment receipt will be sent
            to your registered email.
          </Typography>
        </Box>
        <Box className="mb-28">
        <Link href="/" className="text-red-600 underline">
          Back to Home
        </Link>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
}
