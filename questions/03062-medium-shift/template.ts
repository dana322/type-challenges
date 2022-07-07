type Shift<T extends any[]> = T extends [unknown, ...infer K]? K : never
