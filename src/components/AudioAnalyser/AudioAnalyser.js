import React, { Component } from 'react';
import AudioVisualiser from './AudioVisualiser';

let analyser
class AudioAnalyser extends Component {
  constructor(props) {
    super(props);
    
    this.state = { audioData: new Uint8Array()};
    this.tick = this.tick.bind(this);
  }


  componentDidMount() {

   // scope is causing the issues here because we are over running the current variable 
   //
    // this.streamData = new Uint8Array(128);

    this.audioContext = new (window.AudioContext ||window.webkitAudioContext)();

    this.analyser = this.audioContext.createAnalyser(); //fft object
    this.frequency = new Uint8Array(this.analyser.frequencyBinCount);
    this.source = this.audioContext.createMediaStreamSource(this.props.audio);
    this.source.connect(this.analyser);
    this.rafId = requestAnimationFrame(this.tick);
  }

  tick() {

    this.analyser.getByteFrequencyData(this.frequency);
    var normalArray = Array.apply([],this.frequency);


    this.setState({ audioData: normalArray});

    this.rafId = requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafId);
    this.analyser.disconnect();
    this.source.disconnect();
  }

  render() {
    return <AudioVisualiser audioData={this.state.audioData} />;
  }
}

export default AudioAnalyser;