module.exports = {
    name: 'cookie',
    allowedInteractiontypes: ["button"],
    type: 'messageCreate',
    code: `
    $reply[$channelID;$messageID;true]
    You have been presented with a cookie, do you accept?
    $addActionRow
    $addButton[cookieYes-$authorID;Yes;Success;]
    $addButton[cookieNo-$authorID;No;Danger;]
    `
}