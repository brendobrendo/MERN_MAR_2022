const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

// --- SERVER ROUTING /api ---
module.exports = (app) => {

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
        res.json({ status: "ok" })
    })

}