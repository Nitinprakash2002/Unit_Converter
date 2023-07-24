function reaction(temp)
{
    
    if(temp==1)
    {
        document.getElementById("1").placeholder="Pascal(Pa)";
        document.getElementById("11").placeholder="Bar(bar)";
        document.getElementById("kgtg").num="100";
        document.getElementById("kgtlb").num="";
        document.getElementById("gtkg").num="";
        document.getElementById("gtmg").num="";
        document.getElementById("mgtg").num="";
    }
    else if(temp==2)
    {
        document.getElementById("1").placeholder="Bar(bar)";
        document.getElementById("11").placeholder="pascal(Pa)";
        document.getElementById("kgtg").num="";
        document.getElementById("kgtlb").num="100";
        document.getElementById("gtkg").num="";
        document.getElementById("gtmg").num="";
        document.getElementById("mgtg").num="";
    }
    else if(temp==3)
    {
        document.getElementById("1").placeholder="Bar(bar)";
        document.getElementById("11").placeholder="psi";
        document.getElementById("kgtg").num="";
        document.getElementById("kgtlb").num="";
        document.getElementById("gtkg").num="100";
        document.getElementById("gtmg").num="";
        document.getElementById("mgtg").num="";
    }
    else if(temp==4)
    {
        document.getElementById("1").placeholder="psi";
        document.getElementById("11").placeholder="Bar(bar)";
        document.getElementById("kgtg").num="";
        document.getElementById("kgtlb").num="";
        document.getElementById("gtkg").num="";
        document.getElementById("gtmg").num="100";
        document.getElementById("mgtg").num="";
    }
    else if(temp==5)
    {
        document.getElementById("1").placeholder="psi";
        document.getElementById("11").placeholder="Kilo Pascal(kPa)";
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
            document.getElementById("1").placeholder=0+" "+"Pascal(Pa)";
            document.getElementById("11").placeholder="Bar(bar)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"Pa";
            document.getElementById("11").placeholder=parseFloat(get1)/100000+" "+"bar";
        }
    }
    else if(temp2==100 && document.getElementById("kgtlb").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"Bar(bar)";
            document.getElementById("11").placeholder="Pascal(Pa)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"bar";
            document.getElementById("11").placeholder=parseFloat(get1)*100000+" "+"Pa";
        }
    }
    else if(temp2==100 && document.getElementById("gtkg").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"Bar(bar)";
            document.getElementById("11").placeholder="psi(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"bar";
            document.getElementById("11").placeholder=parseFloat(get1)*14.504+" "+"psi";
        }
    }
    else if(temp2==100 && document.getElementById("gtmg").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"psi";
            document.getElementById("11").placeholder="Bar(bar)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"psi";
            document.getElementById("11").placeholder=parseFloat(get1)/14.504+" "+"bar";
        }
    }
    else if(temp2==100 && document.getElementById("mgtg").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"psi";
            document.getElementById("11").placeholder="Kilo pascal(kPa)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"psi";
            document.getElementById("11").placeholder=(parseFloat(get1)*6895)/1000+" "+"kPa";
        }
    }
}