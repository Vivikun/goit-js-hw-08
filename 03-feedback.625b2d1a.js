document.addEventListener("DOMContentLoaded",(function(){var e=_.throttle((function(){var e={email:document.querySelector('input[name="email"]').value,message:document.querySelector('textarea[name="message"]').value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500),t=document.querySelector('input[name="email"]'),a=document.querySelector('textarea[name="message"]'),n=document.querySelector(".feedback-form");t.addEventListener("input",(function(){e()})),a.addEventListener("input",(function(){e()})),n.addEventListener("submit",(function(e){e.preventDefault();var n=t.value.trim(),r=a.value.trim();if(n&&r){localStorage.removeItem("feedback-form-state"),t.value="",a.value="";var o={email:n,message:r};console.log("Data from the form:",o),alert("The data has been sent and the data in the local storage has been deleted.")}else alert("Please complete all form fields.")})),window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);document.querySelector('input[name="email"]').value=t.email,document.querySelector('textarea[name="message"]').value=t.message}}))}));
//# sourceMappingURL=03-feedback.625b2d1a.js.map
