var array = [];
var  arrbub = [];
var arrycoc = [];
var QuantityNumb = 2;
function Sorts()
{
    var tmpBubblesortArr;
    arrbub = new Array().concat(array);
    arrycoc = new Array().concat(array);
    var tmpBubblesortArr = new Array(bubbleSort(arrbub), cocktailSort(arrycoc));
    crtTable(tmpBubblesortArr);
}

function  AddValues()
{

    array.push(Number(document.getElementById("TextBox").value));
    document.getElementById("TextHead").innerHTML = 'Enter ' + QuantityNumb + ' number';
    document.getElementById("TextBox").value = '';
    QuantityNumb++;
}
function crtTable(arr)
{
    var QuanSorts = 3;
    var table = document.getElementById("Table");
    for (var i = 0; i < arr[0].length; i++)
    {
        jQuery(table).append('<tr> <tr/>');
        for (var j = 0; j < QuanSorts; j++) {
            switch (j) {
                case 0:
                    jQuery('table > tbody > tr:last').append('<td>' + (i + 1))
                    break;
                case 1:
                    jQuery('table > tbody > tr:last').append('<td>' + arr[j - 1][i])
                    break;
                case 2:
                    jQuery('table > tbody > tr:last').append('<td>' + arr[j - 1][i])
                    break;

            }

        }
    }
}
    function bubbleSort(arr) //returns a bubble step-sorted array
    {
        var arrSteps = [];
        var temp;
        for(var i = 0; i < arr.length - 1; i++)
        {
            for(var j = i + 1; j < arr.length; j++)
            {
                if(arr[i] > arr[j])
                {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    arrSteps.push(arr.toString());
                }

            }
        }
        return arrSteps;
    }

// returns a sorted bubble array
/*
 function bubbleSort(var arr)
 {
 var temp;
 for(var i = 0; i < arr.length - 1; i++)
 {
 for(var j = i + 1; j < arr.length;  j++)
 {
 if(arr[i] > arr[j])
 {
 temp = arr[i];
 arr[i] = arr[j];
 arr[j] = temp;
 }

 }
 }
 return arr
 }
 */

function  cocktailSort(arr)
{
    var firstElement = 0;
    var lastElement = arr.length - 1;
    var tmp;
    var arrSteps = [];
    while (firstElement < lastElement)
    {
        for(var i = firstElement; i < lastElement; i++)
        {
            if(arr[i] > arr[i + 1])
            {
                tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                arrSteps.push(arr.toString());
            }
        }
        lastElement--;

        for(var j = lastElement; j > firstElement; j--)
        {
            if(arr[j] < arr[j - 1])
            {
                tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
                arrSteps.push(arr.toString());
            }
        }
        firstElement++;
    }
    return arrSteps;
}