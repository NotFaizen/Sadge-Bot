module.exports = {
    name: 'update',
    type: 'messageCreate',
    code: `
    $onlyForUsers[You are not allowed to use this!;$botOwnerID]
    $let[msg;$sendMessage[$channelID;Updating commands... $emoji[$emojiID[loading3]];true]]
    $try[
        $updatecommands
        $updateapplicationcommands
        $chalkLog[$commandCount commands updated :D;green;bold]
        $chalkLog[$applicationCommandCount slash commands updated :D;green;bold];;
        $chalkLog[Command update failed. Error: $error;red;bold]
        ]
    $!editMessage[$channelID;$get[msg];Commands updated!]`,
}
