# RepoJs
[![Node.js Package](https://github.com/KevinAlavik/repojs/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/KevinAlavik/repojs/actions/workflows/npm-publish.yml)

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
| Function | Parameters | Score | Note | Example |
|---|---|---|---|---|
| repojs.repo.get() | url | A+ | You need this to get the json data. | repojs.repo.get("https://example.com/example.json"); |
| repojs.repo.parse() | jsonData, pathString | A+ | You need this to parse the outputed jsonData by repojs.repo.get(); pathString is not needed only use it if you want parse a specific array | repojs.repo.parse(data, "META");<br>repojs.repo.parse(data, "Tweaked[1]"); |
| repojs.init() |  | A | Not really needed | repojs.init(); |
| repojs.repo.getAllCategories() | data, excludedCategory | B | Use if you want every array (or other data) other then the selected excludeCategory (wich is basiclly the name of the array you want to exclude | repojs.repo.getAllCategories(data, "META"); |
| repojs.repo.loadMulti() | repos[] | A- | Use if you want to load multiple repos/json sources, use this is you have an array of repos/json sources. | repojs.repo.loadMulti(repos); |
| repojs.repo.document.append(); | data, element | A+ | Use this to append the parsed json data to the element, you can really append anything to the selected element with this. | repojs.repo.document.append(data, document.getElementById('out')); |
| repojs.repo.document.appendImage(); | element, imageUrl | F- | This doesnt seem to work atm. Working on an fix | repojs.repo.document.appendImage(document.getElementById('out'), "https://example.com/example.png"); |
| repojs.repo.convert() | selectedRepoUrl, selectedRepoUrlTemplateFile, finalRepoTemplateFile | E- | This is under developement, this is used to convert one repo format into antoher | repojs.repo.document.convert("https://example.com/example.json", "scarlet", "scylla"); |

[https://puffer.is-a.dev/projects/repojs/](https://puffer.is-a.dev/projects/repojs/)
