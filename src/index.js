/*
    RepoJs:
        Main - Stable
    Contributors:
        - Kevin Alavik

*/
let fetchFn;
if (typeof window !== 'undefined' && typeof window.fetch === 'function') {
  // Code is running in a web browser
  fetchFn = window.fetch;
} else {
  // Code is running in Node.js
  const nodeFetch = require('node-fetch');
  fetchFn = nodeFetch.default;
}

const repojs = {
  init: function () {
    console.log("Successfully started the repojs process");
  },
  repo: {
    get: async function (url) {
      try {
        const response = await fetchFn(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching URL:", error);
        return null;
      }
    },
    parse: function (jsonData, pathString) {
      let finalData;
      if (!pathString) {
        finalData = jsonData;
        console.log(finalData);
        return finalData;
      }

      const path = pathString.split(".");
      let currentData = jsonData;
      for (let i = 0; i < path.length; i++) {
        const pathSegment = path[i];
        if (pathSegment.includes("[")) {
          const arrayPath = pathSegment.split("[");
          const arrayName = arrayPath[0];
          const index = parseInt(arrayPath[1].replace("]", ""));
          currentData = currentData[arrayName][index];
        } else {
          currentData = currentData[pathSegment];
        }
      }

      if (Array.isArray(currentData)) {
        const arrayPath = path[path.length - 1].split("[");
        const arrayName = arrayPath[0];
        const arrayValues = currentData.map((item) => item[arrayName]);
        finalData = arrayValues;
      } else {
        finalData = currentData;
      }

      console.log(finalData);
      return JSON.stringify(finalData, null, 2);
    },
    document: {
      append: function (data, element) {
        element.innerHTML = data;
      },
      appendImage: function (element, imageUrl) {
        element.src = imageUrl;
      },
    },
    convert: function (
      selectedRepoUrl,
      selectedRepoUrlTemplateFile,
      finalRepoTemplateFile
    ) {
      return fetchFn("src/stable/templates/" + selectedRepoUrlTemplateFile)
        .then((selectedRepoUrlTemplateFile) => {
          return selectedRepoUrlTemplateFile;
        })
        .catch((error) => {
          console.error(error);
          return null;
        });
    },
  },
};

export default repojs;