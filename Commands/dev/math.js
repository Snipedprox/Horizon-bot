module.exports = {
    name: "math",
    code: `
$title[Calculator]
$author[$userTag[$authorID];$authorAvatar]
$description[
$addField[📤 Output;\`\`\`$djsEval[
const m = require('mathjs')

m.evaluate('$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowercase[$message];÷;/];x;*];';in];,;];π;pi]')
;yes]\`\`\`]

$addField[📥 Input; \`\`\`$message\`\`\`;yes]
]
$footer[Calculator made with Math.js]
$color[ORANGE]
$onlyForIDs[$botOwnerID;870441674525012018;]
$onlyIf[$checkContains[$toLowercase[$message];@;#;$;_;&;!;?]==false;]
$suppressErrors
`
}