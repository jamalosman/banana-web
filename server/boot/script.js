module.exports = function (app) {
  var User = app.models.User;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;


  User.create([
    {
      username: 'Jamal',
      email: 'jamal@company.io',
      password: 'test123'
  },
    {
      username: 'Andrew',
      email: 'andrew@company.io',
      password: 'test123'
  },
    {
      username: 'Anita',
      email: 'anita@company.io',
      password: 'test123'
  }
  ], function (err, users) {
    if (err) throw err;

    //create the superuser role
    Role.create({
      name: 'superuser'
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