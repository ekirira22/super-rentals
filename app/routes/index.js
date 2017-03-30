import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'), //this 3 lines of code now replaced "return this.store.findAll('rental');"
      reviews: this.store.findAll('review') //in order to return multiple models, now we use Ember.RSVP.hash({}) ....This lines of code are called promises.
    });
  },
  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      this.transitionTo('index');
    }
  }
});
