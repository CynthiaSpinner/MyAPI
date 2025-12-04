const express = require('express');
const router = express.Router();
const worldQueries = require('../db/worldQueries');

// get all clans route for clan selection ui and quick reference
router.get('/clans', async (req, res) => {
    try {
        const clans = await worldQueries.getAllClans();
        res.json(clans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get single clan route by id used for details screens
router.get('/clans/:id', async (req, res) => {
    try {
        const clan = await worldQueries.getClanById(req.params.id);
        res.json(clan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// load discipline list route for population and lookup
router.get('/disciplines', async (req, res) => {
    try {
        const disciplines = await worldQueries.getAllDisciplines();
        res.json(disciplines);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// fetch single discipline using id slug error if missing
router.get('/disciplines/:id', async (req, res) => {
    try {
        const discipline = await worldQueries.getDisciplineById(req.params.id);

        if (!discipline) return res.status(404).json({ error: 'Discipline not found' });
        res.json(discipline);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// returns all attributes used for character stats display
router.get('/attributes', async (req, res) => {
    try {
        const attributes = await worldQueries.getAllAttributes();
        res.json(attributes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// grab all skills with category for skill trees and sheets
router.get('/skills', async (req, res) => {
    try {
        const skills = await worldQueries.getAllSkills();
        res.json(skills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get list of merits for merit selection new char and edit ui
router.get('/merits', async (req, res) => {
    try {
        const merits = await worldQueries.getAllMerits();
        res.json(merits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get all flaws for flaws browser and add to char modal
router.get('/flaws', async (req, res) => {
    try {
        const flaws = await worldQueries.getAllFlaws();
        res.json(flaws);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// backgrounds endpoint for backgrounds select and view
router.get('/backgrounds', async (req, res) => {
    try {
        const backgrounds = await worldQueries.getAllBackgrounds();
        res.json(backgrounds);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// expose routes to app
module.exports = router;