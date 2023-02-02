const encriptar = () => {
    let textAreaContent = textArea.value
    textAreaContent = textAreaContent.toLowerCase()
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
    return textAreaContent;
};

const btnEncriptar = document.querySelector('.btn_encriptar');
const textArea = document.querySelector('.encriptador__text');

btnEncriptar.addEventListener('click', encriptar);



console.log(btnEncriptar);