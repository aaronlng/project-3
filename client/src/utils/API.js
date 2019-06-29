import axios from "axios";

export default {
  getChat: function(id) {
    return axios.get("/api/chat/" + id);
  },

  getMembers: function() {
    return axios.get("/api/member");
  },

  getMembersByName: function(name) {
    return axios.get("/api/membername/" + name);
  },

  getMembersByGenre: function(genre) {
    return axios.get("/api/membergenre/" + genre);
  },

  getBandsByName: function(name) {
    return axios.get("api/bandname/" + name);
  },

  getBandsByGenre: function(genre) {
    return axios.get("api/bandgenre/" + genre);
  },

  getProfile: function(id) {
    // post route to get a single member profile
    return axios.get("../api/member/" + id);
  },

  postMessage: function(message) {
    return axios.post("../api/message", message);
  },

  getBands: function() {
    return axios.get("/api/bands");
  },

  createMember: function(data) {
    return axios.post("/memberSignup", data);
  },

  createBand: function(data) {
    return axios.post("/bandSignup", data);
  },

  getBandMessage: function(id) {
    return axios.get("../api/message/" + id);
  },

  getMemberMessage: function(id) {
    console.log("membermessage api");
    return axios.get("../api/membermessage/" + id);
  },

  postMessage: function(message) {
    return axios.post("../api/message", message);
  },

  postMemberMessage: function(message) {
    return axios.post("../api/membermessage", message);
  },

  getBandById: function(id) {
    return axios.get("/api/band/" + id);
  },

  getMemberById: function(id) {
    return axios.get("/api/member/" + id);
  },

  getBandProfile: function(id) {
    // post route to get a single member profile
    return axios.get("../api/band/" + id);
  },

  fileUpload: function(data) {
    return axios.post("../api/upload", data);
  },

  createMemberChat: function(id) {
    return axios.post("../api/memberchatroom/" + id);
  },

  createBandChat: function(id) {
    return axios.post("../api/bandchatroom/" + id);
  },

  createPost: function(data) {
    return axios.post("../api/post", data);
  },

  getPost: function() {
    return axios.get("../api/post");
  },

  validate: function(data) {
    return axios.post("/bandSignin", data);
  },
  validateSolo: function(data) {
    return axios.post("/memberSignin", data);
  }
};
