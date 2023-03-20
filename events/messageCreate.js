const { Events } = require('discord.js');
const chat = require('../eventCommands/sendChat.js');

module.exports = {
    name: Events.MessageCreate,
    once: false,
    async execute(interaction) {
        if (interaction.mentions.has(interaction.client.user)) {
            chat.sendChat(interaction);
        }
    }
}