const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "notes_db"
// ---------------------------

// middleware
app.use(express.json(), cors(), express.urlencoded({extended:true}));
// -----------------

// database connection
require('./config/mongoose.config')(DB);

// connect the routes
require("./routes/note.routes")(app);

app.listen(PORT, ()=> console.log(`🎈🎈 server up on port: ${PORT}`))
