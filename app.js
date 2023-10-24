window.onload=function() {
    const ingreso = document.getElementById("ing");
    const numero = document.querySelectorAll('.numero');
    const divi=document.getElementById('division');
    const multi=document.getElementById('multiplicacion');
    const resta=document.getElementById('resta');
    const suma=document.getElementById('suma');
    const igual=document.getElementById('igual');
    const clr_e=document.getElementById('clear-entry');
    const clr=document.getElementById('clear');
    const bck_sp=document.getElementById('borrar-atras');
    const txta=document.getElementById('cont');
    const punto=document.getElementById('punto');
    const mameno=document.getElementById('ma-meno');
    const pot=document.getElementById('potencia');
    const raiz=document.getElementById('raiz-2');
    let opInic=false;

    if(txta.scrollHeight>txta.clientHeight){
        txta.value=txta.value.substring(1);
    }
    function verIgual(){
        let iniInput=document.getElementById("ing").value;
        if(iniInput.startsWith("=")){
            iniInput=iniInput.slice(1);
            ingreso.value=iniInput;
        }
    }
    numero.forEach(num=>num.addEventListener("click",(e)=>{
        let iniInput=document.getElementById("ing").value;
        if(iniInput.startsWith("=")){
            ingreso.value="";
        }
        let valor=e.currentTarget.textContent;
        ingreso.value+=valor;
        opInic=true;
    }));

    divi.addEventListener("click",function(){
        verIgual();
        let val=ingreso.value;
        if(opInic){
            ingreso.value=val+"/";
            opInic=false;
        }
        
        
    });
    multi.addEventListener("click",function(){
        verIgual();
        let val=ingreso.value;
        if(opInic){
            ingreso.value=val+"*";
            opInic=false;
        }
    });
    resta.addEventListener("click",function(){
        verIgual();
        let val=ingreso.value;
        if(opInic){
            ingreso.value=val+"-";
            opInic=false;
        }
    });
    suma.addEventListener("click",function(){
        verIgual();
        let val=ingreso.value;
        if(opInic){
            ingreso.value=val+"+";
            opInic=false;
        }
    });
    igual.addEventListener("click",function(){
        let contenido=ingreso.value;
        if(contenido.includes("^")){
            contenido = ingreso.value.replace(/\^/g,"**");
        }
        const patr1= /√(\d+)/g;
        const patr2= /(\d+)√(\d+)/g;
        
        if(patr1.test(contenido)){
            contenido = contenido.replace(patr1,'Math.sqrt($1)');
        }
        else if(patr2.test(contenido)){
                
                
            }
        
        
        try{
            let resul=eval(contenido);
            if(typeof resul === 'number' && !Number.isInteger(resul)){
                resul=resul.toFixed(2);
            }
            ingreso.value="="+resul;
            txta.value+=resul+"\n";
        }catch(error){
            ingreso.value="ERROR";
        }
    });
    bck_sp.addEventListener("click",function(){
        ingreso.value=ingreso.value.slice(0,-1);
    });
    clr.addEventListener("click",function(){
        ingreso.value="";
    });
    clr_e.addEventListener("click",function(){
        ingreso.value="";
        txta.value="";
    });
    punto.addEventListener("click",function(){
        verIgual();
        let val=ingreso.value;
        if(opInic){
            ingreso.value=val+".";
            opInic=false;
        }
    });
    mameno.addEventListener("click",function(){
        verIgual();
        let val=ingreso.value;
        if(opInic){
            if(!isNaN(val)){
                val=parseFloat(val);
                val= -val;
                ingreso.value=val;
            }
            else{
            ingreso.value="ERROR";
            }
            opInic=true;
        }
    });
    pot.addEventListener("click",function(){
        verIgual();
        let val=ingreso.value;
        if(opInic){
            ingreso.value=val+"^";
            opInic=false;
        }
    });
    raiz.addEventListener("click",function(){
        verIgual();
        let val=ingreso.value;
        if(opInic){
            ingreso.value=val+"√";
            opInic=false;
        }
    });
};