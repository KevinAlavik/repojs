// Credits:
// 	Kevin Alavik (puffer) - Main Developer, Creating the repo handler:
//
// Dependencies:
//  https://github.com/eemeli/yaml
//
// Latest changes:
// 	(v0.1) - Added files, prepare for main init

const yml = require('yaml')

function parse(file) {
    const repoStruct = fs.readFileSync(file, 'utf8')
    return yml.parse(repoStruct)
}
