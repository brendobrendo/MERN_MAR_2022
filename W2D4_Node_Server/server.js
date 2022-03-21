const express = require("express");
// console.log(express);
const PORT = 1337;
const app = express();
// ------------------------
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ------------------------
// routes
const routes = require("./routes/users.routes");
routes(app);

// require("./routes/users.routes")(app)





// --- ALWAYS AT THE END OF THE FILE!!! ---
app.listen(PORT, () => console.log(`>> SERVER started on port: ${PORT} and is listening for REQuests to RESpond to`))