import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Category } from "@/components/Category";
import { IntroContent } from "@/components/IntroContent";
import { FeatureProducts } from "@/components/FeatureProducts";
import { DealsOfDay } from "@/components/DealsOfDay";
import { Box } from "@mui/material";
import { Footer } from "@/components/Footer";
import FAQ from "@/components/FAQ";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <Box >
   
     <Navbar/>
     <IntroContent/>
     <Category/>
     <DealsOfDay/> 
     <FeatureProducts/>
     <FAQ/>
     <Footer/>
   </Box>
  );
}
