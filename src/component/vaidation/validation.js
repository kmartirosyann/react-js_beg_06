

 const validate=(state)=>{
    let errors = {};
    let isValid = false;
    if (!state["name"]) {
      isValid = true;
      errors["name"] = "Please enter your name.";
    }

    if (!state["email"]) {
      isValid = true;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof state["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(state["email"])) {
        isValid = true;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!state["message"]) {
      isValid = true;
      errors["message"] = "Please enter your message.";
    }

    
      errors= errors
    return {isValid,
      errors
    }
}

export default validate