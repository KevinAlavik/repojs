/*
    RepoJs:
        Main - Stable
    Contributors:
        - Kevin Alavik

*/

const repojs = {
  init: function () {
    console.log("Successfully started the repojs process");
  },
  repo: {
    fetch: async function (url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching URL:', error);
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
      return finalData;
    },
    document: {
      append: function (data, element) {
        const formattedData = JSON.stringify(data, null, 2);
        element.innerHTML = '<pre>' + formattedData + '</pre>';
      }
    }
  }
};