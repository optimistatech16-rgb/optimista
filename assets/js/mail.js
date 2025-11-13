(function(){
           emailjs.init("bhXm_GinV4GIp0gox"); // Replace with your EmailJS Public Key
         })();
        document.getElementById("successMessage").classList.add("fade", "show");
        document.getElementById("contactForm").addEventListener("submit", function(event) {
           event.preventDefault();
         
           const form = this;
           
           emailjs.sendForm("service_tvbhd7d", "template_zwg7vfk", form)
             .then(() => {
               form.reset();
               document.getElementById("successMessage").style.display = "block";
             })
             .catch((error) => {
               console.error("EmailJS Error:", error);
               alert("Oops! Something went wrong. Please try again later.");
             });
         });