function reaction(temp)
{
    
    if(temp==1)
    {
        document.getElementById("1").placeholder="Litre(L)";
        document.getElementById("11").placeholder="Gallon(US)";
        document.getElementById("ltus").num="100";
        document.getElementById("ustl").num="";
        document.getElementById("ltml").num="";
        document.getElementById("mltl").num="";
        document.getElementById("cctml").num="";
    }
    else if(temp==2)
    {
        document.getElementById("1").placeholder="Gallon(US)";
        document.getElementById("11").placeholder="Liter(L)";
        document.getElementById("ltus").num="";
        document.getElementById("ustl").num="100";
        document.getElementById("ltml").num="";
        document.getElementById("mltl").num="";
        document.getElementById("cctml").num="";
    }
    else if(temp==3)
    {
        document.getElementById("1").placeholder="Liter(l)";
        document.getElementById("11").placeholder="Mililiter(ml)";
        document.getElementById("ltus").num="";
        document.getElementById("ustl").num="";
        document.getElementById("ltml").num="100";
        document.getElementById("mltl").num="";
        document.getElementById("cctml").num="";
    }
    else if(temp==4)
    {
        document.getElementById("1").placeholder="Mililiter(ml)";
        document.getElementById("11").placeholder="Litre(l)";
        document.getElementById("ltus").num="";
        document.getElementById("ustl").num="";
        document.getElementById("ltml").num="";
        document.getElementById("mltl").num="100";
        document.getElementById("cctml").num="";
    }
    else if(temp==5)
    {
        document.getElementById("1").placeholder="Cubic Centimeter(cc)";
        document.getElementById("11").placeholder="Mililiter(ml)";
        document.getElementById("ltus").num="";
        document.getElementById("ustl").num="";
        document.getElementById("ltml").num="";
        document.getElementById("mltl").num="";
        document.getElementById("cctml").num="100";
    }
}
function reaction1(temp2)
{
    if(temp2==100 && document.getElementById("1").placeholder=="")
    {
         alert("Please Select a unit first");
    }
    else if(temp2==100 && document.getElementById("ltus").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"liters";
            document.getElementById("11").placeholder="Gallons(US)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"l";
            document.getElementById("11").placeholder=0.26417*parseFloat(get1)+" "+"gallons";
        }
    }
    else if(temp2==100 && document.getElementById("ustl").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"Gallons(US)";
            document.getElementById("11").placeholder="Liters(l)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"gallons";
            document.getElementById("11").placeholder=3.78541*parseFloat(get1)+" "+"l";
        }
    }
    else if(temp2==100 && document.getElementById("ltml").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"Litre(l)";
            document.getElementById("11").placeholder="Mililiter(ml)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"l";
            document.getElementById("11").placeholder=1000*parseFloat(get1)+" "+"ml";
        }
    }
    else if(temp2==100 && document.getElementById("mltl").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"Mililiter(ml)";
            document.getElementById("11").placeholder="Liter(l)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"ml";
            document.getElementById("11").placeholder=0.001*parseFloat(get1)+" "+"l";
        }
    }
    else if(temp2==100 && document.getElementById("cctml").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"Cubiccentimeter(cc)";
            document.getElementById("11").placeholder="Mililiter(ml)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"cc";
            document.getElementById("11").placeholder=1*parseFloat(get1)+" "+"ml";
        }
    }
}