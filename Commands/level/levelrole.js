	
module.exports = ({
name:"lrole",
aliases:"level-role",
category:"Levelling",
usage:"lrole add/remove <level> <role>",
description:"Add a level up role!",
code:`$if[$message[1]==add]
$setservervar[level_order;$getservervar[level_order]$message[2]/]
$setservervar[level_roles;$getservervar[level_roles]$findrole[$messageslice[2]]/]
I successfully added $rolename[$findrole[$messageslice[2]]] to the level \`$message[2]\`
$argscheck[>2;Enter atleast 3 arguments! $getservervar[prefix]lrole <add/remove> <level> <role>]
$elseif[$message[1]==remove]
$setservervar[level_order;$replacetext[$getservervar[level_order];$message[2]/;;1]]
$setservervar[level_roles;$replacetext[$getservervar[level_roles];$splittext[$findtextsplitindex]/;;1]]
I successfully removed the role of the level \`$message[2]\`
$onlyif[$findtextsplitindex[$message[2]]!=0;Could not find the role!]
$textsplit[$getservervar[level_order];/]
$endelseif
$else
Use either \`add\` or \`remove\`!
$endif
$onlyif[$isnumber[$message[2]]==true;Not a valid number!]
$onlyperms[manageserver;Not enough permissions!]`})