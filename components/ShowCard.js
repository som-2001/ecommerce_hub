import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function ShowCard({title,image}) {
  const theme = useTheme();

  return (
    <Card className='flex w-fit '>
        <CardContent sx={{ flex: '1 0 auto',backgroundColor:'#ffd7ff',}}>
          <Typography component="div" variant="p" className='text-2xl w-40'>
            {title}
          </Typography>
          <Link variant="subtitle1" id="button" className=' bg-purple-700 p-2 text-white cursor-pointer rounded-3xl relative top-[44%]' component="div"  
          href={`/category/${title}`} onClick={(e)=>{localStorage.setItem('title',title)}} >
            View all
          </Link>
        </CardContent>
      <Box className="flex items-center justify-end">
        <CardMedia
          component="img"
          sx={{ width: 201, height: 201 }}
          image={image}
          alt="Live from space album cover"
        />
      </Box>
      
    </Card>
  );
}
