function validateForm() {
    let name = document.forms["student--form"]["name"].value;
    console.log("studentId đã nhập là: " + name);
    if (name === "") {
        showError("firstName", "Student ID là bắt buộc");
    } else {
        clearError("firstName");
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