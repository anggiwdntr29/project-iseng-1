const showFormattedDate = (date) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    return new Date(date).toLocaleDateString("id-ID", options)
}

const getBlogs = () => {
    $.ajax({
        url: 'https://kelazer.000webhostapp.com/getBlogs.php',
        type: 'get',
        dataType: 'json',
        success: function (result) {
            $('#blogsContainer').html('');
            result.map((data) => {
                let konten = data.konten.substr(0, 120) + '...';
                $('#blogsContainer').append(`
                <div class="blog-item">
                    <div class="blog-item-picture">
                        <img src="https://picsum.photos/200/300" alt="">
                    </div>
                    <div class="blog-main">
                        <a href="" class="blog-title">${data.judul}</a>
                        <p class="blog-date">${showFormattedDate(data.tanggal)}</p>
                        <p class="blog-sinopsis">${konten}</p>
                        <p class="blog-author">${data.penulis}</p>
                    </div>
                </div>
                `);
            })
        }
    })
}

window.onload = () => {
    getBlogs()
}
