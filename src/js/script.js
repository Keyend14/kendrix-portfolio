$(document).ready(function(){
    $("#fb_page").click(function(){
        window.open('https://www.facebook.com/kendrixniccolo.ducusin', '_blank');
    });
    $("#linkedin_page").click(function(){
        window.open('https://www.linkedin.com/in/kendrix-niccolo-ducusin-12497b21a', '_blank');
    });
    $("#youtube_page").click(function(){
        window.open('https://www.youtube.com/channel/UCbcO94B7TQyjpDk2dEIaTkw', '_blank');
    });

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hide_element');
hiddenElements.forEach((el)=>observer.observe(el));




// Certificate Viewer
const open_qa_cert = document.getElementById('open_qa_cert');
const close_qa_cert = document.getElementById('close_qa_cert');
const qacert = document.getElementById('qacert');

const open_csc_cert = document.getElementById('open_csc_cert');
const close_csc_cert = document.getElementById('close_csc_cert');
const csc_cert = document.getElementById('csc_cert');

const open_despro_cert = document.getElementById('open_despro_cert');
const close_despro_cert = document.getElementById('close_despro_cert');
const despro_cert = document.getElementById('despro_cert');

const open_ojt_cert = document.getElementById('open_ojt_cert');
const close_ojt_cert = document.getElementById('close_ojt_cert');
const ojt_cert = document.getElementById('ojt_cert');

open_qa_cert.addEventListener('click', () => {
    qacert.classList.remove('hidden');
});

close_qa_cert.addEventListener('click', () => {
    qacert.classList.add('hidden');
});

qacert.addEventListener('click', (e) => {
  if (e.target === qacert) {
    qacert.classList.add('hidden');
  }
});


open_csc_cert.addEventListener('click', () => {
    csc_cert.classList.remove('hidden');
});

close_csc_cert.addEventListener('click', () => {
    csc_cert.classList.add('hidden');
});

csc_cert.addEventListener('click', (e) => {
  if (e.target === csc_cert) {
    csc_cert.classList.add('hidden');
  }
});

open_despro_cert.addEventListener('click', () => {
    despro_cert.classList.remove('hidden');
});

close_despro_cert.addEventListener('click', () => {
    despro_cert.classList.add('hidden');
});

despro_cert.addEventListener('click', (e) => {
  if (e.target === despro_cert) {
    despro_cert.classList.add('hidden');
  }
});


open_ojt_cert.addEventListener('click', () => {
    ojt_cert.classList.remove('hidden');
});

close_ojt_cert.addEventListener('click', () => {
    ojt_cert.classList.add('hidden');
});

ojt_cert.addEventListener('click', (e) => {
  if (e.target === ojt_cert) {
    ojt_cert.classList.add('hidden');
  }
});

window.addEventListener('resize', () => {
    qacert.classList.add('hidden');
    csc_cert.classList.add('hidden');
    despro_cert.classList.add('hidden');
    ojt_cert.classList.add('hidden');
});



});