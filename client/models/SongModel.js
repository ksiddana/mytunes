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
    this.trigger('enqueue', this)
  },
  dequeue: function () {
    this.trigger('dequeue', this);
    this.increasePlayCount();
  },
  ended: function () {
    this.trigger('ended', this)
  },

  increasePlayCount: function() {
    this.set('playCount', this.get('playCount') + 1);
  }
});