//! .d.ts uzantılı dosyaları typescript dosyası olarak tanımlamak için kullanılır.

interface ITodoType {
  id: string | number;
  isDone: boolean;
  task: string;
  todo?: string;
}

type AddFn = (text: string) => Promise<void>;
type ToggleFn = (todo: ITodoType) => Promise<void>;
type DeleteFn = (id: string | number) => Promise<void>;
