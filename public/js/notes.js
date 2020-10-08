$(document).on('keyup', '.input-group', function() {
    console.log("keyup")
    $.ajax({
        url: "/notes/ajaxSearch",
        method: 'GET',
        data: { 'search': $('.search').val() },

        dataType: 'json',
        success: function(data) {
            let i = (data.reduce((a, obj) => Object.keys(obj).length, 0));
            $('.list-group').empty();
            // si l'array reçu n'est pas vide
            if (Object.keys(data).lenght != 0) {
                data.forEach(function(e) {
                    $('.list-group').append(`
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1"></h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-1 text-muted">` + e.text + `</p>
                            <small>` + e.created_at + `</small>
                        </a>
                    `);
                });
            } else {
                console.log('vide')
                $('.list-group').empty();
                $('.list-group').append('Aucun résultat')
            }

            input_text = $('.search').val();

            $('p').each(function(index) {
                p = $(this).text();

                let regex = '(.*)'
                for (let j = 0; j < input_text.length ; j++) {
                    regex += '('+input_text[j]+')';
                    regex +="(.*)";
                }
                regex = new RegExp(regex, 'i');
                matches = $(this).text().match(regex);
                text = matches.reduce((acc, match, index) =>{
                    if(index == 0){
                        return acc;
                    }
                    return acc + (index % 2 === 0 ? `<span class="bg-warning">${match}</span>` : match)

                }, '')
                $(this).html(text)


            });
        },
        error: function(data) {
            $('.list-group').empty();
            $('p').empty();
        }


    })
});
