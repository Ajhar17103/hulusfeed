 
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Grid,Button} from '@material-ui/core';
import  img  from '../image/hulusthul-rem.png';
 
 
 
 
 

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    height:'80px'
    
  },
  appbar:{
      background:'white'
  },
  feed:{
      margin:'10px 30px'
  }
   
  
}));

export default function Header(props) {
  const classes = useStyles();
  

  return (
    <>
    <AppBar position="sticky" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
      <Grid container direction="row" justifyContent="space-between" >
       
       
        <Grid  item xs={3} style={{margin:'85px 0px'}}>
          
        <i className="fab fa-facebook" style={{fontSize:'25px',color:'black'}} ></i>
        <i className="fab fa-instagram" style={{ fontSize:'25px',paddingLeft:'5px',color:'black'}}></i>
        <i class="fab fa-youtube" style={{ fontSize:'25px',paddingLeft:'5px',color:'black'}}></i>
        </Grid>

        <Grid item xs={3}>
           <img src={img} alt='hulusthul' style={{width:'250px',}}/>
        </Grid>
       
        <Grid item xs={3} style={{margin:'85px 0px', textAlign:'right'}}  >
        <Button   >
           Account
        </Button>
        </Grid>
      </Grid>
      </Toolbar>
      </AppBar>
      
      
    </>
  );
}
 