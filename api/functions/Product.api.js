import axios from "axios";
import { BASEURL, endpoints } from "../endPoints";

export const productDetail = async () => {
  const res = await axios.get(endpoints.productDetails.products);
  return res.data;
};

export const categories = async () => {
  const res = await axios.get(
    `${endpoints.productDetails.products}/categories`
  );
  return res.data;
};

export const productDetailDesc=async ()=>{

    const res=await axios.get(
        `${endpoints.productDetails.products}?sort=desc`
    );
    return res.data;
}

export const productDetailLimit=async ()=>{

    const res=await axios.get(
        `${endpoints.productDetails.products}?sort=6`
    );
    return res.data;
}
export const productDetailWithLimit=async (id)=>{

    const res=await axios.get(
        `${endpoints.productDetails.products}/${id}`
    );
  
    return res.data;

}
export const productCategoryWithTitle=async(title)=>{
    const res=await axios.get(
        `${endpoints.productDetails.products}/category/${title}`
    );
   
    return res.data;

}