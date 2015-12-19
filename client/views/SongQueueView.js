// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table", //Don't know why we are adding a TagName.

  initialize: function() {
    // console.log("SongQueue View - Init() ", this.collection);
    /*this.collection.on('change', function() {
      this.render();
      console.log("Inside the SongQueue Collection on Change", this);
    }, this);*/
    this.on('remove', this.render(), this);
    this.on('add', this.render(), this);
    
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
