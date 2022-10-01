import throttle from "lodash.throttle"; 
import localStorage from "./storage";  


const form = document.querySelector(".feedback-form");


const FORM_STORAGE_KEY = "feedback-form-state";

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

onPageLoad(form);

function onPageLoad(formReference) {
  const formDataObj = localStorage.load(FORM_STORAGE_KEY);
  if (!formDataObj) {
    return;
  }
  const {
    elements: { email, message },
  } = formReference;
  email.value = formDataObj.email;
  message.value = formDataObj.message;
};

function onFormInput(event) {
  const formData = new FormData(event.target.closest('.feedback-form'));
  const formDataObj = {};
  formData.forEach((value, key) => {
    formDataObj[key] = value;
  });
  localStorage.save(FORM_STORAGE_KEY, formDataObj);
};


function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const formDataObj = {};
  formData.forEach((value, key) => {
    formDataObj[key] = value;
  });
  if (!formDataObj.email) {
    alert('Please fill email');
    return;
  } else if (!formDataObj.message) {
    alert('Please fill message');
    return;
  } else {
    console.log(formDataObj);
    localStorage.remove(FORM_STORAGE_KEY);
    event.currentTarget.reset();
  }
};


