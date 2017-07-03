import Ember from 'ember';
const { Controller } = Ember;

export default Controller.extend({
  testEngine: "test-engine",
  testLazyEngine: "test-lazy-engine",
  testStandaloneEngine: "test-standalone-engine"
});
