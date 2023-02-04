const showTextOnResponseScreen = (text) => {
    responseScreenResponse.style.justifyContent = 'space-between';
    muñeco.style.display = 'none';
    responseH2.style.display = 'none';
    responseP.style.textAlign = 'left';
    responseP.style.fontSize = '2.4rem';
    responseP.style.overflowY = 'scroll';
    responseP.textContent = text;
    btnCopy.style.display = 'block';
};

const noneText = () => {
    responseP.textContent = '';
    console.log('Crack' + responseP.textContent);   
    responseScreenResponse.style.justifyContent = 'center';
    muñeco.style.display = 'block';
    responseH2.style.display = 'block';
    btnCopy.style.display = 'none';
    responseP.textContent = 'Ingresa el texto que desees encriptar o desencriptar';
    responseP.style.textAlign = 'center';
    responseP.style.fontSize = '1.6rem';
    responseP.style.overflowY = 'hidden';
    responseP.style.display = 'block';
};

const copyToClipboard = () => {
    let responseText = responseP.textContent;
    navigator.clipboard.writeText(responseText);
};

const decrypt = () => {
    let textAreaContent = textArea.value
    if(textAreaContent === ""){
        if(muñeco.style.display === 'none'){
            noneText();
        }
        else {
            return false;
        }
    }else{
        textAreaContent = textAreaContent.replaceAll(/ai/g, 'a');
        textAreaContent = textAreaContent.replaceAll(/enter/g, 'e');
        textAreaContent = textAreaContent.replaceAll(/imes/g, 'i');
        textAreaContent = textAreaContent.replaceAll(/ober/g, 'o');
        textAreaContent = textAreaContent.replaceAll(/ufat/g, 'u');
        showTextOnResponseScreen(textAreaContent);
    };
};

const encrypt = () => {
    let textAreaContent = textArea.value
    if(textAreaContent === ""){
        if(muñeco.style.display === 'none'){
            noneText();
        }
        else {
            return false;
        }
    } else {
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
};

const textArea = document.querySelector('.encrypter__text');
const responseScreenResponse = document.querySelector('.responsescreen__response'); 
const responseH2 = document.querySelector('.responseh2');
const responseP = document.querySelector('.responsep');
const btnEncrypt = document.querySelector('.btn_encrypt');
const btnDecrypt = document.querySelector('.btn_decrypt');
const btnCopy = document.querySelector('.btn_copy');
const muñeco = document.querySelector('.muñecoresponse');

btnEncrypt.addEventListener('click', encrypt);
btnDecrypt.addEventListener('click', decrypt);
btnCopy.addEventListener('click', copyToClipboard);
