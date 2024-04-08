import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Post from "./Post";
import {Button} from "@mui/material";
import {posts} from './dataPosts';
import {useRef, useState} from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const Home = () => {
	const [checked, setChecked] = React.useState(true);
	const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

	const TemaAmetov = useRef();
	const DenisParamonov = useRef();
	const KirillZaitcev = useRef();
	const SergeyKolupov = useRef();
	const AndreiPerov = useRef();
	const Ametov = (event) => {
    TemaAmetov.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    });
  };const Paramonov = (event) => {
    DenisParamonov.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    });
  };const Zaitcev = (event) => {
    KirillZaitcev.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    });
  };const Kolupov = (event) => {
    SergeyKolupov.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    });
  };const Perov = (event) => {
    AndreiPerov.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    });
  };
	  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
		setOpen(true)
  }
	
  let secondsPassed = 0;
	let minutesPassed = 0;
	let seconds = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
		minutesPassed = ~~(secondsPassed/60)
	  seconds=secondsPassed.toFixed() - 60*minutesPassed;
  }
		
	return (
		<>
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            KIRUSHABR
          </Typography>
	        <Button
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } , fontSize: 10, color: 'white'}}
            onClick={Ametov}
          >
            Tema Ametov
          </Button>
	        <Button
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } , fontSize: 10, color: 'white'}}
            onClick={Paramonov}
          >
            Denis Paramonov
          </Button>
	        <Button
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } , fontSize: 10, color: 'white'}}
            onClick={Zaitcev}
          >
            Kirill Zaitcev
          </Button>
	        <Button
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } , fontSize: 10, color: 'white'}}
            onClick={Kolupov}
          >
            Sergey Kolupov
          </Button>
	        <Button
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } , fontSize: 10, color: 'white', mr: 3}}
            onClick={Perov}
          >
            Andrei Perov
          </Button>
	        <FormControlLabel
		        label="Подробнее:"
		        labelPlacement="start"
		        control={
	         <Switch
		          defaultChecked color="secondary"
				      checked={checked}
				      onChange={handleChange}
				      inputProps={{ 'aria-label': 'controlled' }}
				    />}
		        />
          <Typography sx={{ml: 2}}>Таймер: {minutesPassed}:{seconds}</Typography>
	        <IconButton onClick={handleStart}>
	          <PlayArrowIcon sx={{color: 'white'}}/>
	        </IconButton>
		        <IconButton onClick={handleStop}>
	          <PauseIcon sx={{color: 'white'}} />
	        </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
			<Collapse in={open}>
        <Alert
	        severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Что-то ты засиделся, отдохни!
        </Alert>
      </Collapse>
			<br/><br/><br/>
				<Post {...posts[0]} checked={checked} link={TemaAmetov}/>
				<Post {...posts[1]} checked={checked} link={DenisParamonov}/>
				<Post {...posts[2]} checked={checked} link={KirillZaitcev}/>
				<Post {...posts[3]} checked={checked} link={SergeyKolupov}/>
				<Post {...posts[4]} checked={checked} link={AndreiPerov}/>
			</>
  );
}
export default Home;