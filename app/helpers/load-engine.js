import Ember from 'ember';

const { Helper, inject, getOwner } = Ember;

export default Helper.extend({

  assetLoader: inject.service("asset-loader"),

  compute: function([ engineName ]) {
    // Return engineName if engine is loaded
    if (this._engineName !== undefined && this._engineName === engineName ) { return engineName; }
    // Return engineName if engine is already registered
    let owner = getOwner(this);
    if (owner.hasRegistration(`engine:${engineName}`)) {
      return engineName;
    }
    // Load un-registered engine
    this.get("assetLoader").loadBundle(engineName).then(() => {
      // Get engine
      const engine = window.require(`${engineName}/engine`).default;
      // Register engine with application
      owner.register(`engine:${engineName}`, engine);
      // Update this._engineName
      this._engineName = engineName;
      // Trigger recompution of helper
      this.recompute();
    });
    // Returning null ensures nothing is rendered
    return null;
  }

});
