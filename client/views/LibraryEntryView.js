// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
 

  // song is clicked, fires the enqueue event in the song model.
  events: {
    'click': function() {
      this.model.enqueue();
      // this.render(); // dont know if we need this
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
