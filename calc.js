
            let op=document.getElementById("t1");
            function display (x)
            {
                document.getElementById("t1").innerHTML+=x;
            }
            function result()
            {
            var t=document.getElementById("t1").innerHTML;
            r=eval(t);
            document.getElementById("t1").innerHTML=r;
            }
            function clear()
            {
             op.value="";
            }
       