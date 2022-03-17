const express = require("express");
// console.log(express);
const app = express();
const PORT = 1337;
// ------------------------
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// ------------------------

const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

// --- SERVER ROUTING /api ---

const myCallbackFunc = (requestObj, responseObj) => {
    console.log("hello from server.js!!!");
    // responseObj.send("hello");
    responseObj.json({ status: "ok" })
}

app.get("/api", myCallbackFunc)

app.get("/api/users", (req, res) => {
    res.json(users)
})

// get one user
// -- *** ACCESS URL VARS -- need middleware
app.get("/api/users/:idx", (req, res) => {
    console.log(req.params);
    const { idx } = req.params
    // req.params.idx
    // res.json(users[req.params.idx])
    // res.json(users[idx])
    res.json({
        idx: req.params.idx,
        status: 200,
        user: users[idx]
    })
})

// ------- POST REQ
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json({status: "ok"})
})





// --- ALWAYS AT THE END OF THE FILE!!! ---
app.listen(PORT, () => console.log(`>> SERVER started on port: ${PORT} and is listening for REQuests to RESpond to`))