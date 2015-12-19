// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table", //Don't know why we are adding a TagName.

  initialize: function() {
    // console.log("SongQueue View - Init() ", this.collection);
    /*this.collection.on('change', function() {
      this.render();
      console.log("Inside the SongQueue Collection on Change", this);
    }, this);*/
    this.render();
    this.collection.on('remove', this.render, this);
    // this.on('add', this.render, this);
    this.collection.on('add', this.render, this);
  },

  render: function() {

    this.$el.children().detach();
    var queuedElems = 
      this.collection.map(function(queuedSong){
        return new SongQueueEntryView({model: queuedSong}).$el
      })

    console.log(queuedElems);
    console.log('anything');
    this.$el.html('<th>SongQueue</th>').append(queuedElems);
  }

});
