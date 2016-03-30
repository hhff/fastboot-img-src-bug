import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let albums = payload.items.map(item => { 
      return { 
        id: item.id,
        name: item.name, 
        images: item.images
      }
    });

    let newPayload = {
      albums: albums,
      meta: {
        limit: payload.limit,
        total_pages: Math.ceil(payload.total / payload.limit)
      }
    };
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
