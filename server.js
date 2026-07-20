require("dotenv").config();
const nodemailer = require("nodemailer");
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client("845623011305-ekj7cnk646cmi22qdnkrfhtp6bobu4p1.apps.googleusercontent.com");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const User = require("./models/User");

const app = express();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gaurav91421@gmail.com",
    pass: "jceehcwtfubzugfu"
  }
});

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
app.get("/robots.txt", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.send(`User-agent: *
Allow: /

Sitemap: https://a-to-z-science-centre.onrender.com/sitemap.xml`);
});


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
   try {
  const info = await transporter.sendMail({
    from: "gaurav91421@gmail.com",
    to: email, // Google login me payload.email, signup me email
    subject: "Welcome",
    text: "Welcome to A TO Z Science Centre!"
  });

  console.log("✅ Email sent:", info.response);

} catch (err) {
  console.log("❌ Email Error:");
  console.log(err);
}

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

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: "845623011305-ekj7cnk646cmi22qdnkrfhtp6bobu4p1.apps.googleusercontent.com"
    });

    const payload = ticket.getPayload();

    let user = await User.findOne({ email: payload.email });

    if (!user) {
      user = new User({
        name: payload.name,
        email: payload.email,
        password: ""
      });

      await user.save();
    }

    res.json({
      success: true
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false
    });
  }
});
// Start Server
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});