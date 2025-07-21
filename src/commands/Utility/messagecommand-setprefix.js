const { Message } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const MessageCommand = require("../../structure/MessageCommand");
const config = require("../../config");
const GuildConfig = require("../../models/GuildConfig");

module.exports = new MessageCommand({
    command: {
        name: 'setprefix',
        description: 'Set prefix for this guild.',
        aliases: []
    },
    options: {
        cooldown: 5000
    },
    /**
     * 
     * @param {DiscordBot} client 
     * @param {Message} message 
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        const newPrefix = args[0];

        if (!newPrefix) {
            return await message.reply({ content: 'You must provide the prefix!' });
        }

        if (newPrefix.length > 5) {
            return await message.reply({ content: `The prefix is too long! (${newPrefix.length} > 5)` });
        }

        if (config.database.useMongoDB) {
            try {
                const updated = await GuildConfig.findOneAndUpdate(
                    { guildId: message.guild.id },
                    {
                        guildName: message.guild.name,
                        prefix: newPrefix 
                    },
                    { upsert: true, new: true }
                );

                return await message.reply({
                    content: `Successfully updated the prefix to \`${updated.prefix}\`.`
                });
            } catch (err) {
                console.error(err);
                return await message.reply({ content: 'Failed to update prefix in MongoDB.' });
            }
        } else {
            if (newPrefix === config.commands.prefix) {
                client.database.delete('prefix-' + message.guild.id);
            } else {
                client.database.set('prefix-' + message.guild.id, newPrefix);
            }

            return await message.reply({
                content: `Successfully updated the prefix to \`${newPrefix}\`.`
            });
        }
    }
}).toJSON();