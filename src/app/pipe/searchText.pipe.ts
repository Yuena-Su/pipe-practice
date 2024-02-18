import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../app.component';

@Pipe({
  name: 'searchText',
  standalone: true,
})
export class searchTextPipe implements PipeTransform {
  transform(users: User[], text: string): User[] {
    if (!text) return users;
    let res = users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(text.toLowerCase()) ||
        user.lastName.toLowerCase().includes(text.toLowerCase())
      );
    });
    return res;
  }
}
