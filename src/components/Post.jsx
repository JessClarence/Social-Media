import React from 'react'

import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';

const Feed = () => {
  return (
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/2528362/pexels-photo-2528362.jpeg?cs=srgb&dl=pexels-aleksandr-neplokhov-2528362.jpg&fm=jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive girl is a perfect wash disher and a women to cook meal in the kitchen
            together with your family and her. 
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} 
                      checkedIcon={<Favorite />} 
                      sx={{color:'red', '&.Mui-checked': {
                        color: 'red',
                      },}}/>
          </IconButton>
          <IconButton aria-label="share">
          <Checkbox icon={<BookmarkBorder />} 
                      checkedIcon={<Bookmark />} 
                      sx={{color:'blue', '&.Mui-checked': {
                        color: 'blue',
                      },}}/>
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Feed;
