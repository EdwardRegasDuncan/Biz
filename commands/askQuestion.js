const { SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ask')
        .setDescription('Ask Biz a question')
        .addStringOption(option => option.setName('message').setDescription("what's your question?")),
    async execute(interaction) {
        const body = `Answer this question: ${interaction.options.getString('message')}`

        try {
            const completion = await interaction.client.gpt.createCompletion({
                model: process.env.OPEN_AI_MODEL,
                prompt: body,
                max_tokens: 500,
            });
            interaction.reply(`Question: ${interaction.options.getString('message')}:${completion.data.choices[0].text}`);
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            } else {
                console.log(error);
            }
        }
    },
};