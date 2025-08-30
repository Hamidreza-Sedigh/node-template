const express =    require('express');
const bodyParser = require("body-parser");
const cors =       require('cors');

const config =     require("./config");
const newsRoutes = require("./routes/newsRoutes");
const userRoutes = require("./routes/userRoutes");
const sourceRoutes = require("./routes/sourceRoutes");
const connectDB =  require('./config/db');
// const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = config.app.port;

// اتصال به دیتابیس
connectDB(config.db.uri);


// Middleware
//app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// فعال‌سازی CORS
app.use(cors({
    origin: 'http://localhost:3000', // آدرس فرانت اند شما
    methods: ['GET','POST','PUT','DELETE'],
    credentials: true // اگر میخوای کوکی هم ارسال شود
}));

// Routes
app.use("/api/news", newsRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/sources", sourceRoutes);
// صفحه 404
app.use((req, res) => {
    res.status(404).send('<h1>صفحه پیدا نشد</h1><a href="/">بازگشت به خانه</a>');
});

app.listen(PORT, () => {
    console.log(`Server is running ... on ${config.app.host}`);
});
