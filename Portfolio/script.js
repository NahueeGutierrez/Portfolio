document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});

//JS para el Form
document.getElementById('contact-form').addEventListener('submit', function (e){
    e.preventDefault();
    const formData= new FormData(this);
    console.log('FormData', Object.fromEntries(formData));
    this.reset();
});

  