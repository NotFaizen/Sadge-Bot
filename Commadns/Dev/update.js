module.exports = {
    name: 'update',
    type: 'messageCreate',
    code: `
    $onlyForUsers[You are not allowed to use this!;$botOwnerID]
    $let[msg;$sendMessage[$channelID;Updating commands... $emoji[$emojiID[loading3]];true]]
    $updatecommands
    $updateapplicationcommands
    $chalkLog[$commandCount commands updated :D;green;bold]
    $chalkLog[$applicationCommandCount slash commands updated :D;green;bold]
    $!editMessage[$channelID;$get[msg];$codeBlock[+ $commandCount commands updated :D \n+ $applicationCommandCount commands updated :D;diff]]`,
}
