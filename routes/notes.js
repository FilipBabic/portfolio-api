const express = require('express');
const Note = require('../models/note');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/notes', auth, async (req, res) => {
  try {
    const noteCount = await Note.countDocuments({ user: req.user._id });
    console.log("NOTE COUNT", noteCount);
    if (noteCount >= 5) {
      return res.status(400).send({ error: 'You can only have a maximum of 5 notes.' });
    }

    const note = new Note({
      ...req.body,
      user: req.user._id
    });

    await note.save();
    res.status(201).send(note);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/notes', auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id });
    res.send(notes);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/notes/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const note = await Note.findOne({ _id: req.params.id, user: req.user._id });
    if (!note) {
      return res.status(404).send();
    }
    updates.forEach(update => note[update] = req.body[update]);
    await note.save();
    res.send(note);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/notes/:id', auth, async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!note) {
      return res.status(404).send();
    }
    res.send(note);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
