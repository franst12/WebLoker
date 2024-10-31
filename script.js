// Kirim lamaran
function submitApplication(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const job = document.getElementById("job").value;
  document.getElementById("application-response").innerText = `Terima kasih, ${name}. Lamaran untuk posisi ${job} sudah kami terima.`;
}

// Tampilkan halaman Home saat pertama kali dibuka
document.addEventListener("DOMContentLoaded", () => showPage("home"));

var nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
