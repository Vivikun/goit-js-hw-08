document.addEventListener("DOMContentLoaded",(function(){var e=_.throttle((function(){var e={email:document.querySelector('input[name="email"]').value,message:document.querySelector('textarea[name="message"]').value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500),t=document.querySelector('input[name="email"]'),a=document.querySelector('textarea[name="message"]');t.addEventListener("input",(function(){e()})),a.addEventListener("input",(function(){e()})),document.querySelector(".feedback-form").addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),t.value="",a.value="";var n=localStorage.getItem("feedback-form-state");console.log("Data in local storage after sending the form:",n),alert("The data has been sent, the local storage has been wiped.")})),window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);document.querySelector('input[name="email"]').value=t.email,document.querySelector('textarea[name="message"]').value=t.message}}))}));
//# sourceMappingURL=03-feedback.c431aaed.js.map
