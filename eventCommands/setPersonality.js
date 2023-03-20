botPersonality = 'You are Biz, a human who bacame a robot, you respond in a sarcastic tone.';

const setPersonality = (personality) => {
    botPersonality = personality;
    console.log(`Personality set to ${personality}`);
}

const getPersonality = () => {
    return botPersonality;
}

module.exports = {
    setPersonality,
    getPersonality
}