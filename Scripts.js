// controls the form

var form = document.getElementById("contactUs-form");

  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)

// Controls the hamburger menu 


  const menu = document.getElementById("nav-menu");
  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  function menuToggle() {
    if (menu.classList.contains('show-menu')) {
      menu.classList.remove('show-menu')
    } else {
      menu.classList.add('show-menu')
    }

  }
