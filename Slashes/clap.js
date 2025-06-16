const Data = {
    "type": 1,
    "name": "clap",
    "description": "Clap along if you feel like a room without a roof~",
    "integration_types": [1, 0],
    "contexts": [0, 1, 2],
    "default_member_permissions": "2048",
    "options": [
        {
            "type": 3,
            "name": "message",
            "description": "The message to clap",
            "required": true,
            "autocomplete": false
        }
    ]
}

module.exports = {
    data: Data,
    code: `
    $onlyIf[$option[message]!=;Insert some text!]
    👏 $if[$checkContains[$option[message]; ];$replace[$option[message]; ; 👏 ;-1];$replace[$option[message];; 👏 ;-1]] 👏
    `
}