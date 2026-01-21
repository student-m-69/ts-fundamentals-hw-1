export type BookId = string;

export const Genre = {
  Fiction: "fiction",
  Science: "science",
  History: "history",
  Fantasy: "fantasy",
  Dystopian: "dystopian",
} as const;
export type Genre = (typeof Genre)[keyof typeof Genre];

export const LoanStatus = {
  Available: "available",
  Borrowed: "borrowed",
} as const;
export type LoanStatus = (typeof LoanStatus)[keyof typeof LoanStatus];
