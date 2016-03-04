module.exports = function (Cake) {
  // after the server starts up, once the Cake model is linked up with its database table
  Cake.on('dataSourceAttached', function (obj) {

    // stores the base create method for Cake (used in PUT and POST)
    var standardCreate = Cake.create;

    // writes your own mmetod to replate it
    Cake.create = function (data, callback) {

      // TODO: add custom code here
      console.log('I made a cake!');

      // then call the original methods
      return standardCreate.call(Cake, data, callback);
    };

    Cake.calculateDiameter = function (id, callback) {
      var cake = Cake.findById(id, function (err) {
        if (err) callback(err);
      });
      var diameter = cake.radius * 2;
      console.log('diameter', diameter);
      callback(null, diameter);
    };

    Cake.remoteMethod(
      'diameter', {
        accepts: {
          arg: 'id',
          type: 'number',
          required: true
        },
        returns: {
          arg: 'diameter',
          type: 'number'
        },
        http: {
          path: '/:id/diameter',
          verb: 'get'
        }
      }
    );

  });
};