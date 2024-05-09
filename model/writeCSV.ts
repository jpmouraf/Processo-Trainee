import { Item } from './interfaceItem.js.js';
import fs from 'fs';
import csv from 'csv-parser';

import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

export const writeCSV = async (filePath: string, data: Item[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'NOME' },
      { id: 'peso', title: 'PESO' },
      { id: 'valor', title: 'VALOR' },
      { id: 'quantidade', title: 'QUANTIDADE' },
    ],
  });

  return csvWriter.writeRecords(data);
};