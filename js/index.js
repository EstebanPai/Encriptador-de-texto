const showTextEncript = (text) => {
    responseH2.style.display = 'none';
    responseP.style.textAlign = 'left';
    responseP.style.fontSize = '2.4rem';
    responseP.textContent = text;
    btnCopy.style.display = 'block';
};

const encriptar = () => {
    let textAreaContent = textArea.value
    textAreaContent = textAreaContent.toLowerCase();
    textAreaContent = textAreaContent.split('');
    textAreaContent = textAreaContent.map((char) => {
        switch (char) {
            case 'a': 
                char = char.replace('a', 'ai');
                break;
            case 'e':
                char = char.replace('e', 'enter');
                break;
            case 'i':
                char = char.replace('i', 'imes');
                break;
            case 'o':
                char = char.replace('o', 'ober');
                break;
            case 'u':
                char =char.replace('u', 'ufat');
                break;
            default:
                break;
        }
        return char;
    })
    textAreaContent = textAreaContent.join('');
    showTextEncript(textAreaContent);
};

const textArea = document.querySelector('.encriptador__text');
const responseScreenResponse = document.querySelector('.responsescreen__response'); 
const responseH2 = document.querySelector('.responseh2');
const responseP = document.querySelector('.responsep');
const btnEncriptar = document.querySelector('.btn_encriptar');
const btnCopy = document.querySelector('.btn_copiar');

btnEncriptar.addEventListener('click', encriptar);
