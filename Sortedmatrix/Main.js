var TableSizeX = 3;
var TableSizeY = 3;
var arrSize = TableSizeX * TableSizeY; // размер матрицы
var arrayNum =[];
var  QuanNum = 0; // количество цифр
function CreateTable() {
    if(CheckNumber(document.getElementById("TextBox").value) == true) // Проверка число ли это
    {
        QuanNum++;
        if(QuanNum !== arrSize)
        {
            arrayNum.push(parseInt(document.getElementById("TextBox").value,10)); // добавляем элемент в масив и переводим в инт
        }
        else
        {
            arrayNum.push(parseInt(document.getElementById("TextBox").value,10));// добавление последнего элемента в масив
            arrayNum = SortNum(arrayNum); // сортировка масива
            for(var i = 0; i < TableSizeX; i++) // создание и заполнение таблицы
            {
                jQuery('#Table').append('<tr> <tr/>');
                for (var j = 0; j < TableSizeY; j++) {
                    jQuery('#Table  > tbody > tr:last').append('<td>' + arrayNum[QuanNum - 1]);
                    QuanNum--;
                }
            }
        }

    }
}
function CheckNumber(Num) { // проверка на число увы только на инт
    if(/[^[0-9]/.test(Num))
    {
        return false;
    }
    else
    {
        return true;
    }
}

function SortNum(arrNumb) // сортировка по спаданию но заполнение с конца поэтому вcё норм
{                         // решил просто сэхкономить на коде
    var tmpNum = 0;
  for(var i = 0; i < arrSize - 1; i++)
  {
      for(var j = 0; j < arrSize - 1 - i; j++)
      {
          if (arrNumb[j] < arrNumb[j + 1]) {
              tmpNum = arrNumb[j];
              arrNumb[j] = arrNumb[j + 1];
              arrNumb[j + 1] = tmpNum;
          }
      }
  }
    return arrNumb;
}