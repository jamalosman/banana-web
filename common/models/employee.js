module.exports = function (Employee) {
    var Employee = server.models.Employee;
    var create = Employee.create;


    Employee.create{
    	console.log(create);
    }

    // Employee.on('dataSourceAttached', function (obj) {
    //     var create = Employee.create;

    //     console.log('ORIGINAL CREATE METHOD: ' + JSON.stringify(create) + ',');

    //     Employee.create = function (data, callback) {
    //         //        console.log('OVERWRITTEN CREATE METHOD');
    //         //        console.log('SERVER: ' + JSON.stringify(server) + ',');
    //         //        console.log('SERVER.MODELS: ' + JSON.stringify(server.models) + ',');

    //         console.log('THIS: ' + JSON.stringify(this) + ',');
    //         console.log('DATA: ' + JSON.stringify(data) + ',');
    //         console.log('CALLBACK: ' + JSON.stringify(callback));

    //         create.call(Employee, data, function (err, models) {
    //             //    console.log('---CALLBACK THIS: ' + JSON.stringify(this) + ',');
    //             console.log('---CALLBACK ERR: ' + JSON.stringify(err) + ',');
    //             console.log('---CALLBACK MODELS: ' + JSON.stringify(models));
    //             return data;
    //         });
    //     };
    // });

    //  MyModel.on('dataSourceAttached', function(obj){
    //    var find = MyModel.find;
    //    MyModel.find = function(filter, cb) {
    //      return find.apply(this, arguments);
    //    };
    //  });
};