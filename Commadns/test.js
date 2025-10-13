module.exports = {
    name: "test",
    type: "messageCreate",
    code: `
        $let[var;h]
        $!httpRequest[https://unicode-api.aaronluna.dev/v1/characters/-/$get[var];GET]
        $arrayCreate[name;$charCount[$httpResult]]
        $arrayClear[name]
        $arrayPushJSON[name;$httpResult]
        $if[$checkContains[\`\`\`json\n$env[name]\n\`\`\`;null];ts contains null yo 🥀💔]`
};