import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
//   weathers:any[]=[];
//   weatherservice: any;
//   constructor(private _weatherservice:WeatherService){
//   _weatherservice.getweather().subscribe(
//     (data:any)=>{
//       console.log(data);
//       this.weathers=data;
//       console.log("weather data:",this.weathers);
//     },(err:any)=>{
//       alert("internal server error");
//     }
//   )
// }

getDotColor(temp: number): string {
  if (temp < 0) return 'blue';
  if (temp <= 30) return 'yellow';
  if (temp <= 35) return 'green';
  return 'red';
}

weather = {
  temperature: 36.8,
  time: '2025-08-21T17:15',
  is_day: 0
};
}