const router = require('express').Router();
const { sendZoomLink } = require('../../utils/zoom');

router.post('/send-link', async (req, res) => {
  const { studentEmail, tutorId, sessionId } = req.body;

  try {
    const zoomLink = await sendZoomLink(studentEmail, tutorId, sessionId);
    res.status(200).json({ message: 'Zoom link sent successfully', zoomLink });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send Zoom link' });
  }
});

module.exports = router;
