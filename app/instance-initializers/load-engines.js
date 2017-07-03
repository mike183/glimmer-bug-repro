import config from '../config/environment';

export function initialize(instance) {

  ///
  /// Load asset manifest
  ///

  // Get asset-loader service
  const service = instance.lookup("service:asset-loader");
  // Get asset manifest
  let assetManifest = {
    "bundles":{
      "test-lazy-engine":{
        "assets":[
          {
            "uri":"/engines-dist/test-lazy-engine/assets/engine-vendor.css",
            "type":"css"
          },
          {
            "uri":"/engines-dist/test-lazy-engine/assets/engine-vendor.js",
            "type":"js"
          },
          {
            "uri":"/engines-dist/test-lazy-engine/assets/engine.js",
            "type":"js"
          }
        ]
      },
      "test-standalone-engine":{
        "assets":[
          {
            "uri":"/test-standalone-engine/engines-dist/test-standalone-engine/assets/engine-vendor.css",
            "type":"css"
          },
          {
            "uri":"/test-standalone-engine/engines-dist/test-standalone-engine/assets/engine-vendor.js",
            "type":"js"
          },
          {
            "uri":"/test-standalone-engine/engines-dist/test-standalone-engine/assets/engine.js",
            "type":"js"
          }
        ]
      }
    }
  };
  // Push manifest into asset-loader
  service.pushManifest(assetManifest);


  ///
  // /// Alias required host application modules
  // ///
  //
  // // Retrieve modules to alias
  // const aliasedModules = aliasedModulesCalculator();
  // // Loop registered through engines
  // for (let engineName in manifest.bundles) {
  //   // Alias modules into engines namespace
  //   aliasedModules.forEach((module) => {
  //     window.define.alias(module.modulePathTarget, `${engineName}/${module.modulePath}`);
  //   });
  // }
}

export default {
  name: 'load-engines',
  initialize
};
