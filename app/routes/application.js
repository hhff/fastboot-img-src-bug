import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  perPageParam: 'limit',
  offset: 0,

  model() {
    return this.infinityModel('album', { 
      perPage: 3 
    }, {
      offset: 'offset'  
    });
  },

  afterInfinityModel(albums) {
    let currentOffset = this.get('offset');
    this.set('offset', currentOffset + albums.meta.limit);
  }
});
