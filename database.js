const mongoose = require("mongoose");

class Database {

    constructor(){
        this.connect();
    }
    connect() {
        mongoose.connect("mongodb+srv://AashitaRajput:Naruto@cluster0.soljum9.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority")
            .then(() => {
                console.log("Successful!!!!!");
            })
            .catch((err) => {
                console.log("Failed " + err);
            })
    }
}

module.exports = new Database();