import type { BookId, Genre, LoanStatus } from "./types";
import { LoanStatus as LoanStatusEnum } from "./types";

interface BookOptions {
  id: BookId;
  title: string;
  author: string;
  year: number;
  genre: Genre;
}

export class Book {
  id: BookId;
  title: string;
  author: string;
  year: number;
  genre: Genre;

  private status: LoanStatus;
  private borrowedBy: string | null;

  constructor(opts: BookOptions) {
    this.id = opts.id;
    this.title = opts.title;
    this.author = opts.author;
    this.year = opts.year;
    this.genre = opts.genre;
    this.status = LoanStatusEnum.Available;
    this.borrowedBy = null;
  }

  getStatus(): LoanStatus {
    return this.status;
  }

  markBorrowed(personName: string): void {
    if (this.status === LoanStatusEnum.Borrowed) {
      throw new Error(`Already borrowed by ${this.borrowedBy}`);
    }
    this.status = LoanStatusEnum.Borrowed;
    this.borrowedBy = personName;
  }

  markReturned(): void {
    if (this.status === LoanStatusEnum.Available) {
      throw new Error("Already available");
    }
    this.status = LoanStatusEnum.Available;
    this.borrowedBy = null;
  }

  getInfo(): string {
    if (this.status === LoanStatusEnum.Available) {
      return `${this.title} — ${this.author} (${this.year}), ${this.genre} [Available]`;
    }
    return `${this.title} — ${this.author} (${this.year}), ${this.genre} [Borrowed by ${this.borrowedBy}]`;
  }
}
