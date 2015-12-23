// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    
    this.$el.on('ended', function () {

      // Comment the line below, if you don't want the Song to be incremented twice.
      this.model.set('playCount', this.model.get('playCount') + 1);
      // console.log("PlayCOUNT: ", this.model.get('playCount'));
      this.trigger('songEnded', this)
    }.bind(this));

  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

  dequeue: function() {
    // when a song ends remove it 
    
  }

});
