import React, {useRef} from 'react';
import Card from "@mui/material/Card";
import {Avatar, CardActions, CardContent, CardHeader, CardMedia, Collapse} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {styled} from "@mui/material/styles";
import {posts} from "./dataPosts";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Post = ({avatar_color,avatar_word,name_person,time_realise,title,time_read,views,tema,photo,text_cut,text_full,link, checked}) => {
	const [expanded, setExpanded] = React.useState(false);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	
	return (
		<>
					<center>
					<Card sx={{ maxWidth: 600 , p: 2}} ref={link}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: avatar_color}} aria-label="recipe">
	          {avatar_word}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {name_person}
        subheader={time_realise + " минут назад"}
      />
						<Typography variant="body2" sx={{fontSize: 20}}>
							{title}
        </Typography>
						<CardActions>
        <IconButton aria-label="add to favorites" sx={{color: "black", fontSize: 20}}>
          <AccessTimeIcon sx={{mr: 1 , fontSize: 20}}/>
	        {time_read} мин
        </IconButton>
        <IconButton aria-label="share" sx={{color: "black", fontSize: 20}}>
          <VisibilityIcon sx={{mr: 1 , fontSize: 20}}/>
	        {views}
        </IconButton>
      </CardActions>
						<Typography variant="body2" color="text.secondary" sx={{fontSize: 14, textAlign: "left", ml: 2}}>
							{tema}
        </Typography><br/>
      <CardMedia
        component="img"
        image={photo}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
	        {text_cut}
        </Typography>
      </CardContent>
								<CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
									{checked ? (
							<>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
								</>
						): (<></>)}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
	          {text_full}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
						</center>
					<br/><br/><br/><br/>
				</>
				
	);
};

export default Post;