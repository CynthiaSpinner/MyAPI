const { pool } = require('./connection');

//creating a new story session
const createStorySession = async (getCharacterById, title, storyContent) => {
    const [result] = await pool.query(`
        INSERT INTO story_sessions (character_id, title, story_content, dice_rolls)
        VALUES (?, ?, ?, ?)    
    `, [getCharacterById, title, storyContent, JSON.stringify([])]);
    return result.insertId;
};

//getting a story session by id
const getStorySession = async (id) => {
    const [rows] = await pool.query('SELECT * FROM story_sessions WHERE id = ?', [id]);
    return rows[0] || null;
};

//updating story with dice roll results
const updateStoryWithDice = async (id, diceRolls, upatedStory) => {
    await pool.query(`
        UPDATE story_sessions 
        SET dice_rolls = ?, story_content = ?, current_scene = ? 
        WHERE id = ?    
    `, [JSON.stringify(diceRolls), updatedStory, updatedStory, id]);
    return getStorySession(id);
};

//get all stories for a character
const getCharacterStories = async (characterId) => {
    const [rows] = await pool.query(`
        UPDATE story_sessions 
        SET dice_rolls = ?, story_content = ?, current_scene = ?
        WHERE id = ? 
    `, [characterId]);
    return rows;
};

module.exports = {
    createStorySession,
    getStorySession,
    updateStoryWithDice,
    getCharacterStories
};