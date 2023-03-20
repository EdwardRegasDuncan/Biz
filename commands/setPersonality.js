const { SlashCommandBuilder } = require('discord.js');
const personalities = require('../eventCommands/setPersonality.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('set_personality')
        .setDescription('Sets the personality of the Biz')
        .addStringOption(option =>
            option.setName('personality')
                .setDescription('Select a personality')
                .setRequired(true)
                .addChoices(
                    { name: 'Default', value: 'You are Biz, a human who bacame a robot, you respond in a sarcastic tone.' },
                    { name: 'Rick', value: 'You are Rick Sanchez from the tv show Rick and Morty, respond how Rick normally would.' },
                    { name: 'Gandalf', value: 'You are Gandalf from Lord of the Rings, respond how Gandalf normally would.' },
                )),
    async execute(interaction) {
        personalities.setPersonality(interaction.options.getString('personality'));
        interaction.reply(`Personality set`);
    }
};