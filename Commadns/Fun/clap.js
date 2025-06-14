module.exports = {
    name: 'clap',
    type: 'messageCreate',
    code: `
    $onlyIf[$message!=;Insert some text!]
    $if[$checkContains[$message; ];$replace[$message; ; 👏 ;-1];$replace[$message;; 👏 ;-1]]
    `
}