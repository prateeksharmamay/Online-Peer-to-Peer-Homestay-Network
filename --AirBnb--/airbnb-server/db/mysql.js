var mysql = require('mysql');

//Put your mysql configuration settings - user, password, database and port
function getConnection(){
	var connection = mysql.createConnection({
	    host     : 'localhost',
	    user     : 'root',
		password : 'q1d3m0',
	    //password: 'toor',
		//database : 'airbnb',
	    //password : 'system123#',
	    database : 'airbnb',
	    port	 : 3306

	});

	return connection;
}


function putData(callback,sqlQuery1,params){

	console.log("\nSQL Query::"+sqlQuery1);

	var connection=getConnection();

	connection.query(sqlQuery1,params, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err);
			callback(err,null);
		}
		else{
			console.log("Qty: " + rows);
			callback(err,rows);
		}
	});
	console.log("\nConnection closed..");
	connection.end();
}


function getData(callback,sqlQuery1){

	console.log("\nSQL Query::"+sqlQuery1);

	var connection=getConnection();

	connection.query(sqlQuery1, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err);
			callback(err,null);
		}
		else{
			console.log("Qty: " + rows);
			callback(err,rows);
		}
	});
	console.log("\nConnection closed..");
	connection.end();
}


function updateData(sqlQuery,param, callback){

    console.log("\nSQL Query::"+sqlQuery);

    var connection=getConnection();

    connection.query(sqlQuery, param, function(err, rows, fields) {
        if(err){
            console.log("ERROR: " + err);
            callback(err,null);
        }
        else{
            console.log("Qty: " + rows);
            callback(err,rows);
        }
    });
    console.log("\nConnection closed..");
    connection.end();
}

exports.putData=putData;
exports.getData = getData;
exports.updateData = updateData;