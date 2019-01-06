const contact = document.querySelector('.contactf')
let formShow = false;

function contactForm() {
  if(!formShow) {
    contact.classList.add('show');
    //txtcenter.classList.add('show');
    
    formShow=true;

  }  else {
    contact.classList.remove('show');
    //txtcenter.classList.remove('show');
    formShow=false;
  }
}
btn-form.addEventListener('click', contactForm);