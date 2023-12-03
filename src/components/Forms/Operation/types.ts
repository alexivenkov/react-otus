export interface OperationInputs {
  name: string;
  category: string;
  sum: number;
  desc: string;
  date: Date;
}

export enum OperationFormTypes {
  create = 'create',
  update = 'update',
}
