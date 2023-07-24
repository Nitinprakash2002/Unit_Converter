function reaction(temp)
{
    
    if(temp==1)
    {
        document.getElementById("1").placeholder="Kilogram((kg)";
        document.getElementById("11").placeholder="Gram(g)";
        document.getElementById("kgtg").num="100";
        document.getElementById("kgtlb").num="";
        document.getElementById("gtkg").num="";
        document.getElementById("gtmg").num="";
        document.getElementById("mgtg").num="";
    }
    else if(temp==2)
    {
        document.getElementById("1").placeholder="Kilogram(kg)";
        document.getElementById("11").placeholder="Pound(lbs)";
        document.getElementById("kgtg").num="";
        document.getElementById("kgtlb").num="100";
        document.getElementById("gtkg").num="";
        document.getElementById("gtmg").num="";
        document.getElementById("mgtg").num="";
    }
    else if(temp==3)
    {
        document.getElementById("1").placeholder="Gram(g)";
        document.getElementById("11").placeholder="Kilogram(Kg)";
        document.getElementById("kgtg").num="";
        document.getElementById("kgtlb").num="";
        document.getElementById("gtkg").num="100";
        document.getElementById("gtmg").num="";
        document.getElementById("mgtg").num="";
    }
    else if(temp==4)
    {
        document.getElementById("1").placeholder="Gram(g)";
        document.getElementById("11").placeholder="Miligram(mg)";
        document.getElementById("kgtg").num="";
        document.getElementById("kgtlb").num="";
        document.getElementById("gtkg").num="";
        document.getElementById("gtmg").num="100";
        document.getElementById("mgtg").num="";
    }
    else if(temp==5)
    {
        document.getElementById("1").placeholder="Miligram(mg)";
        document.getElementById("11").placeholder="Gram(g)";
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
            document.getElementById("1").placeholder=0+" "+"kg";
            document.getElementById("11").placeholder="Gram(g)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"kg";
            document.getElementById("11").placeholder=1000*parseFloat(get1)+" "+"grams";
        }
    }
    else if(temp2==100 && document.getElementById("kgtlb").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"kg";
            document.getElementById("11").placeholder="Pounds(lbs)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"kg";
            document.getElementById("11").placeholder=2.205*parseFloat(get1)+" "+"lbs";
        }
    }
    else if(temp2==100 && document.getElementById("gtkg").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"g";
            document.getElementById("11").placeholder="Kilograms(Kg)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"g";
            document.getElementById("11").placeholder=0.001*parseFloat(get1)+" "+"Kg";
        }
    }
    else if(temp2==100 && document.getElementById("gtmg").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"g";
            document.getElementById("11").placeholder="Miligrams(mg)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"g";
            document.getElementById("11").placeholder=1000*parseFloat(get1)+" "+"mg";
        }
    }
    else if(temp2==100 && document.getElementById("mgtg").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"mg";
            document.getElementById("11").placeholder="Grams(g)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"mg";
            document.getElementById("11").placeholder=0.001*parseFloat(get1)+" "+"g";
        }
    }
}
