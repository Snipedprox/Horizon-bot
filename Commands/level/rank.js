module.exports = ({
name:"rank",
aliases:"level",
category:"Levelling",
description:"Check the rank of a user.",
usage:"rank <optional user>",
code:`$if[$message==]
$author[Rank of $usertag[$get[user]];$authoravatar]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getUserVar[rank;$get[user]]&rank=&currentxp=$getUserVar[exp;$get[user]]&nextlevelxp=$getUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getUserVar[level_card]&xpcolor=00FF00&isboosting=false]
$color[RANDOM]
$addtimestamp
$let[user;$authorid]
$else
$suppresserrors
$addtimestamp
$color[RANDOM]
$author[Rank of $usertag[$get[user]];$authoravatar]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getUserVar[rank;$get[user]]&rank=&currentxp=$getUserVar[exp;$get[user]]&nextlevelxp=$getUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getUserVar[level_card]&xpcolor=#00FF00&isboosting=false]
$let[user;$replacetext[$replacetext[$checkcondition[$findMember[$djseval[message.guild.members.fetch().then(a => a.find(x =>x.user.username.toLowerCase().includes('$message'.toLowerCase())).user.id);yes];no]==undefined];true;$findmember[$message;yes]];false;$findMember[$djseval[message.guild.members.fetch().then(a => a.find(x =>x.user.username.toLowerCase().includes('$message'.toLowerCase())).user.id);yes];no]]]
$endif
$onlyif[$getservervar[levelling]==true;The levelling system is disabled!]`})
