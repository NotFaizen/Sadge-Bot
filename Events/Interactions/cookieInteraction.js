module.exports = [{
//  name: 'cookieYes',
    type: 'interactionCreate',
    allowedInteractionTypes: ["button"],
    code: `
    $arrayLoad[ID;-;$customID]
    $onlyIf[$arrayAt[ID;0]==cookieYes]
    $onlyIf[$arrayAt[ID;-1]==$authorID;$ephemeral ❌ This is not your button!]

    $interactionUpdate[
        $fetchrows
        $deleteActionRow[0]
        $if[
            $randomNumber[1;6;false]==3; $c[condition]
            $userDisplayName ate the cookie. A few minutes later they died of food poisoning.; $c[if true]
            $userDisplayName thanked the person for the cookie and ate it, it was tasty 😋 $c[if false]
        ]
    ]
    `,
},{
//  name: 'cookieNo',
    type: 'interactionCreate',
    code: `
    $arrayLoad[ID;-;$customID]
    $onlyIf[$arrayAt[ID;0]==cookieNo]
    $onlyIf[$arrayAt[ID;-1]==$authorID;$ephemeral ❌ This is not your button!]

    $interactionUpdate[
        $fetchrows
        $deleteActionRow[0]
        $userDisplayName politely refused the cookie.
    ]
    `,
}]