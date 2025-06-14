module.exports = {
    name: 'cookie',
    type: 'messageCreate',
    code: `
    $reply[$channelID;$messageID;yes]
    You have been presented with a cookie, do you accept?
    $addActionRow
    `,
}