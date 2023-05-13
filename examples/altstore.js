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
        output += `${BRIGHT} · Loaded App: ${FG_CYAN}${
          app.name || "N/A"
        }${RESET}\n`;
        output += `  - App Bundle Id: ${app.bundleID || "N/A"}\n`;
        output += `  - App Developer: ${app.developerName || "N/A"}\n`;
        if(app.versions !== undefined && app.versions.length !== nil) {
            output += `  - App Versions: \n`
            for(i = 0; i < app.versions.length; i++) {
                output += `   · Version ${app.versions[i].version}\n`
                output += `     - Date: ${app.versions[i].date}\n`
                output += `     - Desciption: ${app.versions[i].localizedDescription}\n`
                output += `     - IPA Url: ${app.versions[i].downloadURL}\n`
                output += `     - Size: ${app.versions[i].size}\n`
                output += "--------------------------------------\n";
            }
        } else {
            output += `   - App Version: ${app.version}\n`
            output += `   - App Version Date: ${app.versionDate}\n`
            output += `   - App Short Description: ${app.subtitle}\n`
            output += `   - App IPA (Url): ${app.downloadURL}\n`
            output += `   - App Icon (Url): ${app.iconURL}\n`
            output += `   - App Size: ${app.size}\n`
        }
        appAmmount++; // Increment appAmmount for each app
      }
    }
    output += "\n";
    output += `${FG_YELLOW} Successfully loaded ${appAmmount} apps`;
    console.log(output)
    let timeTaken = Date.now() - start;
    console.log(`${BRIGHT}${FG_CYAN} Took ${timeTaken}ms ${RESET}`);
});