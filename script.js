const popups = document.querySelectorAll('.btn__popup');
const login = document.querySelector('#login');
const register = document.querySelector('#register');
const body = document.querySelector('body');

let unlock = true;

const timeout = 800;
if (popups.length > 0) {
    for (let i = 0; i < popups.length; i++) {
        const popupLink = popups[i];
        popupLink.addEventListener('click', (e) => {
            const popupNames = popupLink.className.split(/\s+/);
            for (let k = 0; k < popupNames.length; k++) {
                switch (popupNames[k]) {
                    case 'login':
                        openPopup(login);
                        break;
                    case 'register':
                        openPopup(register);
                        break;
                    default: continue;
                }
            }

        })
    }
}

const popupsClose = document.querySelectorAll('.popup__close');
if (popupsClose.length > 0) {
    for (let i = 0; i < popupsClose.length; i++) {
        const el = popupsClose[i];
        el.addEventListener('click', (e) => {
            closePopup(el.closest('.popup'));
        })
    }
}


/*Функция открытия модальных окон при помощи .popup.open для el=id class="popup"*/
function openPopup (el) {
    if (el && unlock) {
        if (el.classList.contains('open')) {
            closePopup(el, false)
            // el.classList.remove('open')
        } else {
            lockBody();
            // el.classList.add('open');
        }
        el.classList.add('open');
        el.addEventListener('click', (e) => {
            if (!e.target.closest('.popup__content')) {
                closePopup(e.target.closest('.popup'));
            }
        });
    }
}

function closePopup(el, doUnlock = true) {
    if (unlock) {
        el.classList.remove('open');
        if (doUnlock) {
            lockBody();
        }
    }

}

function lockBody() {

}