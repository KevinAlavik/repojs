const repojs = require("../src/index");

var repos = [
  "https://usescarlet.com/scarlet.json",
  "https://puffer.is-a.dev/repos/main-scarlet.json",
  "https://ipa.cypwn.xyz/scarlet.json",
  "https://azu0609.github.io/repo/scarlet_repo.json",
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
      const all = repojs.repo.getAllCategories(data, "META");
      var output;
      output += "--------------------------------------\n";
      output += `${BRIGHT}Repo Name: ${FG_CYAN}${
        meta.repoName || "N/A"
      }${RESET}\n`;
      output += `${BRIGHT}Repo Icon (url): ${FG_CYAN}${
        meta.repoIcon || "N/A"
      }${RESET}\n`;

      output += "--------------------------------------";
      output += `${BRIGHT}App Amount: ${FG_YELLOW}${all.length}${RESET}\n`;
      output += "\n";
      for (let i = 0; i < all.length; i++) {
        const app = all[i] || {};
        output += `${BRIGHT} · App ${i}'s Name: ${FG_CYAN}${
          app.name || "N/A"
        }${RESET}\n`;
        output += `  - App Version: ${app.version || "N/A"}\n`;
        output += `  - App Category: ${app.category || "N/A"}\n`;
        output += `  - App Description: ${app.description || "N/A"}\n`;
        output += `  - App Bundle Id: ${app.bundleID || "N/A"}\n`;
        output += `  - App Icon (url: ${app.icon || "N/A"}\n`;
        output += `  - App Ipa (url: ${app.down || "N/A"}\n`;
        appAmmount++; // Increment appAmmount for each app
      }
    }
    output += "\n";
    output += `${FG_YELLOW} Successfully loaded ${appAmmount} apps`;
    console.log(output)
    let timeTaken = Date.now() - start;
    console.log(`${BRIGHT}${FG_CYAN} Took ${timeTaken}ms ${RESET}`);
  })
  .catch((error) => {
    console.error(error); // Handle any errors that occurred during the promise execution
  });
