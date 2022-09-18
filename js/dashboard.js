window.onload = () => {
  getBlogs()
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


const getBlogs = () => {
  $.ajax({
    url: 'https://kelazer.000webhostapp.com/getBlogs.php',
    type: 'get',
    dataType: 'json',
    success: function (result) {
      $('#allBlogs').html('');
      result.map((data, i) => {
        let konten = data.konten.substr(0, 120) + '...';
        $('#allBlogs').append(`
          <tr>
              <td class="no">${i + 1}</td>
              <td class="judul">${data.judul}</td>
              <td class="deskripsi">${konten}</td>
              <td class="kategori">${data.kategori}</td>
              <td class="penulis">${data.penulis}</td>
              <td class="aksi">
                <a href="editBlog.html?id=${data.id}">Edit</a><a onclick="return confirm('Apakah yakin ingin menghapus?')" href="https://kelazer.000webhostapp.com/deleteBlog.php?id=${data.id}">Hapus</a>
              </td>
          </tr>
        `)

      })
    }
  })
}
