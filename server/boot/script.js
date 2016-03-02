module.exports = function (app) {
  var User = app.models.User;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  // TODO: replace user details
  User.create([
    {
      username: 'admin',
      email: 'some@email.com',
      password: 'test123'
  }
  ], function (err, users) {
    if (err) throw err;

    //create the superuser role
    Role.create({
      name: 'admin'
    }, function (err, role) {
      if (err) throw err;

      //make everyone a superuser
      users.forEach(function (user) {
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: user.id
        }, function (err, principal) {
          if (err) throw err;
        });
      });
    });
  });
};