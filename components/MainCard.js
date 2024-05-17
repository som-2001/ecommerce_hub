import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import StarIcon from '@mui/icons-material/Star';

export const MainCard = ({ item }) => {
  const router = useRouter();
  return (
    <Card className="w-fit h-auto">
      <img
        src={item.image}
        alt=""
        className="w-80 h-80 object-contain"
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          {item.title.slice(0, 32)}
          {item.title.length > 32 && <span>...</span>}
        </Typography>
        <Typography variant="body2" className="text-red-700">
          ${item.price}
        </Typography>
        <Typography variant="body2" className="text-red-700">
          <Stack direction="row" spacing={1}>
            <Chip icon={<StarIcon style={{color:"yellowgreen"}} />} label={item.rating.rate}  />
          </Stack>
          
        </Typography>
      </CardContent>
      <Divider />
      <CardActions className="mb-3 ml-6">
        
        <Button
          variant="contained"
          
          id="button"
          onClick={(e) => {
            router.push(`/detailPage/${item.id}`);
            localStorage.setItem("pid", item.id);
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};
