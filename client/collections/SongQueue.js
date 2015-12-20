// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // when library fires enqueue, we should que a song here. 

  initialize: function(){

    this.on('change', function () {
      console.log('this in SongQueue after a change', this)
    });

    this.on('dequeue', function(){
      this.remove()
    });

    // listen for ended event
    this.on('ended', function (){
      // invoke song ended.
      this.songEnded();
    });

    // listen for a song to be added.  add event is triggered when an element is added/pushed to the collection.
    this.on('add', function () {
      // on every add play the song if its the only one.
      if (this.length === 1) {
        this.playFirst();
      }
    });
  },
  
  // plays the first song in the queue.
  playFirst: function() {
    // play the first song
    this.at(0).play();
  },
  
  // this function gets invoked from appView when a song ends.
  songEnded: function () {
    // console.log('songQ heard song ended', this.length);

      // console.log('this before unshift',this, this.length)
      this.shift();
      // console.log('this after unshift',this, this.length)

    if (this.length !== 0){
      // console.log('trying to play')
      this.playFirst();
    };
  }

  // add: function() {
  // }

});