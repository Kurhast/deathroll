const { ChannelType } = require('discord.js')
module.exports = {
    data: {
        name: 'start',
        description: 'Create a channel and ping users.',
        options: [
            {
                name: 'user',
                description: 'User to ping',
                type: 6,
                required: true,
            },
        ],
    },
    async execute(interaction) {

        try {
            const userToPing = interaction.options.getUser('user');
            const guild = interaction.guild;

            const channel = await guild.channels.create({
                name: 'test',
                type: ChannelType.GuildText,
                topic: `This channel was created by ${interaction.user.tag}`,
            });
            await channel.send(`Channel created! ${interaction.user.toString()} and ${userToPing.toString()}`);


            await interaction.reply('Command executed successfully!');
        } catch (error) {
            console.error(error);
            await interaction.reply('An error occurred while executing the command.');
        }
    },
};
