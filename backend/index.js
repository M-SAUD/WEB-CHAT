const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Make sure axios is required

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "aa9773dd-6ebf-4be0-aa3d-f0923af4f544" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      // If the error is related to the HTTP response
      return res.status(e.response.status).json(e.response.data);
    } else {
      // If there is no response (e.g., network error, timeout)
      console.error("Error:", e.message || e); // Log the error for debugging
      return res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
