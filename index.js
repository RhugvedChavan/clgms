import express from 'express';
import dotenv from 'dotenv'
const app = express();
import staticRoute from './routes/static.routes.js'
import userRoute from './routes/user.routes.js'
import adminRoute from './routes/admin.routes.js'
import { connectToDb } from './config/db.js';


dotenv.config({
    path: './.env'
})

connectToDb();

app.use(express.static('public'))
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8000

app.use('/', staticRoute)
app.use('/user', userRoute)
app.use('/admin', adminRoute)

app.listen(PORT, () => {
    console.log(`App is running at port http://localhost:${PORT}`);
})
