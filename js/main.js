$('#dodajForm').submit(function (){
    event.preventDefault();
    console.log("Dodavanje");
    const $form = $(this);
    const $input = $form.find('input, select, button');

    const serijalizacija = $form.serialize();
    console.log(serijalizacija);

    $input.prop('disabled', true);

    req = $.ajax({
        url: 'handler/add.php',
        type: 'post',
        data: serijalizacija
    });

    req.done(function(res, textStatus, jqXHR){
        if(res == 'Success'){
            alert("klk uspesno dodat");
            console.log("dodat klk");
            location.reload(true);
        }else{
            console.log("klk nije dodat" + res);
        }
        console.log(res)
    });

    req.fail(function(res, textStatus, errorThrown){
        console.log("greska je" + textStatus, errorThrown)
    });
});

$('#btn-obrisi').click(function (){
    console.log("Brisanje");
    const checked = $('input[name=checked-donut]:checked');
    

    req = $.ajax({
        url: 'handler/delete.php',
        type: 'post',
        data: {'id':checked.val()}
    });

    req.done(function(res, textStatus, jqXHR){
        if(res == 'Success'){
            checked.closest('tr').remove();
            alert("obrisan je");
        }else{
            console.log("klk nije obrisan" + res);
            alert("nije");
        }
        console.log(res)
    });

    
});