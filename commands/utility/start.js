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

            if (!guild.me || !guild.me.permissions.has('MANAGE_CHANNELS')) {
                return interaction.reply("I don't have permission to create channels.");
            }

            const channel = await guild.channels.create('rand', {
                type: 'text',
            });

            await channel.send(`Channel created! ${interaction.user.toString()} and ${userToPing.toString()}`);

            await interaction.reply('Command executed successfully!');
        } catch (error) {
            console.error(error);
            await interaction.reply('An error occurred while executing the command.');
        }
    },
};
