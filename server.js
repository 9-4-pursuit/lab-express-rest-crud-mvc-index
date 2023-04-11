const {config} = require("dotenv");
const app = require("./app");
//Configure our dotenv
require("dotenv").config();
const PORT = process.env.PORT;

//Listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})