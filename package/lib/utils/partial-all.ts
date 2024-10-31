export type PartialAll<T> = {
  [P in keyof T]?: T[P] extends object ? PartialAll<T[P]> : T[P];
};
