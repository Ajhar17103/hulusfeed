 
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Button,Container,Paper,} from '@material-ui/core';
import Cards from './card';
import MediaCard from './card';
 
 
 
 
 
 

const useStyles = makeStyles((theme) => ({
   feed:{
       padding: '20px 0px'
   },
    feedleftright:{
       background:'rgb(235,235,235)',
       padding:'20px',
       borderRadius:'5%'
   },
   feedcontact:{
    background:'rgb(235,235,235)',
    padding:'20px',
    marginTop:'10px',
    borderRadius:'5%'
   },
   paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  card:{
    background:'rgb(255,255,255)',
    marginBottom:"30px",
     boxShadow:''
  },
  product:{
      border: '2px solid white',
      height:'80px',
      width:'80px',
      marginLeft:'0 auto',
      margin: '10px 0px'
  }
  
  
}));

export default function Feed() {
  const classes = useStyles();
  
const FormRow=()=> {
    return (
      < >
        <Grid item xs={4}>
          <Button size="small"  variant="contained" color="primary">item</Button>
        </Grid>
        <Grid  item xs={4}>
        <Button size="small" variant="contained" color="secondary" >item</Button>
        </Grid>
        <Grid item xs={4}>
        <Button size="small" variant="contained" color="primary" >item</Button>
        </Grid>
      </>
    );
  }
  return (
    <>
    
    <main className={classes.feed}>
    <div>
        <Container >
          <Grid container spacing={3}>

              <Grid item xs={3}>
            <Paper  className={classes.feedleftright}>

            <h4 style={{textAlign:'center'}}>Category</h4> 
            <hr/>

           <Grid container spacing={1}>
                  <Grid container item xs={12} spacing={3}>
                   <FormRow />
                 </Grid>
                  <Grid container item xs={12} spacing={3}>
                   <FormRow />
                 </Grid>
                <Grid container item xs={12} spacing={3}>
                 <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                 <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                 <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                 <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                 <FormRow />
                </Grid><Grid container item xs={12} spacing={3}>
                 <FormRow />
                </Grid>
         </Grid>
         

           
            </Paper>
            <Paper className={classes.feedcontact} >
                <h4 style={{textAlign:'center'}}>User</h4> 
                 <hr/>
                <Grid  container direction="row" >
                 <Grid item xs={4}>
          <Button size="small"  variant="contained"  >item</Button>
        </Grid>
        <Grid  item xs={4}>
        <Button size="small" variant="contained"  >item</Button>
        </Grid>
        <Grid item xs={4}>
        <Button size="small" variant="contained"   >item</Button>
        </Grid>
        
                </Grid>
                </Paper>

               </Grid>







              <Grid item xs={6}>
               <Paper className={classes.card}>

               <iframe width="80%" height="300" style={{marginLeft:"50px", borderRadius:'5%', marginTop:'10px'}} src="https://www.youtube.com/embed/Uh9643c2P6k">
              </iframe> 
               
               <div style={{display:'flex',  justifyContent:"center"}}>
               <div className={classes.product}>
               <img src="https://geeksus.ru/wp-content/uploads/2020/01/Samsung-Galaxy-S20-3.jpg" alt="product" width="80%" height="100%" />
                 </div>
                 <div className={classes.product}>
                   <img src="https://th.bing.com/th/id/OIP.2Yhm0nDU1YXA2M30m4XmSQHaJ3?pid=ImgDet&rs=1" alt="product" width="80%" />
                 </div>
                 <div className={classes.product}>
                 <img src="https://geeksus.ru/wp-content/uploads/2020/01/Samsung-Galaxy-S20-3.jpg" alt="product" width="80%" height="100%" />
                 </div>
                 <div className={classes.product}>
                 <img src="https://reviewcompared.com/images/products/3785121-unlocked-samsung-a31-smartphone2.jpg" alt="product" width="80%" height="100%" />
                   </div>
                   <div className={classes.product}>
                   <img src="https://th.bing.com/th/id/OIP.2Yhm0nDU1YXA2M30m4XmSQHaJ3?pid=ImgDet&rs=1" alt="product" width="80%" />
                   </div>
               </div>

               </Paper>
               <Paper className={classes.card}>

<iframe width="80%" height="300" style={{marginLeft:"50px", borderRadius:'5%', marginTop:'10px'}} src="https://www.youtube.com/embed/Uh9643c2P6k">
</iframe> 

<div style={{display:'flex',  justifyContent:"center"}}>
<div className={classes.product}>
<img src="https://geeksus.ru/wp-content/uploads/2020/01/Samsung-Galaxy-S20-3.jpg" alt="product" width="80%" height="100%" />
  </div>
  <div className={classes.product}>
    <img src="https://th.bing.com/th/id/OIP.2Yhm0nDU1YXA2M30m4XmSQHaJ3?pid=ImgDet&rs=1" alt="product" width="80%" />
  </div>
  <div className={classes.product}>
  <img src="https://geeksus.ru/wp-content/uploads/2020/01/Samsung-Galaxy-S20-3.jpg" alt="product" width="80%" height="100%" />
  </div>
  <div className={classes.product}>
  <img src="https://reviewcompared.com/images/products/3785121-unlocked-samsung-a31-smartphone2.jpg" alt="product" width="80%" height="100%" />
    </div>
    <div className={classes.product}>
    <img src="https://th.bing.com/th/id/OIP.2Yhm0nDU1YXA2M30m4XmSQHaJ3?pid=ImgDet&rs=1" alt="product" width="80%" />
    </div>
</div>

</Paper>
               <Paper className={classes.card}>

<iframe width="80%" height="300" style={{marginLeft:"50px", borderRadius:'5%', marginTop:'10px'}} src="https://www.youtube.com/embed/tZrpoSUQCJ0">
</iframe> 

<div style={{display:'flex',  justifyContent:"center"}}>
<div className={classes.product}>
<img src="https://geeksus.ru/wp-content/uploads/2020/01/Samsung-Galaxy-S20-3.jpg" alt="product" width="80%" height="100%" />
  </div>
  <div className={classes.product}>
    <img src="https://th.bing.com/th/id/OIP.2Yhm0nDU1YXA2M30m4XmSQHaJ3?pid=ImgDet&rs=1" alt="product" width="80%" />
  </div>
  <div className={classes.product}>
  <img src="https://geeksus.ru/wp-content/uploads/2020/01/Samsung-Galaxy-S20-3.jpg" alt="product" width="80%" height="100%" />
  </div>
  <div className={classes.product}>
  <img src="https://reviewcompared.com/images/products/3785121-unlocked-samsung-a31-smartphone2.jpg" alt="product" width="80%" height="100%" />
    </div>
    <div className={classes.product}>
    <img src="https://th.bing.com/th/id/OIP.2Yhm0nDU1YXA2M30m4XmSQHaJ3?pid=ImgDet&rs=1" alt="product" width="80%" />
    </div>
</div>


</Paper>       

<Paper className={classes.card}>

<iframe width="80%" height="300" style={{marginLeft:"50px", borderRadius:'5%', marginTop:'10px'}} src="https://www.youtube.com/embed/tZrpoSUQCJ0">
</iframe> 

<div style={{display:'flex',  justifyContent:"center"}}>
<div className={classes.product}>
<img src="https://geeksus.ru/wp-content/uploads/2020/01/Samsung-Galaxy-S20-3.jpg" alt="product" width="80%" height="100%" />
  </div>
  <div className={classes.product}>
    <img src="https://th.bing.com/th/id/OIP.2Yhm0nDU1YXA2M30m4XmSQHaJ3?pid=ImgDet&rs=1" alt="product" width="80%" />
  </div>
  <div className={classes.product}>
  <img src="https://geeksus.ru/wp-content/uploads/2020/01/Samsung-Galaxy-S20-3.jpg" alt="product" width="80%" height="100%" />
  </div>
  <div className={classes.product}>
  <img src="https://reviewcompared.com/images/products/3785121-unlocked-samsung-a31-smartphone2.jpg" alt="product" width="80%" height="100%" />
    </div>
    <div className={classes.product}>
    <img src="https://th.bing.com/th/id/OIP.2Yhm0nDU1YXA2M30m4XmSQHaJ3?pid=ImgDet&rs=1" alt="product" width="80%" />
    </div>
</div>

</Paper>
 
 <Paper className={classes.card}>

<iframe width="80%" height="300" style={{marginLeft:"50px", borderRadius:'5%', marginTop:'10px'}} src="https://www.youtube.com/embed/Uh9643c2P6k">
</iframe> 

<div style={{display:'flex',  justifyContent:"center"}}>
<div className={classes.product}>
<img src="https://geeksus.ru/wp-content/uploads/2020/01/Samsung-Galaxy-S20-3.jpg" alt="product" width="80%" height="100%" />
  </div>
  <div className={classes.product}>
    <img src="https://th.bing.com/th/id/OIP.2Yhm0nDU1YXA2M30m4XmSQHaJ3?pid=ImgDet&rs=1" alt="product" width="80%" />
  </div>
  <div className={classes.product}>
  <img src="https://geeksus.ru/wp-content/uploads/2020/01/Samsung-Galaxy-S20-3.jpg" alt="product" width="80%" height="100%" />
  </div>
  <div className={classes.product}>
  <img src="https://reviewcompared.com/images/products/3785121-unlocked-samsung-a31-smartphone2.jpg" alt="product" width="80%" height="100%" />
    </div>
    <div className={classes.product}>
    <img src="https://th.bing.com/th/id/OIP.2Yhm0nDU1YXA2M30m4XmSQHaJ3?pid=ImgDet&rs=1" alt="product" width="80%" />
    </div>
</div>

</Paper>   
 
             </Grid>

















            <Grid item xs={3}>
                <Paper className={classes.feedleftright} >
                <h4 style={{textAlign:'center'}}>Shop</h4> 
                 <hr/>
                <Grid  container direction="row" >
                 <Grid item xs={4}>
          <Button size="small"  variant="contained" color="primary">item</Button>
        </Grid>
        <Grid  item xs={4}>
        <Button size="small" variant="contained" color="secondary" >item</Button>
        </Grid>
        <Grid item xs={4}>
        <Button size="small" variant="contained" color="primary" >item</Button>
        </Grid>
        
                </Grid>
                </Paper>

                <Paper className={classes.feedcontact} >
                <h4 style={{textAlign:'center'}}>Contact Us</h4> 
                 <hr/>
                <Grid  container direction="row" >
                 <Grid item xs={4}>
          <Button size="small"  variant="contained"  >item</Button>
        </Grid>
        <Grid  item xs={4}>
        <Button size="small" variant="contained"  >item</Button>
        </Grid>
        <Grid item xs={4}>
        <Button size="small" variant="contained"   >item</Button>
        </Grid>
        
                </Grid>
                </Paper>
            </Grid>

        </Grid>
        </Container>
        </div>
       </main>
      
    </>
  );
}
 