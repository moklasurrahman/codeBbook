import React from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

export const Rating = ({rating}) => {

    let ratingArray = Array(5).fill(false)
    for(let i=0; i<rating; i++){
        ratingArray[i] = true
    }
  return (
   <>
    {
         ratingArray.map((value, index)=>(
            
                value?(<StarIcon key={index} style={{fontSize:'25', color:"yellow"}}/>
                ):(<StarOutlineIcon key={index} style={{fontSize:'25', color:"yellow"}}/>)
            
         ))
    }
   </>
  )
}

