"use strict";

//Convert Button
document
  .getElementsByClassName("convert")[0]
  .addEventListener("click", getJSONFromTextArea);

//Format Button
document
  .getElementsByClassName("format")[0]
  .addEventListener("click", formatJSONInTextArea);

//Clear Button
document
  .getElementsByClassName("clear")[0]
  .addEventListener("click", clearTextAreas);

//Convert button function
function getJSONFromTextArea() {
  let jsonTextarea = document.getElementById("json-textarea").value;
  let header = [];
  let uniqueHeader = [];
  let values = [];

  //JSON Validation
  if (jsonTextarea.length == 0) {
    displayError();
    return;
  }
  try {
    JSON.parse(jsonTextarea);
  } catch (e) {
    displayError();
    return;
  }

  //Manipulation of the json textarea value with usage of regex
  jsonTextarea = jsonTextarea.split(",");
  for (let i = 0; i < jsonTextarea.length; i++) {
    jsonTextarea[i] = jsonTextarea[i].replace(/[^a-zA-Z0-9-']/g, " ").trim();
    jsonTextarea[i] = jsonTextarea[i].split(/\s{2,}/g);
  }

  let merged = jsonTextarea.flat(1);
  console.log(merged);
  for (let i = 0; i < merged.length; i++) {
    if (i % 2 == 0) {
      header.push(merged[i]);
    } else {
      values.push(merged[i]);
    }
  }

  header = remove_duplicates(header);

  let valuesString = "",
    splitAt = header.length;
  for (let i = 0; i < values.length; i++) {
    if ((i + 1) % splitAt == 0) {
      valuesString += `${values[i]};\n`;
    } else {
      valuesString += `${values[i]};`;
    }
  }

  header = header.join(";");
  values = valuesString;

  let csvTextArea = header + "\n" + values;
  document.getElementById("csv-textarea").value = csvTextArea;
}

//Format button function
function formatJSONInTextArea() {
  let jsonTextarea = document.getElementById("json-textarea");

  //JSON Validation
  try {
    JSON.parse(jsonTextarea.value);
  } catch (e) {
    displayError();
    return;
  }

  jsonTextarea.value = JSON.stringify(JSON.parse(jsonTextarea.value), null, 3);
}

//Clear button function
function clearTextAreas() {
  let csvTextArea = document.getElementById("csv-textarea");
  csvTextArea.value = "";
  let jsonTextarea = document.getElementById("json-textarea");
  jsonTextarea.value = "";
}

//Warning message prompt
function displayError() {
  alert("Please enter a valid JSON format!");
}

//Output/Array formatting
//Removes all duplicate elements in an array
function remove_duplicates(arr) {
  let obj = {};
  let ret_arr = [];
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  for (let key in obj) {
    ret_arr.push(key);
  }
  return ret_arr;
}

/* Format + Convert test
[
{
"squadName": "Super hero squad",
"homeTown": "Metro City",
"formed": 2016,
"secretBase": "Super tower",
"active": true
},{"squadName": "Evil squad","homeTown": "Metro City",
"formed": 2010,
"secretBase": "Super secret tower",
"active": false
}
]
*/
/* Invalid JSON test
[
  {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016
    "secretBase": "Super tower",
    "active": true
  }
  {
    "squadName": "Evil squad",
    "homeTown": "Metro City",
    "formed": 2010,
    "secretBase": "Super secret tower"
    "active": false
  }
]
*/
/* Invalid format test
[
{
"squadName": "Super hero squad",
"homeTown": "Metro City",
"formed": 2016
"secretBase": "Super tower",
"active": true
}{"squadName": "Evil squad""homeTown": "Metro City",
"formed": 2010,
"secretBase": "Super secret tower"
"active": false
}
]
*/
