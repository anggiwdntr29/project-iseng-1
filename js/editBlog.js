const link = window.location.href
const id = link.slice(link.indexOf('='), link.length)[1];

const tanggal = new Date().toISOString().slice(0, 10);
$("form").on("submit", function (e) {
    $("#tanggal").val(tanggal);
    const dataString = $(this).serialize();
    $.ajax({
        type: "POST",
        url: `https://kelazer.000webhostapp.com/editBlog.php?id=${id}`,
        data: dataString,
        success: function () {
            $('#alertEdit').html(`
                <div class="alert alert-warning" role="alert">Berhasil diedit!</div>
            `).fadeIn(1500).fadeOut(6000)
        }
    })
    e.preventDefault()
})

window.onload = () => {
    getBlogById()
}

const getBlogById = () => {

    $.ajax({
        url: `https://kelazer.000webhostapp.com/getBlogById.php?id=${id}`,
        type: 'get',
        dataType: 'json',
        success: function (result) {
            $('#formEdit').html('');
            result.map((data) => {
                $('#formEdit').append(`
                    <input type="file" class="inpt-img" id="img">
                    <label class="uploadImg" for="img">
                    <i class="fa-regular fa-image"></i>Upload Gambar</label>

                    <input style="display: none;" type="text" name="gambar" value="https://picsum.photos/200/300">

                    <input style="display: none;" id="tanggal" type="date" name="tanggal" value=${data.tanggal}>

                    <input value="${data.judul}" name="judul" type="text" class="form-text" placeholder="Tambahkan Judul" required>

                    <textarea name="konten" class="form-area" placeholder="Deskripsi" required>${data.konten}</textarea>

                    <div class="input-group mb-3 mt-2">
                        <label class="input-group-text" for="kategori">Kategori</label>
                        <select name="kategori" class="form-select" id="kategori">
                            <option value="${data.kategori}" selected>${data.kategori}</option>
                            <option value="Coding">Coding</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Musik">Musik</option>
                            <option value="Anime">Anime</option>
                        </select>
                    </div>

                    <div class="input-group mt-2">
                        <label class="input-group-text" for="penulis">Penulis</label>
                        <select name="penulis" class="form-select" id="penulis">
                            <option value="${data.penulis}" selected>${data.penulis}</option>
                            <option value="Hokky">Hokky</option>
                            <option value="Anggi">Anggi</option>
                        </select>
                    </div>

                    <div class="btn">
                        <input type="submit" class="form-btn" value="Edit">
                    </div>
                `)
            })
        }
    })
}