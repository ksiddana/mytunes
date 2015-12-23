
// Make an Empty Backbone Model
var Appointment = Backbone.Model.extend({});

// Create an instanse of the Model
var appointment = new Appointment();

// Set some attributes to the Model
appointment.set('title', 'What is going on here');


// Make a View for the Model, this should be a Backbone View
// It's job is to render the DOM, so it should have a render function
var AppointmentView = Backbone.View.extend({
  
  el: 'body',

  initalize: function() {
    this.render();
  },

  render: function(){
    this.$el.empty();
    this.$el.append('<h1> Starting of with Backbone</h1>');
    this.$el.html('<div>' + this.model.get('title') + '</div>');
  }
});
  
// Create a instance of the View and it should take in the Model that we just created
var appointmentView = new AppointmentView({model: appointment});


// call the render function from the instance of View
// appointmentView.render(); 

// use the html and .el function to append to the DOM.
// $('body').html(appointmentView.el);