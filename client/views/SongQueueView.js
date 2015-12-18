// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table", //Don't know why we are adding a TagName.

  initialize: function() {
    this.render();
  },

  render: function() {
                                                     // is this a bug?
  // initialize: function() {
  // },
    this.$el.children().detach();
    
    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(queuedSong){
        return new SongQueueEntryView({model: queuedSong}).render();
      })
    );
  }

});
