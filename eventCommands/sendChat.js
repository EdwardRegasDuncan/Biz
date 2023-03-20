const personalities = require('./setPersonality.js');

const sendChat = async (interaction) => {
    try {
        const content = interaction.content.replace(/<@!?\d+>/g, 'Biz');
        const completion = await interaction.client.gpt.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: personalities.getPersonality() },
                { role: "user", content: content}
            ],
            max_tokens: 500,
        });
        interaction.reply(completion.data.choices[0].message.content);
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error);
        }
    }
}

module.exports = {
    sendChat
};