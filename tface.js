/*
    AI For Thai T-Face API
    NodeJS Demo
    https://aiforthai.in.th
    https://www.facebook.com/groups/aiforthai

    NECTEC NSTDA
    17/09/2020

*/

const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

const project_id = process.env.PROJECT_ID;
const api_key = process.env.API_KEY;

const url = "https://api.aiforthai.in.th/t-face/base64/" + project_id;
const image = "example.jpg";

const b64 = fs.readFileSync(image, { encoding: "base64" });

const searchFetch = async (b64) => {
  const res = await axios
    .post(
      url,
      { image: b64 },
      {
        headers: {
          "Content-Type": "application/json",
          Apikey: api_key,
        },
      }
    )
    .catch((error) => {
      result.innerHTML = error;
      return {};
    });
  return res.data;
};

(async () => {
  const res = await searchFetch(b64);
  console.log(res);
})();
