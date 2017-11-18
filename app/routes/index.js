const noteRoutes = require('./student_routes');

module.exports = function(app, db){
    noteRoutes(app,db);
};