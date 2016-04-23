// JavaScript Document

var pressStart = document.getElementById('btn-start');

var pressPause = document.getElementById('btn-pause');

var pressStop = document.getElementById('btn-stop');

var pressSplit = document.getElementById('btn-split');


clock = new stopWatch();

pressStart.addEventListener('click', function() {
  clock.start();
  pressPause.classList.remove('hide');
  pressStart.classList.add('hide');

});

pressPause.addEventListener('click', function() {
  clock.stop();
  pressStart.classList.remove('hide');
  pressPause.classList.add('hide');
});

pressStop.addEventListener('click', function() {
  clock.stop();
  clock.reset();
  pressStart.classList.remove('hide');
  pressPause.classList.add('hide');
  
    
});

pressSplit.addEventListener('click', function() {
  clock.split();
});