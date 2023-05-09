const repojs = require('./src/index');
const url = "https://ipa.cypwn.xyz/scarlet.json"

repojs.init();
repojs.repo.get(url).then((data) => {
    data = repojs.repo.parse(data)
    all = repojs.repo.getAllCategories(data, "META")
    console.log("--------------------------------------")
    console.log("Repo Url: " + url)
    console.log("--------------------------------------")
    console.log("Repo Name: " + data.META.repoName)
    console.log("Repo Icon (url): " + data.META.repoIcon)
    console.log("--------------------------------------")
    console.log("App Amount: " + all.length)
    for(i = 0; i < all.length; i++) {
        console.log(" · App " + i + "'s Name: " + all[i].name)
        console.log("  --> App Version: " + all[i].version)
        console.log("  --> App Category: " + all[i].category)
        console.log("  --> App Description: " + all[i].description)
        console.log("  --> App Bundle Id: " + all[i].bundleID)
        console.log("  --> App Icon (url): " + all[i].icon)
        console.log("  --> App Ipa (url): " + all[i].down)
    }
});
