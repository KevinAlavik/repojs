# RepoJs
[![Node.js Package](https://github.com/KevinAlavik/repojs/actions/workflows/npm-publish-github-packages.yml/badge.svg)](https://github.com/KevinAlavik/repojs/actions/workflows/npm-publish-github-packages.yml)
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
| repojs.repo.loadMulti() | repos[] | A- | repojs.repo.loadMulti(repos); |
| repojs.repo.document.append(); | data, element | A+ | repojs.repo.document.append(data, document.getElementById('out')); |
| repojs.repo.document.appendImage(); | element, imageUrl | F- | repojs.repo.document.appendImage(document.getElementById('out'), "https://example.com/example.png"); |
| repojs.repo.convert() | selectedRepoUrl, selectedRepoUrlTemplateFile, finalRepoTemplateFile | E- | repojs.repo.document.convert("https://example.com/example.json", "scarlet", "scylla"); |

### Scores explained
| Score | Explained |
|---|---|
| A+ | Work Great |
| A | Works Good |
| A- | Works Okay | 
| B | Works nearly 100% |
| E | Nearly doesnt work |
| F- | Doesnt work at all |

[https://puffer.is-a.dev/projects/repojs/](https://puffer.is-a.dev/projects/repojs/)
