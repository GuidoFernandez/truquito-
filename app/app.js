$(document).ready(function(){
   var Equipo1contador=0;
   var Equipo2contador=0;
   var acuanto=0;
   var bfin;
   var afin;

   
    //boton de iniciar
    $('#iniciar').on('click', Fniniciar);
    //boton de fin
    $('#fin').on('click', fnterminado);
    //boton "Mas" equipo1
    $('#btn1').on('click', fnmas);
    //boton "mas" equipo2
    $('#btn2').on('click', fnmas2);
    //boton "menos" equipo1
    $('#btn4').on('click',fnmenos2);
    //boton "menos" equipo1
    $('#btn3').on('click',fnmenos);
    //toma el valor de acuanto se juega ("30")
    $('#30puntos').on('click', fnacuanto30);
    //toma el valor de acuanto se juega ("24")
    $('#24puntos').on('click', fnacuanto24);
    
    
   
   



   //funcion iniciar
            function Fniniciar(){
            
                    $('.secundaria').removeClass('oculto').addClass('visible');
                    $('.principal').removeClass('visible').addClass('oculto');
                

            //recupera el valor del  nombre de los equipos
                    a=$('#equipo1').val();
                    b=$('#equipo2').val();
                    $('#equi').text(a);
                    $('#equi2').text(b);
                    b=bfin;
                    a=afin;
            }   
            //acuanto se juega 30
            function fnacuanto30(){
                    acuanto=$('#30puntos').val()
                    console.log(acuanto);
                    $('#cuanto').text(acuanto);
                    acuanto=parseInt(acuanto)
                    acuantofn=acuanto
            };
            //acuanto se juega 24
            function fnacuanto24(){
                    acuanto=$('#24puntos').val()
                    console.log(acuanto);
                    $('#cuanto').text(acuanto);
                    acuanto=parseInt(acuanto)
                    acuantofn=acuanto
            };

            //funcion 'MAS' equipo1
            function fnmas(){
                    if(Equipo1contador<=acuanto-1){
                        Equipo1contador++;
                        console.log(Equipo1contador)
                    } 
                    else{
                        Equipo1contador;
                    }      
                    $('#puntos1').text(Equipo1contador)
                    if(acuanto==30){
                        for (i=1; i<=Equipo1contador; i++) {
                        if(i==1){
                            $('#p11').attr('src','../Anotador de truco/img/1.png');
                        }
                        else if(i==2){
                            $('#p11').attr('src','../Anotador de truco/img/2.png');
                        }
                        else if(i==3){
                            $('#p11').attr('src','../Anotador de truco/img/3.png');
                        }
                        else if(i==4){
                            $('#p11').attr('src','../Anotador de truco/img/4.png');
                        }
                        else if(i==5){
                            $('#p11').attr('src','../Anotador de truco/img/5.png');
                        }
                        else if(i==6){
                            $('#p12').attr('src','../Anotador de truco/img/1.png');
                        }
                        else if(i==7){
                            $('#p12').attr('src','../Anotador de truco/img/2.png');
                        }
                        else if(i==8){
                            $('#p12').attr('src','../Anotador de truco/img/3.png');
                        }
                        else if(i==9){
                            $('#p12').attr('src','../Anotador de truco/img/4.png');
                        }
                        else if(i==10){
                            $('#p12').attr('src','../Anotador de truco/img/5.png');
                        }
                        else if(i==11){
                            $('#p13').attr('src','../Anotador de truco/img/1.png');
                        }
                        else if(i==12){
                            $('#p13').attr('src','../Anotador de truco/img/2.png');
                        }
                        else if(i==13){
                            $('#p13').attr('src','../Anotador de truco/img/3.png');
                        }
                        else if(i==14){
                            $('#p13').attr('src','../Anotador de truco/img/4.png');
                        }
                        else if(i==15){
                            $('#p13').attr('src','../Anotador de truco/img/5.png');
                        }
                        else if(i==16){
                            $('#p14').attr('src','../Anotador de truco/img/1.png');
                        }
                        else if(i==17){
                            $('#p14').attr('src','../Anotador de truco/img/2.png');
                        }
                        else if(i==18){
                            $('#p14').attr('src','../Anotador de truco/img/3.png');
                        }
                        else if(i==19){
                            $('#p14').attr('src','../Anotador de truco/img/4.png');
                        }
                        else if(i==20){
                            $('#p14').attr('src','../Anotador de truco/img/5.png');
                        }
                        //aca
                        else if(i==21){
                            $('#p15').attr('src','../Anotador de truco/img/1.png');
                        }
                        else if(i==22){
                            $('#p15').attr('src','../Anotador de truco/img/2.png');
                        }
                        else if(i==23){
                            $('#p15').attr('src','../Anotador de truco/img/3.png');
                        }
                        else if(i==24){
                            $('#p15').attr('src','../Anotador de truco/img/4.png');
                        }
                        else if(i==25){
                            $('#p15').attr('src','../Anotador de truco/img/5.png');
                        }
                        //aca
                        else if(i==26){
                            $('#p16').attr('src','../Anotador de truco/img/1.png');
                        }
                        else if(i==27){
                            $('#p16').attr('src','../Anotador de truco/img/2.png');
                        }
                        else if(i==28){
                            $('#p16').attr('src','../Anotador de truco/img/3.png');
                        }
                        else if(i==29){
                            $('#p16').attr('src','../Anotador de truco/img/4.png');
                        }
                        else if(i==30){
                            $('#p16').attr('src','../Anotador de truco/img/5.png');
                        }
                    } 

                    }else if(acuanto==24){
                        for (i=1; i<=Equipo1contador; i++) {
                            if(i==1){
                                $('#p11').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if(i==2){
                                $('#p11').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if(i==3){
                                $('#p11').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if(i==4){
                                $('#p11').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if(i==5){
                                $('#p11').attr('src','../Anotador de truco/img/5.png');
                            }
                            else if(i==6){
                                $('#p12').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if(i==7){
                                $('#p12').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if(i==8){
                                $('#p12').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if(i==9){
                                $('#p12').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if(i==10){
                                $('#p12').attr('src','../Anotador de truco/img/5.png');
                            }
                            else if(i==11){
                                $('#p13').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if(i==12){
                                $('#p13').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if(i==13){
                                $('#p13').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if(i==14){
                                $('#p13').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if(i==15){
                                $('#p13').attr('src','../Anotador de truco/img/5.png');
                            }
                            else if(i==16){
                                $('#p14').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if(i==17){
                                $('#p14').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if(i==18){
                                $('#p14').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if(i==19){
                                $('#p14').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if(i==20){
                                $('#p14').attr('src','../Anotador de truco/img/5.png');
                            }
                            //aca
                            else if(i==21){
                                $('#p15').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if(i==22){
                                $('#p15').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if(i==23){
                                $('#p15').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if(i==24){
                                $('#p15').attr('src','../Anotador de truco/img/4.png');
                            }
                        }

                    }
                    } 
                    
                    
            
        

            //funcion "MENOS" equipo1
            function fnmenos(){
                    if(Equipo1contador>0){
                        Equipo1contador--;
                    }
                    else{
                        Equipo1contador;
                    } 
                    $('#puntos1').text(Equipo1contador) 
                    if(acuanto==30){
                        for(i=30;Equipo1contador<=i; i--){
                            if(i==29){
                                $('#p16').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if (i==28){
                                $('#p16').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if (i==27){
                                $('#p16').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if (i==26){
                                $('#p16').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if (i==25){
                                $('#p16').attr('src','../Anotador de truco/img/0.png');
                            }
                            //24
                            else if (i==24){
                                $('#p15').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if (i==23){
                                $('#p15').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if (i==22){
                                $('#p15').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if (i==21){
                                $('#p15').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if (i==20){
                                $('#p15').attr('src','../Anotador de truco/img/0.png');
                            }
                            //19
                            else if (i==19){
                                $('#p14').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if (i==18){
                                $('#p14').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if (i==17){
                                $('#p14').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if (i==16){
                                $('#p14').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if (i==15){
                                $('#p14').attr('src','../Anotador de truco/img/0.png');
                            }
                            //14
                            else if (i==14){
                                $('#p13').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if (i==13){
                                $('#p13').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if (i==12){
                                $('#p13').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if (i==11){
                                $('#p13').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if (i==10){
                                $('#p13').attr('src','../Anotador de truco/img/0.png');
                            }
                            //9
                            else if (i==9){
                                $('#p12').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if (i==8){
                                $('#p12').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if (i==7){
                                $('#p12').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if (i==6){
                                $('#p12').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if (i==5){
                                $('#p12').attr('src','../Anotador de truco/img/0.png');
                            }
                            //4
                            else if (i==4){
                                $('#p11').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if (i==3){
                                $('#p11').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if (i==2){
                                $('#p11').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if (i==1){
                                $('#p11').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if (i==0){
                                $('#p11').attr('src','../Anotador de truco/img/0.png');
                            }

                        }
                        
                    } else if(acuanto==24){
                        for(i=24;Equipo1contador<=i; i--){
                            if(i==24){
                                $('#p15').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if (i==23){
                                $('#p15').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if (i==22){
                                $('#p15').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if (i==21){
                                $('#p15').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if (i==20){
                                $('#p15').attr('src','../Anotador de truco/img/0.png');
                            }
                            //19
                            else if (i==19){
                                $('#p14').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if (i==18){
                                $('#p14').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if (i==17){
                                $('#p14').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if (i==16){
                                $('#p14').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if (i==15){
                                $('#p14').attr('src','../Anotador de truco/img/0.png');
                            }
                            //14
                            else if (i==14){
                                $('#p13').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if (i==13){
                                $('#p13').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if (i==12){
                                $('#p13').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if (i==11){
                                $('#p13').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if (i==10){
                                $('#p13').attr('src','../Anotador de truco/img/0.png');
                            }
                            //9
                            else if (i==9){
                                $('#p12').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if (i==8){
                                $('#p12').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if (i==7){
                                $('#p12').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if (i==6){
                                $('#p12').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if (i==5){
                                $('#p12').attr('src','../Anotador de truco/img/0.png');
                            }
                            //4
                            else if (i==4){
                                $('#p11').attr('src','../Anotador de truco/img/4.png');
                            }
                            else if (i==3){
                                $('#p11').attr('src','../Anotador de truco/img/3.png');
                            }
                            else if (i==2){
                                $('#p11').attr('src','../Anotador de truco/img/2.png');
                            }
                            else if (i==1){
                                $('#p11').attr('src','../Anotador de truco/img/1.png');
                            }
                            else if (i==0){
                                $('#p11').attr('src','../Anotador de truco/img/0.png');
                            }
                    }
                }
                };
    
                
                
              
           

             //funcion 'MAS' equipo2
            function fnmas2(){
                if(Equipo2contador<=acuanto-1){
                    Equipo2contador++;
                    console.log(Equipo2contador)
                } 
                else{
                    Equipo2contador;
                }
                $('#puntos2').text(Equipo2contador)
                if(acuanto==30){
                    for (i=1; i<=Equipo2contador; i++) {
                    if(i==1){
                        $('#p21').attr('src','../Anotador de truco/img/1.png');
                    }
                    else if(i==2){
                        $('#p21').attr('src','../Anotador de truco/img/2.png');
                    }
                    else if(i==3){
                        $('#p21').attr('src','../Anotador de truco/img/3.png');
                    }
                    else if(i==4){
                        $('#p21').attr('src','../Anotador de truco/img/4.png');
                    }
                    else if(i==5){
                        $('#p21').attr('src','../Anotador de truco/img/5.png');
                    }
                    else if(i==6){
                        $('#p22').attr('src','../Anotador de truco/img/1.png');
                    }
                    else if(i==7){
                        $('#p22').attr('src','../Anotador de truco/img/2.png');
                    }
                    else if(i==8){
                        $('#p22').attr('src','../Anotador de truco/img/3.png');
                    }
                    else if(i==9){
                        $('#p22').attr('src','../Anotador de truco/img/4.png');
                    }
                    else if(i==10){
                        $('#p22').attr('src','../Anotador de truco/img/5.png');
                    }
                    else if(i==11){
                        $('#p23').attr('src','../Anotador de truco/img/1.png');
                    }
                    else if(i==12){
                        $('#p23').attr('src','../Anotador de truco/img/2.png');
                    }
                    else if(i==13){
                        $('#p23').attr('src','../Anotador de truco/img/3.png');
                    }
                    else if(i==14){
                        $('#p23').attr('src','../Anotador de truco/img/4.png');
                    }
                    else if(i==15){
                        $('#p23').attr('src','../Anotador de truco/img/5.png');
                    }
                    else if(i==16){
                        $('#p24').attr('src','../Anotador de truco/img/1.png');
                    }
                    else if(i==17){
                        $('#p24').attr('src','../Anotador de truco/img/2.png');
                    }
                    else if(i==18){
                        $('#p24').attr('src','../Anotador de truco/img/3.png');
                    }
                    else if(i==19){
                        $('#p24').attr('src','../Anotador de truco/img/4.png');
                    }
                    else if(i==20){
                        $('#p24').attr('src','../Anotador de truco/img/5.png');
                    }
                    //aca
                    else if(i==21){
                        $('#p25').attr('src','../Anotador de truco/img/1.png');
                    }
                    else if(i==22){
                        $('#p25').attr('src','../Anotador de truco/img/2.png');
                    }
                    else if(i==23){
                        $('#p25').attr('src','../Anotador de truco/img/3.png');
                    }
                    else if(i==24){
                        $('#p25').attr('src','../Anotador de truco/img/4.png');
                    }
                    else if(i==25){
                        $('#p25').attr('src','../Anotador de truco/img/5.png');
                    }
                    //aca
                    else if(i==26){
                        $('#p26').attr('src','../Anotador de truco/img/1.png');
                    }
                    else if(i==27){
                        $('#p26').attr('src','../Anotador de truco/img/2.png');
                    }
                    else if(i==28){
                        $('#p26').attr('src','../Anotador de truco/img/3.png');
                    }
                    else if(i==29){
                        $('#p26').attr('src','../Anotador de truco/img/4.png');
                    }
                    else if(i==30){
                        $('#p26').attr('src','../Anotador de truco/img/5.png');
                    }
                } 

                }else if(acuanto==24){
                    for (i=1; i<=Equipo2contador; i++) {
                        if(i==1){
                            $('#p21').attr('src','../Anotador de truco/img/1.png');
                        }
                        else if(i==2){
                            $('#p21').attr('src','../Anotador de truco/img/2.png');
                        }
                        else if(i==3){
                            $('#p21').attr('src','../Anotador de truco/img/3.png');
                        }
                        else if(i==4){
                            $('#p21').attr('src','../Anotador de truco/img/4.png');
                        }
                        else if(i==5){
                            $('#p21').attr('src','../Anotador de truco/img/5.png');
                        }
                        else if(i==6){
                            $('#p22').attr('src','../Anotador de truco/img/1.png');
                        }
                        else if(i==7){
                            $('#p22').attr('src','../Anotador de truco/img/2.png');
                        }
                        else if(i==8){
                            $('#p22').attr('src','../Anotador de truco/img/3.png');
                        }
                        else if(i==9){
                            $('#p22').attr('src','../Anotador de truco/img/4.png');
                        }
                        else if(i==10){
                            $('#p22').attr('src','../Anotador de truco/img/5.png');
                        }
                        else if(i==11){
                            $('#p23').attr('src','../Anotador de truco/img/1.png');
                        }
                        else if(i==12){
                            $('#p23').attr('src','../Anotador de truco/img/2.png');
                        }
                        else if(i==13){
                            $('#p23').attr('src','../Anotador de truco/img/3.png');
                        }
                        else if(i==14){
                            $('#p23').attr('src','../Anotador de truco/img/4.png');
                        }
                        else if(i==15){
                            $('#p23').attr('src','../Anotador de truco/img/5.png');
                        }
                        else if(i==16){
                            $('#p24').attr('src','../Anotador de truco/img/1.png');
                        }
                        else if(i==17){
                            $('#p24').attr('src','../Anotador de truco/img/2.png');
                        }
                        else if(i==18){
                            $('#p24').attr('src','../Anotador de truco/img/3.png');
                        }
                        else if(i==19){
                            $('#p24').attr('src','../Anotador de truco/img/4.png');
                        }
                        else if(i==20){
                            $('#p24').attr('src','../Anotador de truco/img/5.png');
                        }
                        //aca
                        else if(i==21){
                            $('#p25').attr('src','../Anotador de truco/img/1.png');
                        }
                        else if(i==22){
                            $('#p25').attr('src','../Anotador de truco/img/2.png');
                        }
                        else if(i==23){
                            $('#p25').attr('src','../Anotador de truco/img/3.png');
                        }
                        else if(i==24){
                            $('#p25').attr('src','../Anotador de truco/img/4.png');
                        }
                    }
                
            
                }
            };

            //funcion "MENOS" equipo2
            function fnmenos2(){
                if(Equipo2contador>0){
                    Equipo2contador--;
                }
                else{
                    Equipo2contador;
                }
                $('#puntos2').text(Equipo2contador)
                for(i=30;Equipo2contador<=i; i--){
                    if(i==29){
                        $('#p26').attr('src','../Anotador de truco/img/4.png');
                    }
                    else if (i==28){
                        $('#p26').attr('src','../Anotador de truco/img/3.png');
                    }
                    else if (i==27){
                        $('#p26').attr('src','../Anotador de truco/img/2.png');
                    }
                    else if (i==26){
                        $('#p26').attr('src','../Anotador de truco/img/1.png');
                    }
                    else if (i==25){
                        $('#p26').attr('src','../Anotador de truco/img/0.png');
                    }
                    //24
                    else if (i==24){
                        $('#p25').attr('src','../Anotador de truco/img/4.png');
                    }
                    else if (i==23){
                        $('#p25').attr('src','../Anotador de truco/img/3.png');
                    }
                    else if (i==22){
                        $('#p25').attr('src','../Anotador de truco/img/2.png');
                    }
                    else if (i==21){
                        $('#p25').attr('src','../Anotador de truco/img/1.png');
                    }
                    else if (i==20){
                        $('#p25').attr('src','../Anotador de truco/img/0.png');
                    }
                    //19
                    else if (i==19){
                        $('#p24').attr('src','../Anotador de truco/img/4.png');
                    }
                    else if (i==18){
                        $('#p24').attr('src','../Anotador de truco/img/3.png');
                    }
                    else if (i==17){
                        $('#p24').attr('src','../Anotador de truco/img/2.png');
                    }
                    else if (i==16){
                        $('#p24').attr('src','../Anotador de truco/img/1.png');
                    }
                    else if (i==15){
                        $('#p24').attr('src','../Anotador de truco/img/0.png');
                    }
                    //14
                    else if (i==14){
                        $('#p23').attr('src','../Anotador de truco/img/4.png');
                    }
                    else if (i==13){
                        $('#p23').attr('src','../Anotador de truco/img/3.png');
                    }
                    else if (i==12){
                        $('#p23').attr('src','../Anotador de truco/img/2.png');
                    }
                    else if (i==11){
                        $('#p23').attr('src','../Anotador de truco/img/1.png');
                    }
                    else if (i==10){
                        $('#p23').attr('src','../Anotador de truco/img/0.png');
                    }
                    //9
                    else if (i==9){
                        $('#p22').attr('src','../Anotador de truco/img/4.png');
                    }
                    else if (i==8){
                        $('#p22').attr('src','../Anotador de truco/img/3.png');
                    }
                    else if (i==7){
                        $('#p22').attr('src','../Anotador de truco/img/2.png');
                    }
                    else if (i==6){
                        $('#p22').attr('src','../Anotador de truco/img/1.png');
                    }
                    else if (i==5){
                        $('#p22').attr('src','../Anotador de truco/img/0.png');
                    }
                    //4
                    else if (i==4){
                        $('#p21').attr('src','../Anotador de truco/img/4.png');
                    }
                    else if (i==3){
                        $('#p21').attr('src','../Anotador de truco/img/3.png');
                    }
                    else if (i==2){
                        $('#p21').attr('src','../Anotador de truco/img/2.png');
                    }
                    else if (i==1){
                        $('#p21').attr('src','../Anotador de truco/img/1.png');
                    }
                    else if (i==0){
                        $('#p21').attr('src','../Anotador de truco/img/0.png');
                    } 
                }
            };

            //finnnn
            function    fnterminado (){
                afin=''
                bfin=''
                acuantofn=''
              
                $('#equi').html(afin);
                $('#equi2').html(bfin);

                $('#cuanto').html(acuantofn);
                Equipo1contador=0;
                Equipo2contador=0;
                for(i=1;i<=6;i++){
                    $('#p1'+i).attr('src', '../Anotador de truco/img/0.png')

                }
                for(i=1;i<=6;i++){
                    $('#p2'+i).attr('src', '../Anotador de truco/img/0.png')
                }
                
                
                
                $('.secundaria').removeClass('visible').addClass('oculto');
                $('.principal').removeClass('oculto').addClass('visible');
               
            }
            
             
});



































