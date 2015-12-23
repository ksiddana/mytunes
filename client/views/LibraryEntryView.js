// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td></td><td><%= playCount %></td>'),
 
  initialize: function() {
    this.model.get('currentSong');

    this.model.on('add', this.increasePlayCount, this);
  },

  // song is clicked, fires the enqueue event in the song model.
  events: {

    'add': 'increasePlayCount',
    'click': function() {
      this.model.enqueue();
      // this.render(); // dont know if we need this
    },
  },

  increasePlayCount: function() {
    console.log("Should increase PlayCount here using Collection feature");
    this.model.set('playCount', this.model.get('playCount') + 1);
    this.render();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

/*this.$el.on('ended', function () {

      this.model.set('playCount', this.model.get('playCount') + 1);
      // console.log("PlayCOUNT: ", this.model.get('playCount'));
      this.trigger('songEnded', this)
    }.bind(this));*/
