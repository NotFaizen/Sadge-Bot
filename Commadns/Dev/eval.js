module.exports = {
    name: 'eval',
    type: 'messageCreate',
    code: `
    $onlyForUsers[No.;$botOwnerID]
    $onlyIf[$message!=;Provide code to eval.]
    $!httpRequest[http://localhost:8080/clean?code=$encodeURI[$message];GET]
    $eval[$httpResult[output]]
    $!addMessageReactions[$channelID;$messageID;✅]
    `,
}