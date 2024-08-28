import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const INIT_URL = "https://s.w-x.co/util/image/w/in-vadodara_1.jpg?v=at&w=1280&h=720";
    
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let HOT_URL = "https://media.istockphoto.com/id/936342386/photo/yellow-umbrella-with-bright-sun-and-blue-sky.jpg?s=612x612&w=0&k=20&c=zgoDpVvGJ6fzOFLJsLIJqCDZXdN7JuW-HkRAVSYH2S8=";
    let RAIN_URL =  "https://s.w-x.co/util/image/w/in-vadodara_1.jpg?v=at&w=1280&h=720";

    return(
        <div className="InfoBox">
          
            <div className='cardContainer'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {info.city}{""}
          {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ?  <WbSunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body3" sx={{ color: 'text.secondary' }}>
        <p>Temperature = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}</p>
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>
        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>

        </Typography>
      </CardContent>
      
    </Card>
    
    </div>
        </div>
    )
}