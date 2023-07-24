function reaction(temp)
{
    
    if(temp==1)
    {
        document.getElementById("1").placeholder="Acre(ac)";
        document.getElementById("11").placeholder="Square foot(sq ft)";
        document.getElementById("kgtg").num="100";
        document.getElementById("kgtlb").num="";
        document.getElementById("gtkg").num="";
        document.getElementById("gtmg").num="";
        document.getElementById("mgtg").num="";
    }
    else if(temp==2)
    {
        document.getElementById("1").placeholder="Square foot(sq ft)";
        document.getElementById("11").placeholder="Acre(ac)";
        document.getElementById("kgtg").num="";
        document.getElementById("kgtlb").num="100";
        document.getElementById("gtkg").num="";
        document.getElementById("gtmg").num="";
        document.getElementById("mgtg").num="";
    }
    else if(temp==3)
    {
        document.getElementById("1").placeholder="Square foot(sq ft)";
        document.getElementById("11").placeholder="Square meter(sq mt)";
        document.getElementById("kgtg").num="";
        document.getElementById("kgtlb").num="";
        document.getElementById("gtkg").num="100";
        document.getElementById("gtmg").num="";
        document.getElementById("mgtg").num="";
    }
    else if(temp==4)
    {
        document.getElementById("1").placeholder="Square meter(sq mt)";
        document.getElementById("11").placeholder="Square foot(sq ft)";
        document.getElementById("kgtg").num="";
        document.getElementById("kgtlb").num="";
        document.getElementById("gtkg").num="";
        document.getElementById("gtmg").num="100";
        document.getElementById("mgtg").num="";
    }
    else if(temp==5)
    {
        document.getElementById("1").placeholder="Acre(ac)";
        document.getElementById("11").placeholder="Square miles(sq mi)";
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
            document.getElementById("1").placeholder=0+" "+"Acre(ac)";
            document.getElementById("11").placeholder="Square foot(sq ft)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"ac";
            document.getElementById("11").placeholder=parseFloat(get1)*43560+" "+"sq ft";
        }
    }
    else if(temp2==100 && document.getElementById("kgtlb").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"Square foot(sq ft)";
            document.getElementById("11").placeholder="Acre(ac)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"sq ft";
            document.getElementById("11").placeholder=parseFloat(get1)/43560+" "+"ac";
        }
    }
    else if(temp2==100 && document.getElementById("gtkg").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"square foot(sq ft)";
            document.getElementById("11").placeholder="Square meter(sq mt)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"sq ft";
            document.getElementById("11").placeholder=parseFloat(get1)/(10.764)+" "+"sq mt";
        }
    }
    else if(temp2==100 && document.getElementById("gtmg").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"Square meter(sq mt)";
            document.getElementById("11").placeholder="Square foot(sq ft)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"sq mt";
            document.getElementById("11").placeholder=parseFloat(get1)*10.764+" "+"sq ft";
        }
    }
    else if(temp2==100 && document.getElementById("mgtg").num=="100")
    {
        var get1=document.getElementById("get").value;
        if(get1=="")
        {
            document.getElementById("1").placeholder=0+" "+"Acre(ac)";
            document.getElementById("11").placeholder="Square miles(sq mi)(0)";
        }
        else
        {
            document.getElementById("1").placeholder=parseFloat(get1)+" "+"ac";
            document.getElementById("11").placeholder=parseFloat(get1)/640+" "+"sq mi";
        }
    }
}