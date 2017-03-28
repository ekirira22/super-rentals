import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental : false, //now we want to set it to false so that the else executes which brings a button that generates the form
  actions : {
    rentalFormShow(){
      this.set('addNewRental', true);
      //now on pressing the button addNewRental changes true which brings up the form
    },
    saveRental1(){
      var params = {
        owner : this.get("owner"),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('addNewRental', false);
      this.sendAction('saveRental2', params);
    },
    hideForm(){
      this.set('addNewRental', false);
    }
  }
});
