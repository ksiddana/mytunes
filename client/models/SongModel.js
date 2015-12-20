// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function() {

    this.set('playCount', 0);
  },
  play: function(){
    
    this.trigger('play', this);
  },
    //build logic for enqueing this song.
  enqueue: function () {
    console.log('songModel fires enqueue')
    this.trigger('enqueue', this)
  },
  dequeue: function () {
    this.trigger('dequeue', this);
    this.set('playCount', this.get('playCount') + 1);
    console.log(this.get('playCount'));
    console.log('a song ended',this)
  },
  ended: function () {
    this.trigger('ended', this)
  }
});