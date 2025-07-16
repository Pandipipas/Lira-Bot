const { model, Schema } = require('mongoose');

const guildConfigSchema = new Schema({
    guildId: {
        type: String,
        required: true,
        unique: true,
    },
    guildName: {
        type: String,
        required: true,
    },
    prefix: {
        type: String,
        default: '?',
    },
});

const GuildConfig = model('GuildConfig', guildConfigSchema);
module.exports = GuildConfig;
