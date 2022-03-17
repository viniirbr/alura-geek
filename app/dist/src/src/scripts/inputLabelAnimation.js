export function inputLabelAnimation(label, input) {
    input.addEventListener('change', () => {
        console.log(input.value);
        if (input.value != '') {
            label.style.marginTop = '10px';
            label.style.fontSize = '0.8rem';
        }
        else {
            label.style.marginTop = '30px';
            label.style.fontSize = '1rem';
        }
    });
    input.addEventListener('click', () => {
        label.style.marginTop = '10px';
        label.style.fontSize = '0.8rem';
    });
}
