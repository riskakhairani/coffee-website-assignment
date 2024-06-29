document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Pesanan anda telah diterima. Mohon cek email untuk kelanjutannya!");

        form.reset();
    });
});
