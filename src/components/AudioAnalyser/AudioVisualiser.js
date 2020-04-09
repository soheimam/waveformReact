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

    const {
      audioData,
    } = this.props;

  
      // let CalculateRMS = (arr) => Math.sqrt(
    //   arr
    //   .map(val => (val * val))
    //   .reduce((acum, val) => acum + val) / arr.length
    // );

    function flatten(arr) {
      return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
      }, []);
    }

    var arrayValue = Object.values(audioData)   
    let oneArray = flatten(arrayValue)

    let amplitude = Math.max(...oneArray) - Math.min(...oneArray);

    // const audio = audioData.length === 0? 1024: audioData;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const bass = audioData.filter(f => f > 0 && f > 20 && f < 140 );
    const mid = audioData.filter(f => f > 0 && f > 140 && f < 400 );
    // const high = audioData.filter(f => f > 0 && f > 400 && f < 500 );

    
   
    // half the value of the sample stream - 
    let nyquist = 24000;

  
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
  
    const bassArray =  flatten(bass)
    const highBass = Math.max(...bassArray);
    const lowBass = Math.min(...bassArray);
    const bassRange = rangeValue(lowBass,highBass,audioData)
    const bassOutput = bassRange ? bassRange: 60;

    const lowMid = lowIndex(mid[0]);
    const highMid = highIndex(mid[1]);
    const midRange = rangeValue(lowMid,highMid,audioData)
    const midOutput = midRange ? midRange: 10;

    // console.log(midRange, 'mid')


    var total = 0;
    var volume;

 
    const canvas = this.canvas.current;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;


    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    const context = canvas.getContext('2d');
    context.translate(centerX, centerY);

    const numRect = 50;
    const radius = 100;
    const size = 10;


    for (let i = 0; i < numRect; i++) {
      
      const _bar = new Bar(context, 0, radius, 5,amplitude);
      context.arc(0, radius, size, 0, 2 * Math.PI, false);
      context.rotate(2 * Math.PI / numRect);

      _bar.draw();


    }

    const _circle = new Circle(context, 0, 0, bassOutput,'#d91c1c');
    _circle.draw()

  }

  render() {
    return <canvas ref = {
      this.canvas
    }
    />;
  }
}

export default AudioVisualiser