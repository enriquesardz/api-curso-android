var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){
    app.get('/students/:id', (req,res) => {
        const id = req.params.id;
        console.log(id);
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('students').findOne(details, (err,item) => {
            if(err){
                res.send({ 'error': 'Error has ocurred'});
            } else {
                res.send(item);
            }
        });
    });

    app.get('students', (req,res) => {
        db.collection('students').find();
    });

    app.post('/students', (req,res) =>{
        const student = { 
            name: req.body.name,
            description: req.body.description,
            isBanned: req.body.isBanned
        }
        db.collection('students').insert(student, (err, result) => {
            if(err){
                res.send({'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};