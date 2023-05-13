const repojs = require('repojs');

const url = "https://usescarlet.com/scarlet.json";

repojs.repo.get(url).then((data) => {
    repo = repojs.repo.parse(data);
    console.log(`Repo Name: ${repo.META.repoName}`)
})