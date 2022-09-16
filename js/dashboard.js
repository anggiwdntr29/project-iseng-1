window.onload = () => {
  getBlogs();
};

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

const getBlogs = () => {
  $.ajax({
    url: "https://kelazer.000webhostapp.com/getBlogs.php",
    type: "get",
    dataType: "json",
    success: function (result) {
      $("#dashboardContainer").html("");
      result.map((data) => {
        let konten = data.konten.substr(0, 120) + "...";
        $("#dashboardContainer").append(`
                <div class="blog-item">
                    <div class="blog-item-picture">
                        <img src="${data.gambar}" alt="">
                    </div>
                    <div class="blog-main">
                        <a href="content.html?id=${
                          data.id
                        }" class="blog-title">${data.judul}</a>
                        <p class="blog-date">${showFormattedDate(
                          data.tanggal
                        )}</p>
                        <p class="blog-sinopsis">${konten}</p>
                        <p class="blog-author">${data.penulis}</p>
                    </div>
                    <div class="tombol">
                        <div class="btn-edit">
                            Edit
                        </div>
                        <div class="btn-hapus">
                            Hapus
                        </div>
                    </div>
                </div>
                `);
      });
    },
  });
};
