let Data = {
  "type": 1,
  "name": "update",
  "description": "is mayonnaise an instrument?",
  "integration_types": [1,0],
  "contexts": [0,1,2]
}

module.exports = {
    data: Data,
    type: 'messageCreate',
    code: `
    $onlyForUsers[You are not allowed to use this!;$botOwnerID]
    $let[msg;$sendMessage[$channelID;Updating commands... $emoji[$emojiID[loading3]];true]]
    $updatecommands
    $updateapplicationcommands
    $chalkLog[$commandCount commands updated :D;green;bold]
    $chalkLog[$applicationCommandCount slash commands updated :D;green;bold]
    $!editMessage[$channelID;$get[msg];Commands updated!]`,
}
