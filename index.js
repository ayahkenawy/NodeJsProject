const app = require("./app/src/app")
const port = process.env.PORT
app.listen(port,()=>console.log((`URL : http://localhost:${port}`)))