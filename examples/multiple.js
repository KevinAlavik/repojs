const repojs = require("../src/index");

var repos = [
  "https://repo.starfiles.co/public",
  "https://repo.starfiles.co/public?slim",
  "https://repo.starfiles.co/b/public",
  "https://usescarlet.com/scarlet.json",
  "https://puffer.is-a.dev/repos/main-scarlet.json",
  "https://ipa.cypwn.xyz/scarlet.json",
  "https://azu0609.github.io/repo/scarlet_repo.json",
  "https://puffer.is-a.dev/scylla-ios/cdn/repo.json"
];

// Color codes
const RESET = "\x1b[0m";
const BRIGHT = "\x1b[1m";
const FG_CYAN = "\x1b[36m";
const FG_YELLOW = "\x1b[33m";

let start = Date.now();
repojs.repo
  .loadMulti(repos)
  .then((results) => {
    let appAmount = 0; // Initialize appAmount variable outside the loop // Initialize comparisonCount variable outside the loop
    let output = ""; // Initialize the output variable
    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      const repoUrl = repos[i];
      if (result === null) {
        console.error(`Error: Invalid JSON response from ${repoUrl}`);
        continue;
      }

      const data = repojs.repo.parse(result);
      if (data === null) {
        console.error(`Error: Unable to parse JSON data from ${repoUrl}`);
        continue;
      }

      const meta = data.META || {};
      const all = repojs.repo.getAllCategories(data, "META") ||  repojs.repo.getAllCategories(data, "Info");

      // Check if 'all' is defined
      if (typeof all !== 'undefined') {
        for (let j = 0; j < all.length; j++) {
          const app = all[j] || {};
          appAmount++; // Increment appAmount for each app
          output += `${BRIGHT} · App ${appAmount}'s Name: ${FG_CYAN}${app.name || "N/A"}${RESET}\n`;
          // output += `  - From: ${repoUrl}\n`;
        }
      }
    }
    output += "\n";
    output += `${FG_YELLOW} Successfully loaded ${appAmount} apps`;
    console.log(output);
    let timeTaken = Date.now() - start;
    var emoji;
    if(timeTaken < 2500) {
      emoji = "🐇"
    } else if(timeTaken < 3500) {
      emoji = "🐈"
    } else if (timeTaken < 10000) {
      emoji = "🐢"
    } else if (timeTaken < 5000) {
      emoji = "🏃‍♂️"
    } else if (timeTaken < 1000) {
      emoji = "🏎"
    }
    console.log(`${BRIGHT}${FG_CYAN} ${emoji} Took ${timeTaken}ms ${RESET}`);
  })
  .catch((error) => {
    console.error(error); // Handle any errors that occurred during the promise execution
  });