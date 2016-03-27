import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,

  extractMeta(store, primaryModelClass, payload) {
    return {
      limit: payload.limit,
      total_pages: Math.ceil(payload.total / payload.limit)
    }
  },

  normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
    let documentHash = {};
    let albums = payload.items;

    documentHash.meta = this.extractMeta(store, primaryModelClass, payload);

    documentHash.data = albums.map(item => { return this.normalize(primaryModelClass, item).data; });

    return documentHash;
  }
});
