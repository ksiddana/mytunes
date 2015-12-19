// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // when library fires enqueue, we should que a song here. 

  initialize: function(){

    this.on('change', function (e) {
      // console.log('this in SongQueue after a change', this)
      this.playfirst();
    });
    // listen for ended event
    this.on('ended', function (e){
      console.log('song ended in songQ initialize')
      //remove the first song
     console.log('this before unshift',this)
      this.unshift();
      console.log('this after unshift',this)
      // play the new first song
      this.playFirst();
    })
  },

  playFirst: function() {

    // plays the first song in the queue.
    console.log("this in songQueue playfirst")
    // play the first song
    this.models[0].play();
    // remove the first song
    // this.shift();
  },
// this function gets invoked from appView when a song ends.
  songEnded: function () {
    console.log('songQ heard song ended', this);
    this.shift();
    this.playFirst()
  }

  // add: function() {
  // }

});