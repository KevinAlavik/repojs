const repojs = require('../src/index');

var repos = [
  "https://usescarlet.com/scarlet.json",
  "https://puffer.is-a.dev/repos/main-scarlet.json",
  "https://ipa.cypwn.xyz/scarlet.json",
  "https://azu0609.github.io/repo/scarlet_repo.json"
];

// Color codes
const RESET = "\x1b[0m";
const BRIGHT = "\x1b[1m";
const FG_CYAN = "\x1b[36m";
const FG_YELLOW = "\x1b[33m";

repojs.repo.loadMulti(repos)
  .then((results) => {
    for (let result of results) {
      const data = repojs.repo.parse(result);
      const all = repojs.repo.getAllCategories(data, "META");
      console.log("--------------------------------------");
      console.log(`${BRIGHT}Repo Name: ${FG_CYAN}${(data.META.repoName || "N/A")}${RESET}`);
      console.log(`${BRIGHT}Repo Icon (url): ${FG_CYAN}${(data.META.repoIcon || "N/A")}${RESET}`);
      console.log("--------------------------------------");
      console.log(`${BRIGHT}App Amount: ${FG_YELLOW}${all.length}${RESET}`);
      console.log("");
      for (let i = 0; i < all.length; i++) {
        console.log(`${BRIGHT} · App ${i}'s Name: ${FG_CYAN}${all[i].name}${RESET}`);
        console.log(`  - App Version: ${all[i].version}`);
        console.log(`  - App Category: ${all[i].category}`);
        console.log(`  - App Description: ${all[i].description}`);
        console.log(`  - App Bundle Id: ${all[i].bundleID}`);
        console.log(`  - App Icon (url): ${all[i].icon}`);
        console.log(`  - App Ipa (url): ${all[i].down}`);
      }
    }
  })
  .catch((error) => {
    console.error(error); // Handle any errors that occurred during the promise execution
  });