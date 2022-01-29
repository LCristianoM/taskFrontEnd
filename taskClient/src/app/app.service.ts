import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private http : HttpClient) { }

  getAll(){
    return this.http.get(`${API_URL}/tareas`);
  }

  createTask(task: any){
    return this.http.post(`${API_URL}/tareas`, task);
  }

  updateTask(id: string, task: any){
    return this.http.put(`${API_URL}/tareas/${ id }`, task);
  }

  deleteTask(id: string){
    return this.http.delete(`${API_URL}/tareas/${ id }`);
  }

}
