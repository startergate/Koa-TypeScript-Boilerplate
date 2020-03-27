import * as path from "path";

import * as dotenv from 'dotenv';
dotenv.config();
dotenv.config({ path: path.join(__dirname, `'/.env.${process.env.NODE_ENV}`) });

import app from "./";

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
