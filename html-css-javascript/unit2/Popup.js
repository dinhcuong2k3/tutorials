function validateForm() {
    let firstName = document.forms["studentForm"]["firstName"].value;

    if (firstName === "") {
        showError("firstNameFormItem", "Họ tên là bắt buộc");
    } else {
        clearError("firstNameFormItem");
    }

    let Email = document.forms["studentForm"]["Email"].value;

    if (Email === "") {
        showError("emailFormItem", "Email là bắt buộc");
    } else {
        clearError("emailFormItem");
    }
    return false;
}

function showError(formItemId, errorMessage) {
    clearError(formItemId);

    const formItem = document.getElementById(formItemId);
    formItem.classList.add("form__item--error");
    const errorSpan = document.createElement('span');
    errorSpan.className = "form__error-message";
    errorSpan.textContent = errorMessage;
    formItem.appendChild(errorSpan);
}

function clearError(formItemId) {
    const formItem = document.getElementById(formItemId);
    const isError = formItem.classList.contains("form__item--error");
    if (!isError) {
        return;
    }

    formItem.classList.remove("form__item--error");
    const errorSpan = formItem.getElementsByClassName("form__error-message");
    formItem.removeChild(errorSpan[0]);


}


function openPopup() {
    // var -> let, const
    const popup = document.getElementById("helloPopup");
    popup.classList.remove('hide');
    const popupOutline = document.getElementsByClassName("popup-outline")[0];
    popupOutline.classList.remove('hide');
}

function closePopup() {
    const popup = document.getElementsByClassName("popup")[0];
    popup.classList.add('hide');
    const popupOutline = document.getElementsByClassName("popup-outline")[0];
    popupOutline.classList.add('hide');
}
