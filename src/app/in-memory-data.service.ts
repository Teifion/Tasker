import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 1, name: 'Task - Circle', assigned_to: 'Bob', progress: 40, status: 'Outlined', log: ['Created task', 'Updated to Edge at 40%'] }
    ];
    return {tasks};
  }
}