const navbar = document.querySelector('.navbar');
const submitBtn = document.querySelector('.submit')
const navbarToggler = document.querySelector('.navbar-toggler')

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

navbarToggler.addEventListener("click", function() {
  navbar.classList.add("scrolled");
});

submitBtn.addEventListener("click", function() {
  const email = document.getElementById('email').value;
  const nama = document.getElementById('nama').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('pesan').value;

  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });
})
