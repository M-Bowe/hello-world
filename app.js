// Copyright 2018, Google LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const express = require('express');

const app = express();

function reverseString(str) {
    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    return joinArray; // "olleh"
}

app.get('/', (req, res) => {
  context.log(`GET 200`);
  res.status(200).send(`Send a POST request in the form of /:'string' for string reversal`);
});

app.post('/:string', (req, res) => {
  let input = req.params.string;
  let reverse = reverseString(input);
  context.log(`POST 200: ${input} reversed to ${reverse}`);
  res.status(200).send(`String ${input} reversed into ${reverse}`);
})

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
