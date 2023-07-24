function reaction(temp)
{
    
    if(temp==1)
    {
        document.getElementById("1").placeholder="Celsius(C)";
        document.getElementById("11").placeholder="Fahrenheit(F)";
        document.getElementById("kgtg").num="100";
        document.getElementById("kgtlb").num="";
        document.getElementById("gtkg").num="";
        document.getElementById("gtmg").num="";
        document.getElementById("mgtg").num="";
    }
    else if(temp==2)
    {
        document.getElementById("1").placeholder="Fahrenheit(F)";
        document.getElementById("11").placeholder="Celsius(C)";
        document.getElementById("kgtg").num="";
        document.getElementById("kgtlb").num="100";
        document.getElementById("gtkg").num="";
        document.getElementById("gtmg").num="";
        document.getElementById("mgtg").num="";
    }
    else if(temp==3)
    {
        document.getElementById("1").placeholder="Celsius(C)";
        document.getElementById("11").placeholder="Kelvin(K)";
        document.getElementById("kgtg").num="";
        document.getElementById("kgtlb").num="";
        document.getElementById("gtkg").num="100";
        document.getElementById("gtmg").num="";
        document.getElementById("mgtg").num="";
    }
    else if(temp==4)
    {
        document.getElementById("1").placeholder="Kelvin(K)";
        document.getElementById("11").placeholder="Celsius(C)";
        document.getElementById("kgtg").num="";
        document.getElementById("kgtlb").num="";
        document.getElementById("gtkg").num="";
        document.getElementById("gtmg").num="100";
        document.getElementById("mgtg").num="";
    }
    else if(temp==5)
    {
        document.getElementById("1").placeholder="Kelvin(K)";
        document.getElementById("11").placeholder="Fahrenheit(F)";
        document.getElementById("kgtg").num="";
        document.getElementById("kgtlb").num="";
        document.getElementById("gtkg").num="";
        document.getElementById("gtmg").num="";
        document.getElementById("mgtg").num="100";
    }
}
function reaction1(temp2)
{
    if(temp2==100 && document.getElementById("1").placeholder=="")
    {
         alert("Please Select a unit first");
    }
    else if(temp2==100 && document.getElementById("kgtg").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"C";
            document.getElementById("11").placeholder="Fahrenheit(F)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"C";
            document.getElementById("11").placeholder=((9/5*parseFloat(get1))+32)+" "+"F";
        }
    }
    else if(temp2==100 && document.getElementById("kgtlb").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"F";
            document.getElementById("11").placeholder="Celsius(C)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"F";
            document.getElementById("11").placeholder=((parseFloat(get1)-32)*5/9)+" "+"C";
        }
    }
    else if(temp2==100 && document.getElementById("gtkg").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"C";
            document.getElementById("11").placeholder="Kelvin(K)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"C";
            document.getElementById("11").placeholder=parseFloat(get1)+273.15+" "+"K";
        }
    }
    else if(temp2==100 && document.getElementById("gtmg").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"K";
            document.getElementById("11").placeholder="Celsius(C)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"K";
            document.getElementById("11").placeholder=parseFloat(get1)-273.15+" "+"C";
        }
    }
    else if(temp2==100 && document.getElementById("mgtg").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"K";
            document.getElementById("11").placeholder="Fahrenheit(F)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"K";
            document.getElementById("11").placeholder=(parseFloat(get1)-273.15)*9/5+32+" "+"F";
        }
    }
}
