import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:3000/api", //for web browser
    baseURL: "http://10.100.102.43:3000/api", //for android device/emulator1
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
});