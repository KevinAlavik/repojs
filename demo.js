const repojs = require('irepo.js')

repojs.init();
repojs.repo.get("https://usescarlet.com/scarlet.json").then((data) => {
    repojs.repo.parse(data);
})