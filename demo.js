const repojs = require('repojs');

repojs.init();
repojs.repo.get("https://usescarlet.com/scarlet.json").then((data) => {
    data = repojs.repo.parse(data)
    console.log(data.META)
});
