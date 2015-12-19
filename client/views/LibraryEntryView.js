// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

/*  initalize: function() {
    this.model.on('enqueue', function() {
      // this.trigger.play();
    })
  }*/

  events: {
    'click': function() {
      // this.model.play();
      //we need to enqueue the song to the song que collection.
      // console.log('library entry view hears a click')
      this.model.enqueue();
      console.log("Library Entry View: ", this);
      this.model.play();
      this.render();

    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
