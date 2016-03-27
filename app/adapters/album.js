import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.spotify.com/v1/artists/4mtHSXwIHihO6MWNq5Qoko',
  shouldReloadAll() { return true; }
});
