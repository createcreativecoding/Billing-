function myCalculation() {
   
    var q1 = document.getElementById("quantity1").value;
    var p1 = document.getElementById("myTable").rows[1].cells.namedItem("price1").innerHTML;
    var a1 = document.getElementById("amount1").innerHTML = q1 * p1;

    var q2 = document.getElementById("quantity2").value;
    var p2 = document.getElementById("myTable").rows[2].cells.namedItem("price2").innerHTML;
    var a2 = document.getElementById("amount2").innerHTML = q2 * p2;

    var q3 = document.getElementById("quantity3").value;
    var p3 = document.getElementById("myTable").rows[3].cells.namedItem("price3").innerHTML;
    var a3 = document.getElementById("amount3").innerHTML = q3 * p3;

    var q4 = document.getElementById("quantity4").value;
    var p4 = document.getElementById("myTable").rows[4].cells.namedItem("price4").innerHTML;
    var a4 = document.getElementById("amount4").innerHTML = q4 * p4;

    var q5 = document.getElementById("quantity5").value;
    var p5 = document.getElementById("myTable").rows[5].cells.namedItem("price5").innerHTML;
    var a5 = document.getElementById("amount5").innerHTML = q5 * p5;

    var q6 = document.getElementById("quantity6").value;
    var p6 = document.getElementById("myTable").rows[6].cells.namedItem("price6").innerHTML;
    var a6 = document.getElementById("amount6").innerHTML = q6 * p6;

    var q7 = document.getElementById("quantity7").value;
    var p7 = document.getElementById("myTable").rows[7].cells.namedItem("price7").innerHTML;
    var a7 = document.getElementById("amount7").innerHTML = q7 * p7;

    var q8 = document.getElementById("quantity8").value;
    var p8 = document.getElementById("myTable").rows[8].cells.namedItem("price8").innerHTML;
    var a8 = document.getElementById("amount8").innerHTML = q8 * p8;

    var q9 = document.getElementById("quantity9").value;
    var p9 = document.getElementById("myTable").rows[9].cells.namedItem("price9").innerHTML;
    var a9 = document.getElementById("amount9").innerHTML = q9 * p9;

    var q10 = document.getElementById("quantity10").value;
    var p10 = document.getElementById("myTable").rows[10].cells.namedItem("price10").innerHTML;
    var a10 = document.getElementById("amount10").innerHTML = q10 * p10;

    var s = document.getElementById("sum").innerHTML = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10;
}

