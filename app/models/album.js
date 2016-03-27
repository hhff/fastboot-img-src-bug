import DS from 'ember-data';

const {
  attr,
  Model
} = DS;

export default Model.extend({
  name:   attr('string'),
  images: attr('array')
});
