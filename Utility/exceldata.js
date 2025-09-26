import excel from 'exceljs';

export class celldata{

    async getCellValue(path, sheetname, rowno, cellno) {
        const book = new excel.Workbook()
        await book.xlsx.readFile(path)
        const sheet = await book.getWorksheet(sheetname)
        const cellvalue = await sheet.getRow(rowno).getCell(cellno).value
        return cellvalue
    }

}

export class rowdata{

    async getRowValue(path, sheetname){
        const book = new excel.Workbook()
        await book.xlsx.readFile(path)
        const sheet = await book.getWorksheet(sheetname)
        let temp = []
        for(let i=1; i<=sheet.columnCount ; i++){
            let value = await sheet.getRow(2).getCell(i).value
            temp.push(value)
        }

        return temp
    }
}

export class alldata{
    async getalldata(path, sheetname){
        const book = new excel.Workbook()
        await book.xlsx.readFile(path)
        const sheet = await book.getWorksheet(sheetname)
        let final = []
        for(let i=1; i<= sheet.rowCount; i++){
            let temp = []
            for(let j=1; j<= sheet.columnCount; j++){
                let value = await sheet.getRow(i).getCell(j).value
                temp.push(value)
            }
            final.push(temp)
        }

        return final
    }
    
}