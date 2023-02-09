"use strict";

/*
getElementsByClassName => [0]
Button "Convert" calls the function "getJSONFromTextArea" on click
*/
document
  .getElementsByClassName("convert")[0]
  .addEventListener("click", getJSONFromTextArea);

//Button "Clear" calls the function "clearTextAreas" on click
document
  .getElementsByClassName("clear")[0]
  .addEventListener("click", clearTextAreas);

//Button "Format" calls the function "formatJSONInTextArea" on click
document
  .getElementsByClassName("format")[0]
  .addEventListener("click", formatJSONInTextArea);

/*
let => only available inside the block where they're defined
var => available throughout the function in which they're declared.

We get the value of the html element "json-textarea" and we give it's value to "jsonTextArea". After that we're checking if the input in the "json-textarea" box is valid. I plan on using the JSON.stringify function, which has parameters value, replacer, space. That's why I tell the replacer that it should contain 2 values: key and value, which are equivalent to "01 : squadName", "02 : homeTown" etc. and I check if the value is null => if the value ('squadName', 'homeTown', etc) is null then we replace that string with "", and if it has a value, we insert that value. Then I give the value of the first object in the "jsonObjectArray" to headers ("squadName", "homeTown", etc). Finally, I use a stirng called "csvString" to collect the outputs, which consists of joining the headers with a , divider and mapping the values "Super hero squad", "Metro City", etc., after which we join them with a , divider. We add a new line and insert the output in the csv textarea.
*/
function getJSONFromTextArea() {
  var jsonTextarea, csvTextArea, jsonObjectArray;

  jsonTextarea = document.getElementById("json-textarea").value;

  if (jsonTextarea.length == 0) {
    return;
  }
  try {
    jsonObjectArray = JSON.parse(jsonTextarea);
  } catch (e) {
    var csvTextArea = document.getElementsByClassName("csv-textarea")[0];
    csvTextArea.innerHTML = "WRONG JSON FORMAT";
    return;
  }

  const replacer = (key, value) => (value === null ? "" : value);
  const headers = Object.keys(jsonObjectArray[0]);
  const csvString = [
    headers.join(","),
    ...jsonObjectArray.map((row) =>
      headers
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(",")
    ),
  ].join("\r\n");

  csvTextArea = document.getElementsByClassName("csv-textarea")[0];
  csvTextArea.innerHTML = csvString;
}

/*
I plan on using the JSON.stringify function, which has parameters value, replacer, space. The "formatJSONInTextArea" functuon parses the value of the strings in "jsonTextarea" and parses them into JSON code, which we then turn to string again. To be honest, we only use this JSON.stringify for the space parameter.
*/
function formatJSONInTextArea() {
  var jsonTextarea = document.getElementById("json-textarea");
  try {
    JSON.parse(jsonTextarea.value);
  } catch (e) {
    var csvTextArea = document.getElementsByClassName("csv-textarea")[0];
    csvTextArea.innerHTML = "WRONG JSON FORMAT";
    return;
  }
  jsonTextarea.value = JSON.stringify(JSON.parse(jsonTextarea.value), null, 3);
}

/*
 The "clearTextAreas" functuon takes both textareas - "csv-textarea" and "json-textarea" and we set the value of the textarea boxes to an empty string, which should result in cleared textarea boxes.
*/
function clearTextAreas() {
  var csvTextArea = document.getElementsByClassName("csv-textarea")[0];
  csvTextArea.innerHTML = "";
  var jsonTextarea = document.getElementById("json-textarea");
  jsonTextarea.value = "";
}

/* converter test - working
[
  {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true
  },
  {
    "squadName": "Evil squad",
    "homeTown": "Metro City",
    "formed": 2010,
    "secretBase": "Super secret tower",
    "active": false
  }
]
*/

/* converter test - try catch
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

/* format test - working
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

/* format test - try catch
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
