const axios = require("axios");

const api = axios.create({
  baseURL: "https://testmakrr.herokuapp.com/exams/",
});

module.exports = api;
