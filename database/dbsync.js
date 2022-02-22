const connection = require('./connection');

try {
    connection.sync()
        .then(() => console.log("DB connected!"));
} catch(err) {
    console.log(err);
}
