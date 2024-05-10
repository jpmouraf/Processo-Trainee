import { Item } from './interfaceItem';
import fs from 'fs';
import csv from 'csv-parser';

import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

export const writeCSV = async (filePath: string, data: Item[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'nome' },
      { id: 'peso', title: 'peso' },
      { id: 'valor', title: 'valor' },
      { id: 'quantidade', title: 'quantidade' },
    ],
  });

  return csvWriter.writeRecords(data);
};