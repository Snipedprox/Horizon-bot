module.exports = {
name: "prefix",
aliases: ['changeprefix' , 'setprefix' , 'change prefix'],
code:`
$title[Prefix change]
$color[PURPLE]
$footer[prefix changed by $username#$discriminator[$authorid]; $userAvatar[890297642943389716]]
$thumbnail[$userAvatar[890297642943389716]]
$description[i changed my prefix to **$message** if you think this is a mistake u can always change it back]
$argscheck[>1;you're prefix can't be empty]
$onlyPerms[manageserver;need manageserver perm]
$setservervar[prefix;$message]
$onlyIF[$memberscount>10;$servername must atleast have 10 members ]`} 