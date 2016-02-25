
module.exports = function (Employee) {
    Employee.on('dataSourceAttached', function (obj) {



        var create = Employee.create;
        Employee.create = function (data, callback) {
        	if (!data.username){
        		data.username = (data.firstname+'-'+data.lastname).toLowerCase();
        	}
        	// Custom code here
            return create.call(this, data, callback);
        };

    });

};