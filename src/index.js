/*
    RepoJs:
        Main - Stable
    Contributors:
        - Kevin Alavik

*/
let fetchFn;
if (typeof window !== "undefined" && typeof window.fetch === "function") {
  // Code is running in a web browser
  fetchFn = window.fetch;
} else {
  // Code is running in Node.js
  const fetch = require("isomorphic-fetch");
  fetchFn = fetch;
}

const repojs = {
  init: function () {
    console.log("%c Repojs was successfully started", "color: orange");
  },
  repo: {
    get: async function fetchData(url) {
      try {
        const response = await fetchFn(url);
        const data = await response.json(); // Parse the response body as JSON
        return data;
      } catch (error) {
        console.error("Error fetching URL:", error);
        return null;
      }
    },
    getAllCategories: function (data, excludedCategory) {
      const result = [];

      for (let key in data) {
        if (key !== excludedCategory && Array.isArray(data[key])) {
          result.push(...data[key]);
        }
      }

      return result;
    },
    loadMulti: async function (data) {
      const final = [];
      for (let i = 0; i < data.length; i++) {
        const result = await repojs.repo.get(data[i]); // Wait for the get() function to fetch the data
        final.push(result);
      }
      return final;
    },
    parse: function (jsonData, pathString) {
      let finalData;
      if (!pathString) {
        finalData = jsonData;
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

if (typeof window !== "undefined" && typeof window.fetch === "function") {
  window.repojs = repojs;
} else {
  module.exports = repojs;
}
