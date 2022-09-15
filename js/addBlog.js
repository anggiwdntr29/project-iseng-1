const tanggal = new Date().toISOString().slice(0, 10);
$("form").on("submit", function (e) {
    $("#tanggal").val(tanggal);
    const dataString = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "https://kelazer.000webhostapp.com/addBlog.php",
        data: dataString,
        success: function () {
            $('#alertInfo').html(`
                <div class="alert alert-primary" role="alert">Berhasil disimpan!</div>
            `).fadeIn(1500).fadeOut(6000)
        }
    })
    e.preventDefault()
    $('form')[0].reset()
})
