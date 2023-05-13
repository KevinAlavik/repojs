# RepoJs
[![Node.js Package](https://github.com/KevinAlavik/repojs/actions/workflows/npm-publish-github-packages.yml/badge.svg)](https://github.com/KevinAlavik/repojs/actions/workflows/npm-publish-github-packages.yml)
[Tutorial](https://puffer.is-a.dev/projects/repojs/)


## Gettings Started
**Using repojs with Node.js**
To install it run
```bash
npm i repojs
```

**Using repojs with the web**
Use our cdn by adding this into your websites body
```html
<script src="https://cdn.jsdelivr.net/npm/repojs/src/index.js" crossorigin="anonymous"></script>
```

## Functions
| Function | Parameters | Score | Example |
|---|---|---|---|
| repojs.repo.get() | url | A+ | repojs.repo.get("https://example.com/example.json"); |
| repojs.repo.parse() | jsonData, pathString | A+ | repojs.repo.parse(data, "META");<br>repojs.repo.parse(data, "Tweaked[1]"); |
| repojs.init() |  | A | repojs.init(); |
| repojs.repo.getAllCategories() | data, excludedCategory | B | repojs.repo.getAllCategories(data, "META"); |
| repojs.repo.loadMulti() | repos[] | A++ | repojs.repo.loadMulti(repos); |
| repojs.document.append(); | data, element | A+ | repojs.repo.document.append(data, document.getElementById('out')); |
| repojs.document.appendImage(); | element, imageUrl | F- | repojs.repo.document.appendImage(document.getElementById('out'), "https://example.com/example.png"); |
| repojs.repo.convert() | selectedRepoUrl, selectedRepoUrlTemplateFile, finalRepoTemplateFile | E- | repojs.repo.document.convert("https://example.com/example.json", "scarlet", "scylla"); |

### Scores Explained
| Score | Explained |
|---|---|
| A++ | Work So Fucking Good |
| A+ | Work Great |
| A | Works Good |
| A- | Works Okay | 
| B | Works nearly 100% |
| E | Nearly doesnt work |
| F- | Doesnt work at all |

### Function Explained
`repojs.repo.get(url)` - Fetches the inputed **url** and returns the JSON object fetched

`repojs.repo.parse(jsonData)` - Takes the inputed jsonData (that is the data returned from `repojs.repo.get()` and returns the parsed data

`repojs.init()` - Initialize the repojs process

`repojs.repo.getAllCategories(data, excludedCategory)` - Returns every array/all other keys exept the excludedCategory which is the name of the array you want to exclude

`repojs.repo.loadMulti(repos)` - Takes an array as input and returns the JSON objects for each repo/json source

`repojs.document.append(data, element)` - Appends the inputed data into the inputed element

`repojs.document.appendImage(element, imageUrl)` - Appends the inputed element and appends an inputed image to it

`repojs.repo.convert(selectedRepoUrl, selectedRepoUrlTemplateFile, finalRepoTemplateFile)` - Takes the selectedRepoUrl and fetches the JSON data and takes the selectedRepoUrlTemplateFile and compare that to finalRepoTemplateFile and converts the repo to the finalRepoTemplateFile

[https://puffer.is-a.dev/projects/repojs/](https://puffer.is-a.dev/projects/repojs/)
