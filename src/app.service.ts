import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const string = this.createNumbers(4).toString();
    return string;
  }
  createNumbers(playerCount: number = 4): number[] {
    let numbers: number[] = []
    while (numbers.length < playerCount) {
      let randomNumber = Math.floor(Math.random() * 100)
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber)
      }
    }
    return numbers
  }
}