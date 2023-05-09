const repojs = require("../src/index");

url = "https://usescarlet.com/scarlet.json";

const RESET = "\x1b[0m";
const BRIGHT = "\x1b[1m";
const FG_CYAN = "\x1b[36m";
const FG_YELLOW = "\x1b[33m";

repojs.repo.get(url).then((data) => {
  var data = repojs.repo.parse(data);
  var all = repojs.repo.getAllCategories(data, "META");
  console.log("--------------------------------------");
  console.log(
    `${BRIGHT}Repo Name: ${FG_CYAN}${data.META.repoName || "N/A"}${RESET}`
  );
  console.log(
    `${BRIGHT}Repo Icon (url): ${FG_CYAN}${data.META.repoIcon || "N/A"}${RESET}`
  );
  console.log("--------------------------------------");
  console.log(`${BRIGHT}App Amount: ${FG_YELLOW}${all.length}${RESET}`);
  console.log("");
  for (let i = 0; i < all.length; i++) {
    console.log(
      `${BRIGHT} · App ${i}'s Name: ${FG_CYAN}${all[i].name}${RESET}`
    );
    console.log(`  - App Version: ${all[i].version}`);
    console.log(`  - App Category: ${all[i].category}`);
    console.log(`  - App Description: ${all[i].description}`);
    console.log(`  - App Bundle Id: ${all[i].bundleID}`);
    console.log(`  - App Icon (url): ${all[i].icon}`);
    console.log(`  - App Ipa (url): ${all[i].down}`);
  }
});
