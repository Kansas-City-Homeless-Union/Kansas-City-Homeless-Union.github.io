import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    email: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <header>
            <Typography variant="h4" style={{ marginBottom: 25 }}>
              Contact Us
            </Typography>
          </header>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 15,
              width: "80%",
              margin: "auto",
            }}
          >
            <TextField
              label="Return Email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Title"
              placeholder="Subject"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <TextField
              name="message"
              label="Message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              rows={3}
              multiline
              required
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            style={{ marginTop: 20, color: "black" }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
