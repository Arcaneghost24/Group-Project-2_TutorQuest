const axios = require('axios');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const zoomApiUrl = 'https://api.zoom.us/v2';
const zoomApiKey = process.env.ZOOM_API_KEY;
const zoomApiSecret = process.env.ZOOM_API_SECRET;
const zoomUserId = process.env.ZOOM_USER_ID; // The Zoom user ID for the tutor

// Function to generate a JWT token for Zoom API
function generateJwtToken() {
  const payload = {
    iss: zoomApiKey,
    exp: ((new Date()).getTime() + 5000),
  };

  return jwt.sign(payload, zoomApiSecret);
}

// Function to send an email
async function sendEmail(to, subject, text) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    text: text,
  };

  await transporter.sendMail(mailOptions);
}

// Function to generate a Zoom link
async function generateZoomLink(tutorId, sessionId) {
  const payload = {
    topic: `Tutoring Session ${sessionId}`,
    type: 1,
    start_time: new Date().toISOString(),
    duration: 60,
    settings: {
      host_video: true,
      participant_video: true,
      join_before_host: true,
    },
  };

  const response = await axios.post(
    `${zoomApiUrl}/users/${zoomUserId}/meetings`,
    payload,
    {
      headers: {
        'Authorization': `Bearer ${generateJwtToken()}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.join_url;
}

// Function to send the Zoom link via email
async function sendZoomLink(studentEmail, tutorId, sessionId) {
  const zoomLink = await generateZoomLink(tutorId, sessionId);

  await sendEmail(studentEmail, 'Your Tutoring Session Zoom Link', `Here is your Zoom link for the session: ${zoomLink}`);

  return zoomLink;
}

module.exports = {
  sendZoomLink,
};
