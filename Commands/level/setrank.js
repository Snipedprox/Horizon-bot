module.exports = ({
name:"set-card",
aliases:"card",
description:"Set a custom rank card!",
usage:"set-card <link>",
category:"Levelling",
code:`$setuservar[level_card;$message]
$description[Successfully set your rank card! Preview below!]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getUserVar[rank;$get[user]]&rank=&currentxp=$getUserVar[exp;$get[user]]&nextlevelxp=$getUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getUserVar[level_card]&xpcolor=00FF00&isboosting=false]
$let[user;$authorid]
$cooldown[$replacetext[$replacetext[$isvalidlink[$message];true;1d];false;1s];Wait for a %time% to set this again!]
$onlyif[$isvalidlink[$message]==true;Not a valid link!]`})