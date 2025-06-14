module.exports = {
    name: 'doot',
    type: 'messageCreate',
    code: `
    $reply[$channelID;$messageID;true]
    $onlyIf[$message!=;Insert some text!]
    $if[$checkContains[$message; ];$replace[$message; ; 🎺 ;-1];$replace[$message;; 🎺 ;-1]]
    `
}