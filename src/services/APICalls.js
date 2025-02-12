import axios from 'axios';


const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3434',
    'mode': 'no-cors'
}
class APICalls {

    getAllItems() {
        return axios.get("http://localhost:3434/getAllItems", { headers, mode: 'no-cors', });
    }
    getAllVegItems() {
        return axios.get("http://localhost:3434/getAllVegItems", { headers, mode: 'no-cors', });
    }

    getAllNonVegItems() {
        return axios.get("http://localhost:3434/getAllNonVegItems", { headers, mode: 'no-cors', });
    }

    getAllIColdDrinktems() {
        return axios.get("http://localhost:3434/getAllIColdDrinktems", { headers, mode: 'no-cors', });
    }

    createOrder(employee) {
        console.log(employee);
        return axios.post("http://localhost:3434/createOrder", employee, { headers, mode: 'no-cors', });
    }

    getAllOrdersByCusID(employeeId) {
        console.log(employeeId);
        return axios.get("http://localhost:3434/getAllOrdersByCusID/" + employeeId, { headers, mode: 'no-cors', });
    }

    getAllOrders() {
        return axios.get("http://localhost:3434/getAllOrders", { headers, mode: 'no-cors', });
    }

    getAllPaidUnpaidOrders() {
        return axios.get("http://localhost:3434/getAllOrders", { headers, mode: 'no-cors', });
    }

    login(employee) {
        console.log('===>', employee);
        return axios.post("http://localhost:3434/login", employee, { headers, mode: 'no-cors', });
    }


    payNow(id) {
        return axios.get("http://localhost:3434/payNow/" + id, { headers, mode: 'no-cors', });
    }

    createFeedback(employee) {
        console.log(employee);
        return axios.post("http://localhost:3434/createFeedback", employee, { headers, mode: 'no-cors', });
    }
    

    getAllFeedbacks() {
        return axios.get("http://localhost:3434/getAllFeedbacks", { headers, mode: 'no-cors', });
    }

}

export default new APICalls()