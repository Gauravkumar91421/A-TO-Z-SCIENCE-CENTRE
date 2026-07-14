const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("✅ MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use((req,res,next) => {
    //console.log("Request:" ,req.method, req.url);
   // next();
//});

// Public Folder
app.use(express.static(path.join(__dirname, "public")));

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Login Page
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"));
});


// Test Route
app.get("/test", (req, res) => {
    res.send("server is rrunning Successfully");
});
app.post("/signup", async (req, res) => {



    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({
                success: false,
                message: "Email already exists"
            });
        }

        const newUser = new User({
            name,
            email,
            password
        });

        await newUser.save();

        res.json({
            success: true,
            message: "Account Created Successfully"
        });

    } catch (err) {

        console.log(err);

        res.json({
            success: false,
            message: "Server Error"
        });

    }

});

app.post("/login", async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.json({
            success: false
        });
    }
    if (user.password !== password) {
        return res.json({
            success: false
            
        });
    }

    res.json({
        success: true
    });

});
console.log(__dirname);

app.post("/api/auth/google", async (req, res) => {
  try {
    const { credential } = req.body;

    // Abhi ke liye sirf test
    console.log("Google Token:", credential);

    // Yahan baad me token verify karke MongoDB me user save karenge

    res.json({
      success: true,
      message: "Google login successful"
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false
    });
  }
});
// Start Server
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});