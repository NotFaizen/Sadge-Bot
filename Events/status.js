module.exports = {
    name: 'status',
    type: 'clientReady',
    code: `
    $setStatus[do_not_disturb;Watching;Tengen Toppa Gurren Lagann]
    $chalkLog[[$day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit] $hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit]\\] Ready on client $userDisplayName[$clientID];green;bold]
    `
}