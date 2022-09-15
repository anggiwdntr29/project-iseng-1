window.onload = () => {
    getBlogById()
}

const showFormattedDate = (date) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    return new Date(date).toLocaleDateString("id-ID", options)
}

const getBlogById = () => {
    const link = window.location.href
    const id = link.slice(link.indexOf('='), link.length)[1];
    $.ajax({
        url: `https://kelazer.000webhostapp.com/getBlogById.php?id=${id}`,
        type: 'get',
        dataType: 'json',
        success: function (result) {
            $('#contentContainer').html('');
            result.map((data) => {
                $('#contentContainer').append(`
                    <div class="head">
                        <div class="gambar">
                            <img src="${data.gambar}" alt="dummy">
                        </div>
                    </div>
                    <div class="body">
                        <div class="body-title">
                            <h2>${data.judul}</h2>
                        </div>
                        <p class="body-date">${showFormattedDate(data.tanggal)}</p>
                        <p class="body-author">Penulis: ${data.penulis}</p>
                        <div class="body-content">
                            <p>${data.konten}</p>
                        </div>
                    </div>
                `)
            })
        }
    })
}