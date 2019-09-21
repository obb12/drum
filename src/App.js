import React from 'react';
import logo from './logo.svg';
import './App.css';
import AudioMP3 from './horse.mp3';
import AudioOGG from './horse.ogv';

class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      x: 'Hello',
      z: 'Hallo',
      y: 'Horse',
      a: 'Music',
      e:  'Sound',
      c: 'random',
      q: 'clout',
      d: 'money',
      s: 'free',
      text: ''

    }
    this.q = React.createRef();
    this.w = React.createRef();
    this.e = React.createRef();
    this.a = React.createRef();
    this.s = React.createRef();
    this.d = React.createRef();
    this.z = React.createRef();
    this.x = React.createRef();
    this.c = React.createRef();









  }
  handleKeyPress(event){
    console.log(event)
    var keys = ['q','w','e','a','s','d','z','x','c'];
    if(keys.includes(event.key)){
      this[event.key].current.play()
      this.setState({text:event.key})
 }
  }
  ActiveMusic(music){
    this[music].current.play()
    this.setState({text:music})
  }
  render(){
  return (
    <div className="App">
     <div id="drum-machine">
     <div className="drum-pads"  onKeyPress={this.handleKeyPress.bind(this)}>
     <div className="drum-pad"  id="Q" >
<span onClick={() => this.ActiveMusic('q')}>Q</span>
         <audio controls className="clip" id="Q" ref={this.q}>
          <source src={AudioOGG} type="audio/ogg"/>
          <source src={AudioMP3} type="audio/mpeg"/>
        Your browser does not support the audio element.
        </audio>
    </div>
     <div className="drum-pad">
     <span onClick={() => this.ActiveMusic('w')}>W</span>

     <audio controls className="clip" id="W" ref={this.w}>
      <source src={AudioOGG} type="audio/ogg"/>
      <source src={AudioMP3} type="audio/mpeg"/>
    Your browser does not support the audio element.
    </audio>
     </div>
     <div className="drum-pad"  id="e">
     <span onClick={() => this.ActiveMusic('e')}>E</span>

     <audio controls className="clip" id="e" ref={this.e}>
      <source src={AudioOGG} type="audio/ogg"/>
      <source src={AudioMP3} type="audio/mpeg"/>
    Your browser does not support the audio element.
    </audio>
     </div>
     <div className="drum-pad"  id="a">
     <span onClick={() => this.ActiveMusic('a')}>A</span>

     <audio controls className="clip" id="a" ref={this.a}>
      <source src={AudioOGG} type="audio/ogg"/>
      <source src={AudioMP3} type="audio/mpeg"/>
    Your browser does not support the audio element.
    </audio>
     </div>
     <div className="drum-pad"  id="s">
     <span onClick={() => this.ActiveMusic('s')}>S</span>

     <audio controls className="clip" id="s" ref={this.s}>
      <source src={AudioOGG} type="audio/ogg"/>
      <source src={AudioMP3} type="audio/mpeg"/>
    Your browser does not support the audio element.
    </audio>
     </div>
     <div className="drum-pad"  id="d">
     <span onClick={() => this.ActiveMusic('d')}>D</span>

     <audio controls className="clip" id="d" ref={this.d}>
      <source src={AudioOGG} type="audio/ogg"/>
      <source src={AudioMP3} type="audio/mpeg"/>
    Your browser does not support the audio element.
    </audio>
     </div>
     <div className="drum-pad" id="z"><span onClick={() => this.ActiveMusic('z')}>Z</span>
     <audio controls className="clip" id="Z" ref={this.z}>
      <source src={AudioOGG} type="audio/ogg"/>
      <source src={AudioMP3} type="audio/mpeg"/>
    Your browser does not support the audio element.
    </audio>
     </div>
     <div className="drum-pad"  id="x"><span onClick={() => this.ActiveMusic('x')}>X</span>
     <audio controls className="clip" id="X" ref={this.x}>
      <source src={AudioOGG} type="audio/ogg"/>
      <source src={AudioMP3} type="audio/mpeg"/>
    Your browser does not support the audio element.
    </audio>
     </div>
     <div className="drum-pad"  id="c"><span onClick={() => this.ActiveMusic('c')}>C</span>
     <audio controls className="clip" id="C" ref={this.c}>
      <source src={AudioOGG} type="audio/ogg"/>
      <source src={AudioMP3} type="audio/mpeg"/>
    Your browser does not support the audio element.
    </audio>
     </div>
     </div>

<div id="display">{this.state.text}</div>
     </div>
    </div>
  )
}
}

export default App;
