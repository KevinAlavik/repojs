const repojs = require('./src/index')

var repos = ["https://usescarlet.com/scarlet.json", "https://puffer.is-a.dev/repos/main-scarlet.json"]


data = repojs.repo.loadMulti(repos)
console.log(data)

// console.log("======================================")
// console.log("Repo Sources: " + repos)
// for(i = 0; i < repos.length; i++) {
//     repojs.repo.get(repos[i]).then((data) => {
//         data = repojs.repo.parse(data)
//         all = repojs.repo.getAllCategories(data, "META")
//         console.log("======================================")
//         console.log("")
//         console.log("Repo Name: " + data.META.repoName)
//         console.log("Repo Icon (url): " + data.META.repoIcon)
//         console.log("")
//         console.log("======================================")
//         console.log("App Amount: " + all.length)
//         for(i = 0; i < all.length; i++) {
//             console.log(" · Loaded app: " + all[i].name)
//             console.log("   - App Version: " + all[i].version)
//             console.log("   - App Bundle Id: " + all[i].bundleID)
//             console.log("")
//         }
//     })
// }