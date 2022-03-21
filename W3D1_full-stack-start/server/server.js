const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

// middleware
// app.use(cors({
//     // origin: "http://localhost:3000"
//     // origin: "*"
//     // methods: ["GET"]
// }));
app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}));

// 1. connect mongodb with the server using mongoose
require("./config/mongoose.config");

// import routes
// require("./routes/user.routes")(app);
const RouteFunction = require("./routes/user.routes");
RouteFunction(app);



// starts the server at the END
app.listen(PORT, ()=> console.log(`>>>> server up on port: ${PORT} <<<<`))