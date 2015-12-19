// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event on an instance of a SongModel will also trigger that event on all collections that SongModel instance belongs to.
    // Why do we need to pass along the keyword this when we trigger the 'play' event?
    this.trigger('play', this);

  },
  enqueue: function () {
    console.log('songModel fires enqueue')
    this.trigger('enqueue', this)
    //build logic for enqueing this song.
  }
});
