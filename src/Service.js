import axios from "axios";

class ServeralClient {
  url = 'https://678ed693a64c82aeb12183e7.mockapi.io/students';
  async get() {
    return await axios.get(this.url);
  }
  async getById(id) {
     return  await axios.get(`${this.url}/${id}`);
  }
  async post(dataBody) {
      return  await axios.post(this.url, dataBody);  
  }
  async put(id, dataBody) {
      return  await axios.put(`${this.url}/${id}`, dataBody);    
  }
  async delete(id) {
    return  await axios.delete(`${this.url}/${id}`);
  }
}

export const serveralClient = new ServeralClient();