module.exports = function solveSudoku(matrix) {
    // your implementation
    var arr=[], brr=[], crr=[];                                //arr - массив текущего столба
    for (let i=0; i<9; i++) {                                  //brr - массив сектора
        for (let j=0; j<9; j++) {                              //crr - массив вставленных значений
            if (matrix[i][j]===0) {                            //ищем 0
                for (let i=0; i<9; i++) {                      //получаем массив столба, содержащего 0
                    arr[i]=matrix[i][j];
                }
                
                for (let k=1; k<=9; k++) {                     //вставляем значения
                    if(!matrix[i].some(element => {
                        return element===k;
                    }) && !arr.some(element => {
                        return element===k;
                    }))  {
                        matrix[i][j]=k;
                        crr.push(k);
                        break;
                    }
                }
                
            }
        }
    }
    return matrix;  
}
