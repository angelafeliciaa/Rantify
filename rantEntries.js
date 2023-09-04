//rantEntries
var moodEntry = null;
var journalsData = [];
function openRantify(){
  window.location.href = "rantify.html";
}
function openThankYouPage(){
  window.location.href = "thankyou.html";
}
function getMoodIconClass(moodValue) {
  switch (moodValue) {
  case 1:
    return ["fa-solid", "fa-face-angry"];
  case 2:
    return ["fa-solid", "fa-face-frown"];
  case 3:
    return ["fa-solid", "fa-face-meh"];
  case 4:
    return ["fa-solid", "fa-face-smile"];
  case 5:
    return ["fa-solid", "fa-face-laugh-beam"];
  default:
    return [];
  }
}
function getMoodColor(moodValue) {
  switch (moodValue) {
  case 1:
    return "#b51a00";
  case 2:
    return "#ff6a00";
  case 3:
    return "#ffaa00";
  case 4:
    return "#9dc300";
  case 5:
    return "#00c400";
  default:
    return "";
  }
}
function createTable(data) {
  var table = document.createElement("table");
  table.classList.add("table", "table-striped"); // Add Bootstrap classes

  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  for (var key in data[0]) {
    var th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  var tbody = document.createElement("tbody");
  for (var i = 0; i < data.length; i++) {
    var row = document.createElement("tr");

    // Create first column with custom HTML content based on mood data
    var moodCell = document.createElement("td");
    var moodValue = data[i]["mood"];
    var moodIcon = document.createElement("i");
    moodIcon.id = "mood" + moodValue;
    getMoodIconClass(moodValue).forEach(function (className) {
      moodIcon.classList.add(className);
    });
    moodIcon.style.cssText =
    "color: " +
    getMoodColor(moodValue) +
    "; font-size: 50px; padding: 10px; padding-top: 15px;";
    moodCell.appendChild(moodIcon);
    row.appendChild(moodCell);

    // Create remaining columns with regular data
    for (var key in data[i]) {
      if (key !== "mood") {
        var cell = document.createElement("td");
        cell.textContent = data[i][key];
        row.appendChild(cell);
      }
    }

    // delete entry
    var deleteEntry = document.createElement("td");
    var deleteButton = document.createElement("i");
    deleteButton.classList.add("fas", "fa-trash", "delete-button");
    deleteButton.setAttribute("data-row", i); 
    deleteButton.addEventListener("click", deleteRow);
    deleteEntry.appendChild(deleteButton);
    row.appendChild(deleteEntry);

    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  return table;
}

function deleteRow(event) {
  var row = event.target.getAttribute("data-row");
  if (row !== null) {
    journalsData.splice(row, 1); 
    localStorage.setItem(logged, JSON.stringify(journalsData)); 
    var tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = ""; 
    var table = createTable(journalsData);
    tableContainer.appendChild(table); 
  }
}


var storedData = localStorage.getItem(logged);
if (storedData) {
  journalsData = JSON.parse(storedData);
  var table = createTable(journalsData);
  document.getElementById("table-container").appendChild(table);
}