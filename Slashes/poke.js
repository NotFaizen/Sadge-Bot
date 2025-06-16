const Data = {
    "description": "Give someone a poke",
    "type": 1,
    "name": "poke",
    "integration_types": [0, 1],
    "contexts": [1, 2, 0],
    "default_member_permissions": "2048",
    "options": [
        {
            "type": 6,
            "description": "User to poke",
            "name": "user",
            "required": true
        }
    ]
}

module.exports = {
    data: Data,
    code: `
    $!httpRequest[https://nekos.best/api/v2/poke;GET]
    $title[$userDisplayName boops $userDisplayName[$option[user]] .-.]
    $image[$httpResult[results;0;url]]
    $footer[anime name: $httpresult[results;0;anime_name]]
    $color[$randomNumber[0;16777215]]
    `
}