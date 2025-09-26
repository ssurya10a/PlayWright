import excel from 'exceljs';

export class exceldata{

    async getCellValue(path, sheetname, rowno, cellno) {
        const book = new excel.Workbook()
        await book.xlsx.readFile(path)
        const sheet = await book.getWorksheet(sheetname)
        const cellvalue = await sheet.getRow(rowno).getCell(cellno).value
        return cellvalue
    }

}