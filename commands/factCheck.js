const { SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fact_check')
        .setDescription('Fact check a message')
        .addStringOption(option => option.setName('message').setDescription('Message to fact check')),
    async execute(interaction) {
        const body = `Fact check this following statement: ${interaction.options.getString('message')}`

        try {
            const completion = await interaction.client.gpt.createCompletion({
                model: process.env.OPEN_AI_MODEL,
                prompt: body,
                max_tokens: 500,
            });
            interaction.reply(`Fact check: ${interaction.options.getString('message')}:${completion.data.choices[0].text}`);
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            } else {
                console.log(error);
            }
        }
    },
};