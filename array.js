function arrayS(data_arrey) {
  let html = '';
  for (let i = 0; i < data.length; i++) {
    const languageName = data_arrey[i].language;
    const popularity = data_arrey[i].popularity;
 let bar;
    if (popularity < 1) {
      bar = `<div class="bar" style=" background-color: gray; width: ${popularity}%"></div><div style="font-size: 1.2em;">${popularity}</div>`;
    } else {
      bar = `<div class="bar bar_green" style="color:white; background-color: green; width: ${popularity}%"><div>${popularity}</div></div>`;
    }
    const label = `<div class="label">${languageName}</div>`;
    const graphRow = `<div class="graph-row">${label}${bar}</div>`;
    html += graphRow;
  }
  return `<div>${html}</div>`;
}

const data = [
  { id: 1, language: "JavaScript", popularity: 19.1 },
  { id: 2, language: "Java", popularity: 14 },
  { id: 3, language: "Python", popularity: 13.4 },
  { id: 4, language: "C#", popularity: 13.3 },
  { id: 5, language: "TypeScript", popularity: 13.3 },
  { id: 6, language: "PHP", popularity: 7.1 },
  { id: 7, language: "Kotlin", popularity: 3.2 },
  { id: 8, language: "C++", popularity: 2.8 },
  { id: 9, language: "DB", popularity: 2.7 },
  { id: 10, language: "Swift", popularity: 2.5 },
  { id: 11, language: "Go", popularity: 1.9 },
  { id: 12, language: "Ruby", popularity: 1.8 },
  { id: 13, language: "Dart", popularity: 1.1 },
  { id: 14, language: "Scala", popularity: 0.8 },
  { id: 15, language: "Apex", popularity: 0.7 },
  { id: 16, language: "C", popularity: 0.7 },
  { id: 17, language: "1C", popularity: 0.4 },
  { id: 18, language: "Groovy", popularity: 0.3 },
  { id: 19, language: "Rust", popularity: 0.3 },
];

const graphContainer = document.getElementById("graph-container");
graphContainer.innerHTML = arrayS(data);

