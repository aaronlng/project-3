import axios from "axios";

export default {

    getBandMessage: function (id) {
        return axios.get("../api/message/" + id)
    },

    createMember: function (memberData) {
        // Post route to create member information
        return axios.post("../api/member", memberData)
    },

    postMessage: function (message) {
        return axios.post("../api/message", message)
    },

    getMembers: function () {
        return axios.get("/api/member")
    },

    getMemberById: function (id) {
        console.log("in this funciton")
        return axios.get("/api/member/" + id)
    },

    getBandById: function (id) {
        return axios.get("/api/band/" + id)
    },

    getMembersByName: function (name) {
        return axios.get("/api/membername/" + name)
    },

    getMembersByGenre: function (genre) {
        return axios.get("/api/membergenre/" + genre)
    },

    getBandsByName: function (name) {
        return axios.get("api/bandname/" + name)
    },

    getBandsByGenre: function (genre) {
        return axios.get("api/bandgenre/" + genre)
    },

    getBands: function () {
        return axios.get("/api/bands")
    },

    getProfile: function (id) {
        // post route to get a single member profile
        return axios.get("../api/member/" + id)
    },

    fileUpload: function (data) {
        return axios.post("../api/upload", data)
    },

    createPost: function (data) {
        return axios.post("../api/post", data)
    },

    getPost: function(){
        return axios.get("../api/post")
    }
};
