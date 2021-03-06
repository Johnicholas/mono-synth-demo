window.onload = function(){
  
  document.querySelector('.touch-move-scroll-blocker').addEventListener('touchmove', function(event) {                                                                                                                                                                                                                
      event.preventDefault();                                                                                                                                                                                                                                           
  }, false); 

  var audioContext = new webkitAudioContext();
  audioContext.sampleRate = 44100;

  var synth = new MonoSynth(audioContext);

  //setup sliders
  var oscShapeSlider = document.querySelector('#osc-shape');
  synth.oscillator.type = parseInt(oscShapeSlider.value);
  oscShapeSlider.onchange = function(event){
    synth.oscillator.type = parseInt(event.target.value);
  }

  var lpfCutoffSlider = document.querySelector('#lpf-freq');
  synth.setFilterFrequency(lpfCutoffSlider.value);
  lpfCutoffSlider.onchange = function(event){
    synth.setFilterFrequency(event.target.value);
  }

  var lpfResonanceSlider = document.querySelector('#lpf-res');
  synth.setFilterResonance(lpfResonanceSlider.value);
  lpfResonanceSlider.onchange = function(event){
    synth.setFilterResonance(event.target.value);
  }

  // setup piano keyboard
  var noteOnCallback = function(note){
    
    synth.noteOn(note);

  };

  var noteSlideCallback = function(note){

    synth.noteSlide(note);

  };

  var noteOffCallback = function(){

    synth.noteOff();

  };

  var keyboard = 
  new PianoKeyboard(
    audioContext,
    noteOnCallback,
    noteSlideCallback,
    noteOffCallback      
  );  
}
