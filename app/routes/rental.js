import Ember from 'ember';

export default Ember.Route.extend({
  models(params){
    return this.store.findRecord('rental', params.rental_id);
  },
  actions :  {
    update(rental, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            rental.set(key,params[key]);
      }
    });
    rental.save();
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
