// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // when library fires enqueue, we should que a song here. 

  initialize: function(){
    this.on('change', function (e) {
      console.log('this in SongQueue after a change', this)
    })
  }
});