// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    // Adding the SongQueue View to the overall AppView, empty 
    this.SongQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    console.log("Inside AppView: ", arguments);
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  //This is where we add Views to be Appended to the DOM.
  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.SongQueueView.$el
    ]);
  }

});
