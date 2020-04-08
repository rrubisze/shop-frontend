import * as Axios from 'axios';

export class CustomersService {
    static httpCliet = Axios.default.create();

    static async getWP(): Promise<any[]> {
      const url = 'https://jsonplaceholder.typicode.com/todos/1';
      const response = await this.httpCliet.get<any>(url);
      return response.data.data;
    }
}
