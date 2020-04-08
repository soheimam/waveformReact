import React, {
  Component
} from 'react';
import Circle from './shapes/Circle'
import Bar from './shapes/Bar'

class AudioVisualiser extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidUpdate() {
    this.draw();
  }



  draw() {


    //  console.log(audioVolume)
    //  let bass = audioVolume

    //  let CalculateRMS = (arr) => Math.sqrt( 
    //   arr 
    //       .map( val => (val * val)) 
    //       .reduce((acum, val) => acum + val)/arr.length 
    // ); 


    // let RMS = CalculateRMS(bass); 





    const {
      audioData,
    } = this.props;

    
    // const audio = audioData.length === 0? 1024: audioData;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const bass = audioData.filter(f => f > 0 && f > 20 && f < 140 );
    const mid = audioData.filter(f => f > 0 && f > 140 && f < 400 );
    // const high = audioData.filter(f => f > 0 && f > 400 && f < 500 );



    let nyquist = 24000;
    // add up all of the values for the frequencies
  
    function lowIndex(lowbass){
     return Math.round(lowbass/ nyquist * audioData.length);  
    }

    function highIndex(highBass){
      return Math.round(highBass/ nyquist * audioData.length);
    }


    function rangeValue (lowIndex,highIndex,audioData){
      var numFrequencies = 0;
      var total = 0
      for (var i = lowIndex; i <= highIndex; i++) {
        total += audioData[i];
        numFrequencies += 1;
      }
      return  total / numFrequencies;
    }
    // divide by total number of frequencies
    // var toReturn = total / numFrequencies;
  
    const lowBass = lowIndex(bass[0]);
    const highBass = highIndex(bass[1]);
    const bassRange = rangeValue(bass[0],bass[1],audioData)
    console.log(bassRange, 'bass')

    const lowMid = lowIndex(mid[0]);
    const highMid = highIndex(mid[1]);
    const midRange = rangeValue(mid[0],mid[1],audioData)

    console.log(midRange, 'mid')


    var total = 0;
    var volume;

    

        for (var i = 0; i < 80; i++) { // get the volume from the first 80 bins, else it gets too loud with treble
            total += audioData[i];
        }
        volume = total;

        console.log(Math.round(volume/60),'vol')

    // let CalculateRMS = (arr) => Math.sqrt(
    //   arr
    //   .map(val => (val * val))
    //   .reduce((acum, val) => acum + val) / arr.length
    // );


    // var values = 0;
    // var length = audioData.length;
    // for (var i = 0; i < length; i++) {
    //   values += (audioData[i]);
    // }
    
  
    

    // var average = values / length;

    // console.log('average', average)

    const canvas = this.canvas.current;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;


    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    // const context = canvas.getContext('2d');
    // context.translate(centerX, centerY);


    // context.beginPath();
    // context.arc(95,50,average,0,2*Math.PI);
    // context.stroke();

    // context.beginPath();
    // context.arc(50,50,RMS,0,2*Math.PI);
    // context.stroke();

    // context.beginPath();
    // context.arc(10,80,tone,0,2*Math.PI);
    // context.stroke();

    // const numRect = 50;
    // const radius = 100;
    // const size = 10;


    // for (let i = 0; i < numRect; i++) {

    //   const _bar = new Bar(context, 0, radius, 5, 500);

    //   context.fillStyle = 'hsla(139, 93%, 53%, 1)';
    //   //'hsl('+ 360*Math.random() +',70%,80%,1)'

    //   context.arc(0, radius, size, 0, 2 * Math.PI, false);
    //   context.rotate(2 * Math.PI / numRect);

    //   _bar.draw();


    // }



    // var angle = 0;
    // var step = (2*Math.PI) / numElements;

    // for(var i = 0; i < numElements.length; i++) {
    //     var x = Math.round(centerX + radius * Math.cos(angle) - centerX ),
    //         y = Math.round(centerY + radius * Math.sin(angle) - centerY);
    //         const _circle = new Circle(context, x, y, 100, 0, 2 * Math.PI)

    //     angle += step;
    //     _circle.draw()  
    // };


    // let xAxis = [centerX - 200, centerX, centerX + 200];

    // const foo = []

    // for (let index = 0; index < 3; index++) {
    // const element = array[index];
    //   const _circle = new Circle(context, xAxis[index], centerY + 200, RMS * 5, 0, 2 * Math.PI)
    //   foo.push(_circle)
    //   _circle.draw()  
    // }
    // for (let index = 0; index < 3; index++) {
    // const element = array[index];
    //   const _circle = new Circle(context, xAxis[index], foo[index].y - 200, average, 0, 2 * Math.PI)
    //   _circle.draw()  
    // }
    // for (let index = 0; index < 3; index++) {
    //   // const element = array[index];
    //   const _circle = new Circle(context, xAxis[index], foo[index].y - 400, average, 0, 2 * Math.PI)
    //   _circle.draw()

    //}

    // let xAxis3 = [centerX - 200, centerX, centerX + 200];

    // for (let index = 0; index < 3; index++) {
    //   // const element = array[index];
    //   const _circle = new Circle(context, xAxis3[index], foo[index].y - 400, 100, 0, 2 * Math.PI)
    //   _circle.draw()

    // }

    // _circle1.draw();
    // _circle2.draw();
    // _circle3.draw();


    // context.arc(centerX, centerY, 100, 0, 2 * Math.PI, false);
    // // context.fillStyle = 'green';
    // context.fill();


    // context.fillRect(0, 0, canvas.width,canvas.height);
    // context.fillStyle = "blue";

    // context.lineWidth = 2;
    // context.strokeStyle = '#000000';
    // context.clearRect(0, 0, width, height);


    // context.beginPath();
    // context.moveTo(0, canvas.height / 2);
    // for (const item of audioData) {

    //   console.log(item)
    // const y = (item / 255.0) * canvas.height;
    // context.lineTo(x, y);
    // x += sliceWidth;
    // }
    // context.lineTo(x, canvas.height / 2);
    // context.stroke();
  }

  render() {
    return <canvas ref = {
      this.canvas
    }
    />;
  }
}

export default AudioVisualiser