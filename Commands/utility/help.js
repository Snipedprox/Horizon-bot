module.exports = {
name: "help",
aliases: "h",
code: ` $title[¦ Horizon Help Page]
$author[$username[$clientid]#$discriminator[$clientid];$useravatar[$clientid]]
$footer[$username[$clientid];$useravatar[$clientid]]
$description[
\`\`\`
use $getservervar[prefix]help for all commands 
make sure to not abuse the bot 
(also you need 10 members in order to change the bots prefix just to avoid fake servers)\`\`\`

<:moderation:891759387302060062>¦Moderation\`\`\`
$getservervar[prefix]ban ¦ Ban a user.
$getservervar[prefix]banalt ¦ Bans user if there account is younger than 30d.
$getservervar[prefix]kick ¦ Kick a user.
$getservervar[prefix]setmute ¦ Set the muterole.
$getservervar[prefix]mute ¦ Mute a user.
$getservervar[prefix]unmute ¦ Unmute a user.
$getservervar[prefix]tempmute ¦ Temporarily mute a user.
$getservervar[prefix]warn ¦ Warn a user.
$getservervar[prefix]infractions ¦ Check user infractions.
$getservervar[prefix]slowmode ¦ Set the current channel’s slowmode.
$getservervar[prefix]clear ¦ Clear messages.
$getservervar[prefix]tempban ¦ Temporarily ban a user.
$getservervar[prefix]clearwarns ¦ Clear user's warnings.
$getservervar[prefix]role ¦ Role a user.
$getservervar[prefix]removerole ¦ Remove a user's role.
$getservervar[prefix]temprole ¦ Temporarily role a user.
$getservervar[prefix]prefix ¦ Change my prefix.\`\`\`

<:Fun:891759387864080454>¦Fun\`\`\`
$getservervar[prefix]set-levelling ¦ Enable level system.
$getservervar[prefix]guess ¦ Play guess the number.
$getservervar[prefix]level-role ¦ Set the level role.
$getservervar[prefix]level-message ¦ Set level message.
$getservervar[prefix]rank ¦ Check your rank.
$getservervar[prefix]quote ¦ Quote a message.
$getservervar[prefix]set-card ¦ Set the rank background.
$getservervar[prefix]editsnipe ¦  ¦ Check edited messages.
$getservervar[prefix]snipe ¦ Snipe recently deleted messages.
$getservervar[prefix]addemoji ¦ Add an emoji.
$getservervar[prefix]func ¦ Check aoi.js commandlist.
$getservervar[prefix]hack ¦ Hack a user.
$getservervar[prefix]jumbo ¦ Enlarge an emote.
$getservervar[prefix]8ball ¦ Ask the 8ball questions.
$getservervar[prefix]info ¦ Check users info.
$getservervar[prefix]avatar ¦ See users avatar
$getservervar[prefix]invite ¦ Invite me.\`\`\`

<:music:891759386924580955>¦Music\`\`\`
$getservervar[prefix]play ¦ Play a song.
$getservervar[prefix]volume ¦ Change the songs volume.
$getservervar[prefix]queue ¦ Queue a song.
$getservervar[prefix]clearqueue ¦ Clear queue.
$getservervar[prefix]skip ¦ Skip a song.
$getservervar[prefix]stop ¦ Stop a song.
$getservervar[prefix]nowplaying
$getservervar[prefix]loop ¦ Loop a song
$getservervar[prefix]resume ¦ Resume to a song.
$getservervar[prefix]pause ¦ Pause a song.\`\`\`]
$color[50021B]
$thumbnail[$useravatar[$clientid]]`}

