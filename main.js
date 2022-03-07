
const btnSuccess = document.querySelector('.btn-success');
const btnRun = document.querySelector('.btn-run');
const title = document.querySelector('.title');
const desc = document.querySelector('.desc');

const form = document.querySelector('.form');
const btnSubmit = document.querySelector('.btn-submit');
const yourName = document.querySelector('#your-name');
const friendName = document.querySelector('#friend-name');

btnSubmit.onclick = function () {
    if (yourName.value && friendName.value) {
        addYourName(yourName.value);
        addFriendName(friendName.value);
        hideForm();
    };

};

function hideForm() {
    form.classList.add('hide');
};

function addYourName(name) {
    btnSuccess.innerText = name;
};

function addFriendName(name) {
    btnRun.innerText = name;
};

btnRun.onmouseover = runBtnRun;
btnRun.onclick = runBtnRun;

function runBtnRun() {
    let newX = Math.floor(Math.random() * 100);
    let newY = Math.floor(Math.random() * 100);
    console.log(newX, newY);
    btnRun.style.top = newX + '%';
    btnRun.style.left = newY + '%';
    desc.innerText = 'Sai rồi xem bạn êi =))';
};


btnSuccess.onmouseover = function () {
    desc.innerText = 'Đoán xem =)))';
};

btnSuccess.onclick = function (e) {
    desc.innerText = 'Congratulation';
    alert('Wao! Giờ biết ai là Heo rồi nhé :))');
    location.reload();
};