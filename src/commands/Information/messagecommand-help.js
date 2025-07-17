const { EmbedBuilder } = require("discord.js");
const { Message } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const MessageCommand = require("../../structure/MessageCommand");
const config = require("../../config");
const GuildConfig = require("../../models/GuildConfig");

module.exports = new MessageCommand({
    command: {
        name: 'help',
        description: 'Replies with a list of available message commands.',
        aliases: ['h']
    },
    options: {
        cooldown: 10000
    },
    /**
     * 
     * @param {DiscordBot} client 
     * @param {Message} message 
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        let prefix = config.commands.prefix;

        if (config.database.useMongoDB) {
            const data = await GuildConfig.findOne({ guildId: message.guild.id });
            if (data?.prefix) prefix = data.prefix;
        } else {
            prefix = client.database.ensure('prefix-' + message.guild.id, config.commands.prefix);
        }

        const embed = new EmbedBuilder()
            .setTitle('📖 Help - Message Commands')
            .setDescription(`Here is a list of available commands using prefix: \`${prefix}\``)
            .setColor(0x5865F2)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                client.collection.message_commands.map((cmd) => ({
                    name: `\`${prefix}${cmd.command.name}\``,
                    value: cmd.command.description || 'No description provided.',
                }))
            )
            .setFooter({
                text: `Requested by ${message.author.tag}`,
                iconURL: message.author.displayAvatarURL({ dynamic: true })
            });

        await message.reply({ embeds: [embed] });
    }
}).toJSON();