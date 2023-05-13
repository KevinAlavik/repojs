const repojs = require('../src/index')

var repos = [
    "https://repo.starfiles.co/public",
    "https://repo.starfiles.co/public?slim"
]

// Color codes
const RESET = "\x1b[0m";
const BRIGHT = "\x1b[1m";
const FG_CYAN = "\x1b[36m";
const FG_YELLOW = "\x1b[33m";

let start = Date.now();
repojs.repo.loadMulti(repos).then((results) => {
    let appAmmount = 0; // Initialize appAmmount variable outside the loop
    for (let result of results) {
      if (result === null) {
        console.error("Error: Invalid JSON response");
        continue;
      }

      const data = repojs.repo.parse(result);
      if (data === null) {
        console.error("Error: Unable to parse JSON data");
        continue;
      }

      const meta = data.META || {};
      const all = data.apps
      var output;
      for (let i = 0; i < all.length; i++) {
        const app = all[i] || {};
        output += `${BRIGHT} · Loaded App: ${FG_CYAN}${
          app.name || "N/A"
        }${RESET}\n`;
        appAmmount++; // Increment appAmmount for each app
      }
    }
    output += "\n";
    output += `${FG_YELLOW} Successfully loaded ${appAmmount} apps`;
    console.log(output)
    let timeTaken = Date.now() - start;
    console.log(`${BRIGHT}${FG_CYAN} Took ${timeTaken}ms ${RESET}`);
});