module.exports = {
    name: 'status',
    type: 'ready',
    code: `
    $setStatus[do not disturb;Watching;Tengen Toppa Gurren Lagann]
    $log[[$day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit] $hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit]\\] Ready on client $userDisplayName[$clientID]]`
}