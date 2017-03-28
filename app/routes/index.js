import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },
  actions : {
    saveRental3(params){
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    destroyRental(rental){
      rental.destroyRecord();
      this.transitionTo('index');
      //when you destroy a record it gets chucked from the database that you had stored it in, in this case the data storage
      //we were using was ember fire where we uploaded a rentals.json file which acts as a data store.
    }
  }
});
