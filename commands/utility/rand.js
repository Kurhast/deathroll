const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rand')
        .setDescription('rand between 1 and the last rand'),
    async execute(interaction) {
        await interaction.reply('test!');
    },
};
