const showTextOnResponseScreen = (text) => {
    responseH2.style.display = 'none';
    responseP.style.textAlign = 'left';
    responseP.style.fontSize = '2.4rem';
    responseP.textContent = text;
    btnCopy.style.display = 'block';
};

const copyToClipboard = () => {
    let responseText = responseP.textContent;
    navigator.clipboard.writeText(responseText);
};

const decrypt = () => {
    let textAreaContent = textArea.value
    textAreaContent = textAreaContent.replaceAll(/ai/g, 'a');
    textAreaContent = textAreaContent.replaceAll(/enter/g, 'e');
    textAreaContent = textAreaContent.replaceAll(/imes/g, 'i');
    textAreaContent = textAreaContent.replaceAll(/ober/g, 'o');
    textAreaContent = textAreaContent.replaceAll(/ufat/g, 'u');
    showTextOnResponseScreen(textAreaContent);
};

const encrypt = () => {
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
    showTextOnResponseScreen(textAreaContent);
};

const textArea = document.querySelector('.encrypter__text');
const responseScreenResponse = document.querySelector('.responsescreen__response'); 
const responseH2 = document.querySelector('.responseh2');
const responseP = document.querySelector('.responsep');
const btnEncrypt = document.querySelector('.btn_encrypt');
const btnDecrypt = document.querySelector('.btn_decrypt');
const btnCopy = document.querySelector('.btn_copy');

btnEncrypt.addEventListener('click', encrypt);
btnDecrypt.addEventListener('click', decrypt);
btnCopy.addEventListener('click', copyToClipboard);
