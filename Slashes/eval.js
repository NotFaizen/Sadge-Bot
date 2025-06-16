const Data = {
    "type": 1,
    "description": "[DEV ONLY] Remotely executes ForgeScript code",
    "name": "eval",
    "integration_types": [0, 1],
    "contexts": [0, 1, 2],
    "options": [
        {
            "type": 3,
            "description": "ForgeScript code to execute",
            "name": "code",
            "required": true
        },
        {
            "type": 5,
            "description": "Send as ephemeral?",
            "name": "ephemeral"
        }
    ]
}

module.exports = {
    data: Data,
    code: `
    $if[$authorID!=$botOwnerID;$ephemeral You aren't the bot developer]
    $!httpRequest[http://localhost:8080/clean?code=$encodeURI[$option[code]];GET]
    $let[msg;$httpResult[output]]
    $ifx[
        $if[$option[ephemeral]==true;
            $ephemeral $eval[$get[msg]]
           ]
        $else[$eval[$get[msg]]]
        ]`,
}