const myForm = document.querySelector('#form');
const sendBtn = document.querySelector('#send');
const modalWnd = document.querySelector('#modal');
const message = document.querySelector('#message');
const closeBtn = document.querySelector('#close');

sendBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", myForm.elements.name.value);
    formData.append("phone", myForm.elements.phone.value);
    formData.append("comment", myForm.elements.comment.value);
    formData.append("to",  "oleksii@ukr.net");

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/');
    xhr.send(formData);
    xhr.addEventListener('load', () => {
        if(xhr.response.status) {
            message.textContent = "Сообщение отправлено";
            
        } else {
            message.textContent = "ERROR!";
        }
        modalWnd.style.display = 'flex';
    })
})

closeBtn.addEventListener('click', () => {
    modalWnd.style.display = 'none';
    myForm.reset();
})