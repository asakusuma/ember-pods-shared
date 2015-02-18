
import Ember from 'ember';
import Resolver from 'ember/resolver';

export default Resolver.extend({
  customPattern: function(parsedName) {
    console.log(parsedName);
    var name = parsedName.fullNameWithoutType;
    var segs = name.split('/');
    var postfix = '';

    var type = this.pluralize(parsedName.type);

    if (parsedName.type === 'template') {
      segs.splice(0,1);
      type = 'components';
      postfix = '/template';
    }

    if (segs[0] === 'shared' || segs.length === 1) {
      if (parsedName.type === 'component') {
        postfix = '/component';
      }

      segs.splice(0,1);
      var path = this.namespace.modulePrefix + '/shared/' + type + '/' + segs.join('/') + postfix;
      return path;
    }
  },
  moduleNameLookupPatterns: Ember.computed(function(){
    var defaults = this._super();
    return defaults.concat( this.customPattern );
  })
});