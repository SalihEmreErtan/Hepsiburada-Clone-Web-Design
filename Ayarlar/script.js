// javascript document
$(document).ready(function(){
    /*Ufak cihazlar için menü açma butonunun işlemleri >>>>*/
    $("#HeaderMenuAcmaButonuAlani").on("click",function(){
        $("#HeaderMenuAcmaButonuMenuSinirlamaAlani").slideToggle("slow");
    });
    /*Ufak cihazlar için menü açma butonunun işlemleri <<<<*/

    /*Main ve footer alanı için üstten boşluk hesaplamaları >>> */
    var dokumanGenisligi = $(window).outerWidth();
    if(!$("#HeaderMesajAlani").length){
        if(dokumanGenisligi>=1200){/* XL */
            var ofsetDegeri = 108;
        }else if((dokumanGenisligi>=992) && (dokumanGenisligi<=1199)){/* L */
            var ofsetDegeri = 98;
        }else if((dokumanGenisligi>=768) && (dokumanGenisligi<=991)){/* M */
            var ofsetDegeri = 88;
        }else if((dokumanGenisligi>=576) && (dokumanGenisligi<=767)){/* S */
            var ofsetDegeri = 78;
        }else if(dokumanGenisligi<=574){/* XS */
            var ofsetDegeri = 78;
        }
    }else{
        if(dokumanGenisligi>=1200){/* XL */
            var ofsetDegeri = 148;
        }else if((dokumanGenisligi>=992) && (dokumanGenisligi<=1199)){/* L */
            var ofsetDegeri = 138;
        }else if((dokumanGenisligi>=768) && (dokumanGenisligi<=991)){/* M */
            var ofsetDegeri = 118;
        }else if((dokumanGenisligi>=576) && (dokumanGenisligi<=767)){/* S */
            var ofsetDegeri = 108;
        }else if(dokumanGenisligi<=574){/* XS */
            var ofsetDegeri = 103;
        }
    }
$("main").css("top", ofsetDegeri);
$("footer").css("top", ofsetDegeri);

$(window).resize(function(){
    var dokumanGenisligi = $(window).outerWidth();
    if(!$("#HeaderMesajAlani").length){
        if(dokumanGenisligi>=1200){/* XL */
            var ofsetDegeri = 108;
        }else if((dokumanGenisligi>=992) && (dokumanGenisligi<=1199)){/* L */
            var ofsetDegeri = 98;
        }else if((dokumanGenisligi>=768) && (dokumanGenisligi<=991)){/* M */
            var ofsetDegeri = 88;
        }else if((dokumanGenisligi>=576) && (dokumanGenisligi<=767)){/* S */
            var ofsetDegeri = 78;
        }else if(dokumanGenisligi<=574){/* XS */
            var ofsetDegeri = 78;
        }
    }else{
        if(dokumanGenisligi>=1200){/* XL */
            var ofsetDegeri = 148;
        }else if((dokumanGenisligi>=992) && (dokumanGenisligi<=1199)){/* L */
            var ofsetDegeri = 138;
        }else if((dokumanGenisligi>=768) && (dokumanGenisligi<=991)){/* M */
            var ofsetDegeri = 118;
        }else if((dokumanGenisligi>=576) && (dokumanGenisligi<=767)){/* S */
            var ofsetDegeri = 108;
        }else if(dokumanGenisligi<=574){/* XS */
            var ofsetDegeri = 103;
        }
    }
$("main").css("top", ofsetDegeri);
$("footer").css("top", ofsetDegeri);
});
    /*Main ve footer alanı için üstten boşluk hesaplamaları <<< */
});




