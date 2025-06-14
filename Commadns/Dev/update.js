module.exports = {
    name: 'update',
    type: 'messageCreate',
    code: `
    $onlyForUsers[You are not allowed to use this!;$botOwnerID]
    $updatecommands 
    Commands have been updated!`,
}
