import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 1, name: 'Circle', owner: 'Bob', progress: 40, status: 'Outlined', log: ['Created task', 'Updated to Outlined at 40%'] },
      { id: 2, name: 'Triangle', owner: 'Susan', progress: 33, status: 'Top third complete', log: ['Created task', 'Updated to Edge at 20%', 'Updated to Top third complete at 33%'] },
      { id: 3, name: 'Square', owner: 'Bob', progress: 0, status: 'Task started', log: ['Created task'] },
      { id: 4, name: 'Pentagon', owner: 'Bob', progress: 100, status: 'Task completed', log: ['Created task', 'Updated to Outlined at 20%', 'Updated to Left half at 50%', 'Updated to Polishing at 90%', 'Task completed'] },
      { id: 5, name: 'Hexagon', owner: 'Susan', progress: 0, status: 'Task started', log: ['Created task'] }
    ];
    return {tasks};
  }
}