const { ChatInputCommandInteraction, EmbedBuilder, MessageFlags } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const ApplicationCommand = require("../../structure/ApplicationCommand");

module.exports = new ApplicationCommand({
    command: {
        name: 'help',
        description: 'Shows a list of available slash commands.',
        type: 1,
        options: []
    },
    options: {
        cooldown: 10000
    },
    /**
     * 
     * @param {DiscordBot} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        const embed = new EmbedBuilder()
            .setTitle('📖 Help - Slash Commands')
            .setColor(0x5865F2)
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter({
                text: `Requested by ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL({ dynamic: true })
            });

        client.rest_application_commands_array.forEach(cmd => {
            embed.addFields({
                name: `\`/${cmd.name}\``,
                value: cmd.description || 'No description',
            });
        });

        await interaction.reply({
            embeds: [embed],
            flags: 64
        });
    }
}).toJSON();